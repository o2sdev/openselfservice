import Medusa from '@medusajs/js-sdk';
import { HttpService } from '@nestjs/axios';
import {
    BadRequestException,
    Inject,
    Injectable,
    NotFoundException,
    NotImplementedException,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Auth, Carts } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../utils/handle-http-error';

import { mapCart } from './carts.mapper';

@Injectable()
export class CartsService extends Carts.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    constructor(
        private readonly config: ConfigService,
        protected httpClient: HttpService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
        private readonly authService: Auth.Service,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || '';

        if (!this.defaultCurrency) {
            throw new Error('DEFAULT_CURRENCY is not defined');
        }
    }

    getCart(params: Carts.Request.GetCartParams, authorization?: string): Observable<Carts.Model.Cart | undefined> {
        return from(this.sdk.store.cart.retrieve(params.id, {}, this.getHeaders())).pipe(
            map((response) => {
                const cart = mapCart(response.cart, this.defaultCurrency);

                // Verify ownership for customer carts
                if (
                    cart.customerId &&
                    authorization &&
                    cart.customerId !== this.authService.getCustomerId(authorization)
                ) {
                    throw new UnauthorizedException('Unauthorized to access this cart');
                }

                return cart;
            }),
            catchError((error) => {
                if (error.status === 404) {
                    return of(undefined);
                }
                return handleHttpError(error);
            }),
        );
    }

    getCartList(_query: Carts.Request.GetCartListQuery, _authorization?: string): Observable<Carts.Model.Carts> {
        return throwError(
            () =>
                new NotImplementedException(
                    'Cart listing is not supported in Medusa.js integration. Medusa Store API does not support listing carts, and Admin API does not have a /admin/carts endpoint.',
                ),
        );
    }

    createCart(data: Carts.Request.CreateCartBody, _authorization?: string): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.create(
                {
                    currency_code: data.currency.toLowerCase(),
                    region_id: data.regionId,
                    metadata: data.metadata,
                },
                {},
                this.getHeaders(),
            ),
        ).pipe(
            map((response) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    updateCart(
        params: Carts.Request.UpdateCartParams,
        data: Carts.Request.UpdateCartBody,
        _authorization?: string,
    ): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.update(
                params.id,
                {
                    region_id: data.regionId,
                    metadata: data.metadata,
                },
                {},
                this.getHeaders(),
            ),
        ).pipe(
            map((response) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    deleteCart(_params: Carts.Request.DeleteCartParams, _authorization?: string): Observable<void> {
        this.logger.debug('Delete cart operation - not directly supported in Medusa Store API');

        return of(undefined as void);
    }

    addCartItem(data: Carts.Request.AddCartItemBody, authorization?: string): Observable<Carts.Model.Cart> {
        if (!data.variantId) {
            throw new BadRequestException('Variant ID is required for Medusa carts');
        }

        const customerId = authorization ? this.authService.getCustomerId(authorization) : undefined;

        // If cartId provided, use it (after verifying access)
        if (data.cartId) {
            const cartId = data.cartId; // Store for type narrowing
            return from(this.sdk.store.cart.retrieve(cartId, {}, this.getHeaders())).pipe(
                switchMap((response) => {
                    const cart = mapCart(response.cart, this.defaultCurrency);

                    // Verify ownership for customer carts
                    if (cart.customerId && authorization && cart.customerId !== customerId) {
                        throw new UnauthorizedException('Unauthorized to modify this cart');
                    }

                    // Add item to existing cart
                    return from(
                        this.sdk.store.cart.createLineItem(
                            cartId,
                            {
                                variant_id: data.variantId!,
                                quantity: data.quantity,
                                metadata: data.metadata,
                            },
                            {},
                            this.getHeaders(),
                        ),
                    );
                }),
                map((addResponse) => mapCart(addResponse.cart, this.defaultCurrency)),
                catchError((error) => handleHttpError(error)),
            );
        }

        // No cartId provided - create a new cart
        if (!data.currency) {
            throw new BadRequestException('Currency is required when creating a new cart');
        }

        // For authenticated users, create a new cart (can't query existing carts)
        // Medusa doesn't provide a way to query carts by customer
        // Store API doesn't support listing carts
        // Admin API doesn't have /admin/carts endpoint
        if (customerId) {
            return this.createCartAndAddItem(
                data.currency!,
                data.variantId!,
                data.quantity,
                data.regionId,
                data.metadata,
            );
        }

        // For guests, create a new cart
        return this.createCartAndAddItem(data.currency, data.variantId!, data.quantity, data.regionId, data.metadata);
    }

    updateCartItem(
        params: Carts.Request.UpdateCartItemParams,
        data: Carts.Request.UpdateCartItemBody,
        _authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.updateLineItem(
                params.cartId,
                params.itemId,
                {
                    quantity: data.quantity,
                    metadata: data.metadata,
                },
                {},
                this.getHeaders(),
            ),
        ).pipe(
            map((response) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    removeCartItem(params: Carts.Request.RemoveCartItemParams, _authorization?: string): Observable<Carts.Model.Cart> {
        return from(this.sdk.store.cart.deleteLineItem(params.cartId, params.itemId, this.getHeaders())).pipe(
            map((response) => {
                if (!response.parent) {
                    throw new NotFoundException('Cart not found after item removal');
                }
                return mapCart(response.parent, this.defaultCurrency);
            }),
            catchError((error) => handleHttpError(error)),
        );
    }

    applyPromotion(
        params: Carts.Request.ApplyPromotionParams,
        data: Carts.Request.ApplyPromotionBody,
        _authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.update(
                params.cartId,
                {
                    promo_codes: [data.code],
                },
                {},
                this.getHeaders(),
            ),
        ).pipe(
            map((response) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    removePromotion(
        params: Carts.Request.RemovePromotionParams,
        _authorization?: string,
    ): Observable<Carts.Model.Cart> {
        // In Medusa v2, removing promotions requires updating the cart
        // with the remaining promo codes (excluding the one to remove)
        return from(this.sdk.store.cart.retrieve(params.cartId, {}, this.getHeaders())).pipe(
            switchMap((response) => {
                const cart = response.cart;
                // Filter out the promotion to remove
                const remainingCodes =
                    cart.promotions
                        ?.filter((promo: { id?: string }) => promo.id !== params.promotionId)
                        .map((promo: { code?: string }) => promo.code)
                        .filter((code: string | undefined): code is string => code !== undefined) ?? [];

                return from(
                    this.sdk.store.cart.update(
                        params.cartId,
                        {
                            promo_codes: remainingCodes,
                        },
                        {},
                        this.getHeaders(),
                    ),
                );
            }),
            map((response) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    getCurrentCart(_authorization: string | undefined): Observable<Carts.Model.Cart | undefined> {
        return throwError(
            () =>
                new NotImplementedException(
                    'Getting current cart is not supported in Medusa.js integration. Medusa does not provide a way to query carts by customer.',
                ),
        );
    }

    private createCartAndAddItem(
        currency: string,
        variantId: string,
        quantity: number,
        regionId?: string,
        metadata?: Record<string, unknown>,
    ): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.create(
                {
                    currency_code: currency.toLowerCase(),
                    region_id: regionId,
                    metadata,
                },
                {},
                this.getHeaders(),
            ),
        ).pipe(
            switchMap((createResponse) =>
                from(
                    this.sdk.store.cart.createLineItem(
                        createResponse.cart.id,
                        {
                            variant_id: variantId,
                            quantity,
                            metadata,
                        },
                        {},
                        this.getHeaders(),
                    ),
                ),
            ),
            map((addResponse) => mapCart(addResponse.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    private getHeaders(): Record<string, string> {
        return {
            'x-publishable-api-key': this.medusaJsService.getPublishableKey(),
        };
    }
}

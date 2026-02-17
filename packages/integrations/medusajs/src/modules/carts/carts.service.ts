import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import {
    BadRequestException,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    NotImplementedException,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, forkJoin, from, map, of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Auth, Carts, Customers } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../../utils/handle-http-error';
import { mapAddressToMedusa } from '../customers/customers.mapper';

import { mapCart } from './carts.mapper';

@Injectable()
export class CartsService extends Carts.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    constructor(
        private readonly config: ConfigService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
        private readonly authService: Auth.Service,
        private readonly customersService: Customers.Service,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || '';

        if (!this.defaultCurrency) {
            throw new InternalServerErrorException('DEFAULT_CURRENCY is not defined');
        }
    }

    getCart(params: Carts.Request.GetCartParams, authorization?: string): Observable<Carts.Model.Cart | undefined> {
        return from(
            this.sdk.store.cart.retrieve(params.id, {}, this.medusaJsService.getStoreApiHeaders(authorization)),
        ).pipe(
            map((response: HttpTypes.StoreCartResponse) => {
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
                    throw new NotFoundException('Cart not found');
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

    createCart(data: Carts.Request.CreateCartBody, authorization?: string): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.create(
                {
                    currency_code: data.currency.toLowerCase(),
                    region_id: data.regionId,
                    metadata: data.metadata,
                },
                {},
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StoreCartResponse) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    updateCart(
        params: Carts.Request.UpdateCartParams,
        data: Carts.Request.UpdateCartBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart> {
        // Build metadata: merge existing with incoming, and store notes in metadata
        const metadata: Record<string, unknown> = { ...(data.metadata || {}) };
        if (data.notes !== undefined) {
            metadata.notes = data.notes;
        }

        // Build Medusa cart update payload with all supported fields
        const cartUpdate: Partial<HttpTypes.StoreUpdateCart> = {};

        if (data.regionId) {
            cartUpdate.region_id = data.regionId;
        }
        if (data.email) {
            cartUpdate.email = data.email;
        }
        if (Object.keys(metadata).length > 0) {
            cartUpdate.metadata = metadata;
        }

        return from(
            this.sdk.store.cart.update(
                params.id,
                cartUpdate,
                {},
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StoreCartResponse) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    deleteCart(_params: Carts.Request.DeleteCartParams, _authorization?: string): Observable<void> {
        return throwError(() => new NotImplementedException('Delete cart is not supported in Medusa.js Store API.'));
    }

    addCartItem(data: Carts.Request.AddCartItemBody, authorization?: string): Observable<Carts.Model.Cart> {
        if (!data.sku) {
            throw new BadRequestException('SKU is required for Medusa carts');
        }

        const customerId = authorization ? this.authService.getCustomerId(authorization) : undefined;

        // If cartId provided, use it (after verifying access)
        if (data.cartId) {
            const cartId = data.cartId;
            return from(
                this.sdk.store.cart.retrieve(cartId, {}, this.medusaJsService.getStoreApiHeaders(authorization)),
            ).pipe(
                switchMap((response: HttpTypes.StoreCartResponse) => {
                    const cart = mapCart(response.cart, this.defaultCurrency);

                    if (cart.customerId && authorization && cart.customerId !== customerId) {
                        return throwError(() => new UnauthorizedException('Unauthorized to access this cart'));
                    }

                    return from(
                        this.sdk.store.cart.createLineItem(
                            cartId,
                            {
                                variant_id: data.sku,
                                quantity: data.quantity,
                                metadata: data.metadata,
                            },
                            {},
                            this.medusaJsService.getStoreApiHeaders(authorization),
                        ),
                    );
                }),
                map((addResponse: HttpTypes.StoreCartResponse) => mapCart(addResponse.cart, this.defaultCurrency)),
                catchError((error) => handleHttpError(error)),
            );
        }

        if (!data.currency) {
            return throwError(() => new BadRequestException('Currency is required when creating a new cart'));
        }

        return this.createCartAndAddItem(
            data.currency,
            data.sku,
            data.quantity,
            data.regionId,
            data.metadata,
            authorization,
        );
    }

    updateCartItem(
        params: Carts.Request.UpdateCartItemParams,
        data: Carts.Request.UpdateCartItemBody,
        authorization?: string,
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
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StoreCartResponse) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    removeCartItem(params: Carts.Request.RemoveCartItemParams, authorization?: string): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.deleteLineItem(
                params.cartId,
                params.itemId,
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StoreLineItemDeleteResponse) => {
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
        authorization?: string,
    ): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.client.fetch<HttpTypes.StoreCartResponse>(`/store/carts/${params.cartId}/promotions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.medusaJsService.getStoreApiHeaders(authorization),
                },
                body: {
                    promo_codes: [data.code],
                },
            }),
        ).pipe(
            map((response) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    removePromotion(params: Carts.Request.RemovePromotionParams, authorization?: string): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.client.fetch<HttpTypes.StoreCartResponse>(`/store/carts/${params.cartId}/promotions`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.medusaJsService.getStoreApiHeaders(authorization),
                },
                body: {
                    promo_codes: [params.code],
                },
            }),
        ).pipe(
            map((response) => mapCart(response.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    getCurrentCart(_authorization?: string): Observable<Carts.Model.Cart | undefined> {
        return throwError(
            () =>
                new NotImplementedException(
                    'Getting current cart is not supported in Medusa.js integration. Medusa does not provide a way to query carts by customer.',
                ),
        );
    }

    prepareCheckout(params: Carts.Request.PrepareCheckoutParams, authorization?: string): Observable<Carts.Model.Cart> {
        return this.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                // Verify ownership for customer carts
                if (cart.customerId && authorization) {
                    const customerId = this.authService.getCustomerId(authorization);
                    if (cart.customerId !== customerId) {
                        return throwError(
                            () => new UnauthorizedException('Unauthorized to prepare checkout for this cart'),
                        );
                    }
                }

                // Validate cart has items
                if (!cart.items || cart.items.data.length === 0) {
                    return throwError(() => new BadRequestException('Cart must have items before preparing checkout'));
                }

                return of(cart);
            }),
        );
    }

    private createCartAndAddItem(
        currency: string,
        sku: string,
        quantity: number,
        regionId?: string,
        metadata?: Record<string, unknown>,
        authorization?: string,
    ): Observable<Carts.Model.Cart> {
        return from(
            this.sdk.store.cart.create(
                {
                    currency_code: currency.toLowerCase(),
                    region_id: regionId,
                    metadata,
                },
                {},
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            switchMap((createResponse: HttpTypes.StoreCartResponse) =>
                from(
                    this.sdk.store.cart.createLineItem(
                        createResponse.cart.id,
                        {
                            variant_id: sku,
                            quantity,
                            metadata,
                        },
                        {},
                        this.medusaJsService.getStoreApiHeaders(authorization),
                    ),
                ),
            ),
            map((addResponse: HttpTypes.StoreCartResponse) => mapCart(addResponse.cart, this.defaultCurrency)),
            catchError((error) => handleHttpError(error)),
        );
    }

    updateCartAddresses(
        params: Carts.Request.UpdateCartAddressesParams,
        data: Carts.Request.UpdateCartAddressesBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart> {
        const headers = this.medusaJsService.getStoreApiHeaders(authorization);

        // Resolve shipping address
        const shippingAddress$ =
            data.shippingAddressId && authorization
                ? this.customersService.getAddress({ id: data.shippingAddressId }, authorization).pipe(
                      map((address) => {
                          if (!address) {
                              throw new NotFoundException(`Address with ID ${data.shippingAddressId} not found`);
                          }
                          return mapAddressToMedusa(address.address);
                      }),
                  )
                : data.shippingAddress
                  ? of(mapAddressToMedusa(data.shippingAddress))
                  : of(null);

        // Resolve billing address
        const billingAddress$ =
            data.billingAddressId && authorization
                ? this.customersService.getAddress({ id: data.billingAddressId }, authorization).pipe(
                      map((address) => {
                          if (!address) {
                              throw new NotFoundException(`Address with ID ${data.billingAddressId} not found`);
                          }
                          return mapAddressToMedusa(address.address);
                      }),
                  )
                : data.billingAddress
                  ? of(mapAddressToMedusa(data.billingAddress))
                  : of(null);

        // Get current cart to merge metadata
        return this.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                // Resolve both addresses in parallel
                return forkJoin([shippingAddress$, billingAddress$]).pipe(
                    switchMap(([shippingAddress, billingAddress]) => {
                        // At least one address must be provided
                        if (!shippingAddress && !billingAddress) {
                            return throwError(
                                () => new BadRequestException('At least one address (shipping or billing) is required'),
                            );
                        }

                        // Build metadata (notes only; email goes directly on cart)
                        const metadata = this.buildCartMetadata(data.notes, cart.metadata);

                        // Build cart update payload
                        const cartUpdate: Partial<HttpTypes.StoreUpdateCart> = {
                            metadata,
                        };

                        // Set email directly on cart (for guest checkout)
                        if (data.email) {
                            cartUpdate.email = data.email;
                        }

                        // Set addresses (use shipping as billing if billing not provided)
                        if (shippingAddress) {
                            cartUpdate.shipping_address = shippingAddress;
                            cartUpdate.billing_address = billingAddress ?? shippingAddress;
                        } else if (billingAddress) {
                            // If only billing provided, use it for both
                            cartUpdate.shipping_address = billingAddress;
                            cartUpdate.billing_address = billingAddress;
                        }

                        // Update cart
                        return from(this.sdk.store.cart.update(params.cartId, cartUpdate, {}, headers)).pipe(
                            switchMap(() => this.getCart({ id: params.cartId }, authorization)),
                            map((updatedCart) => {
                                if (!updatedCart) {
                                    throw new NotFoundException(`Cart with ID ${params.cartId} not found`);
                                }
                                return updatedCart;
                            }),
                        );
                    }),
                );
            }),
            catchError((error) => handleHttpError(error)),
        );
    }

    addShippingMethod(
        params: Carts.Request.AddShippingMethodParams,
        data: Carts.Request.AddShippingMethodBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart> {
        const headers = authorization
            ? this.medusaJsService.getStoreApiHeaders(authorization)
            : this.medusaJsService.getStoreApiHeaders(authorization);

        // Verify cart exists
        return this.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                if (!cart.items || cart.items.data.length === 0) {
                    return throwError(
                        () => new BadRequestException('Cart must have items before adding shipping method'),
                    );
                }

                // Add shipping method using SDK
                return from(
                    this.sdk.store.cart.addShippingMethod(
                        params.cartId,
                        { option_id: data.shippingOptionId },
                        {},
                        headers,
                    ),
                ).pipe(
                    switchMap(() => this.getCart({ id: params.cartId }, authorization)),
                    map((updatedCart) => {
                        if (!updatedCart) {
                            throw new NotFoundException(`Cart with ID ${params.cartId} not found`);
                        }
                        return updatedCart;
                    }),
                );
            }),
            catchError((error) => handleHttpError(error)),
        );
    }

    /**
     * Builds cart metadata immutably by merging optional notes
     * into existing metadata without mutating any arguments.
     * Email is passed directly on the cart (not in metadata).
     */
    private buildCartMetadata(notes?: string, existingMetadata?: Record<string, unknown>): Record<string, unknown> {
        const metadata: Record<string, unknown> = { ...(existingMetadata || {}) };
        if (notes !== undefined) {
            metadata.notes = notes;
        }
        return metadata;
    }
}

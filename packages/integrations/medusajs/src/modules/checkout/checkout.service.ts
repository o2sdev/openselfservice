import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, forkJoin, from, map, of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Carts, Checkout, Payments } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../../utils/handle-http-error';
import { mapOrder } from '../orders/orders.mapper';

import { mapCheckoutSummary, mapPlaceOrderResponse, mapShippingOptions } from './checkout.mapper';

@Injectable()
export class CheckoutService extends Checkout.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    constructor(
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly config: ConfigService,
        private readonly medusaJsService: MedusaJsService,
        private readonly cartsService: Carts.Service,
        private readonly paymentsService: Payments.Service,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || '';
    }

    setAddresses(
        params: Checkout.Request.SetAddressesParams,
        data: Checkout.Request.SetAddressesBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        // Validate cart exists and has items
        return this.cartsService.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                if (!cart.items || cart.items.data.length === 0) {
                    return throwError(() => new BadRequestException('Cart must have items before checkout'));
                }

                // Delegate to cart service
                return this.cartsService.updateCartAddresses({ cartId: params.cartId }, data, authorization);
            }),
            catchError((error) => handleHttpError(error)),
        );
    }

    setShippingMethod(
        params: Checkout.Request.SetShippingMethodParams,
        data: Checkout.Request.SetShippingMethodBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
        // Validate cart exists and has items
        return this.cartsService.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                if (!cart.items || cart.items.data.length === 0) {
                    return throwError(
                        () => new BadRequestException('Cart must have items before adding shipping method'),
                    );
                }

                // Delegate to cart service
                return this.cartsService.addShippingMethod(
                    { cartId: params.cartId },
                    { shippingOptionId: data.shippingOptionId },
                    authorization,
                );
            }),
            catchError((error) => handleHttpError(error)),
        );
    }

    setPayment(
        params: Checkout.Request.SetPaymentParams,
        data: Checkout.Request.SetPaymentBody,
        authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        return this.paymentsService
            .createSession(
                {
                    cartId: params.cartId,
                    providerId: data.providerId,
                    returnUrl: data.returnUrl,
                    cancelUrl: data.cancelUrl,
                    metadata: data.metadata,
                },
                authorization,
            )
            .pipe(
                switchMap((session) => {
                    // Get cart to preserve existing metadata
                    return this.cartsService.getCart({ id: params.cartId }, authorization).pipe(
                        switchMap((cart) => {
                            if (!cart) {
                                return throwError(
                                    () => new NotFoundException(`Cart with ID ${params.cartId} not found`),
                                );
                            }
                            // Update cart with payment session ID and payment method, preserving existing metadata
                            return this.cartsService
                                .updateCart(
                                    { id: params.cartId },
                                    {
                                        metadata: {
                                            ...cart.metadata,
                                            paymentSessionId: session.id,
                                            paymentMethod: {
                                                id: session.providerId,
                                                name: session.providerId,
                                                type: 'OTHER',
                                            },
                                        },
                                    },
                                    authorization,
                                )
                                .pipe(map(() => session));
                        }),
                    );
                }),
            );
    }

    getCheckoutSummary(
        params: Checkout.Request.GetCheckoutSummaryParams,
        authorization: string | undefined,
    ): Observable<Checkout.Model.CheckoutSummary> {
        return this.cartsService.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                const id = cart.metadata?.paymentSessionId;
                const paymentSessionId = typeof id === 'string' ? id : undefined;

                if (paymentSessionId) {
                    return this.paymentsService
                        .getSession({ id: paymentSessionId }, authorization)
                        .pipe(
                            catchError(() => {
                                return of(undefined);
                            }),
                        )
                        .pipe(map((session) => mapCheckoutSummary(cart, session)));
                }

                return of(mapCheckoutSummary(cart));
            }),
        );
    }

    placeOrder(
        params: Checkout.Request.PlaceOrderParams,
        data: Checkout.Request.PlaceOrderBody | undefined,
        authorization: string | undefined,
    ): Observable<Checkout.Model.PlaceOrderResponse> {
        return this.cartsService.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                // Validate required data
                if (!cart.shippingAddress || !cart.billingAddress) {
                    return throwError(() => new BadRequestException('Shipping and billing addresses are required'));
                }

                if (!cart.shippingMethod) {
                    return throwError(() => new BadRequestException('Shipping method is required'));
                }

                if (!cart.paymentMethod) {
                    return throwError(() => new BadRequestException('Payment method is required'));
                }

                // Set email on cart if provided (for guest checkout)
                const email = data?.email || cart.email;
                if (email && email !== cart.email) {
                    return this.cartsService
                        .updateCart({ id: params.cartId }, { email }, authorization)
                        .pipe(switchMap(() => this.completeCartAndCreateOrder(params.cartId, email, authorization)));
                }

                return this.completeCartAndCreateOrder(params.cartId, email, authorization);
            }),
        );
    }

    private completeCartAndCreateOrder(
        cartId: string,
        email: string | undefined,
        authorization: string | undefined,
    ): Observable<Checkout.Model.PlaceOrderResponse> {
        // Complete the cart in Medusa (this creates the order)
        return from(
            this.sdk.store.cart.complete(cartId, {}, this.medusaJsService.getStoreApiHeaders(authorization)),
        ).pipe(
            switchMap((response: HttpTypes.StoreCompleteCartResponse) => {
                if (response.type !== 'order' || !response.order) {
                    return throwError(() => new BadRequestException('Failed to create order from cart'));
                }

                // Use the order directly from the cart.complete response
                // This avoids a separate getOrder call which requires authorization (fails for guests)
                const order = mapOrder(response.order, this.defaultCurrency);

                // Attach email for order confirmation if provided (guest checkout)
                if (email) {
                    order.email = email;
                }

                return of(mapPlaceOrderResponse(order));
            }),
            catchError((error) => {
                if (error.response?.status === 400) {
                    return throwError(
                        () => new BadRequestException(error.response.data?.message || 'Failed to complete cart'),
                    );
                }
                return handleHttpError(error);
            }),
        );
    }

    /**
     * Retrieves available shipping options for a cart using Medusa Store API.
     * Uses `sdk.store.fulfillment.listCartOptions()` to get shipping options scoped to the cart's region.
     *
     * For shipping options with `price_type=calculated`, calculates the price using
     * `sdk.store.fulfillment.calculate()` before returning. Flat-price options are returned as-is.
     *
     * @see https://docs.medusajs.com/resources/storefront-development/checkout/shipping
     */
    getShippingOptions(
        params: Checkout.Request.GetShippingOptionsParams,
        authorization?: string,
    ): Observable<Checkout.Model.ShippingOptions> {
        const headers = this.medusaJsService.getStoreApiHeaders(authorization);

        // Step 1: Retrieve shipping options
        return from(this.sdk.store.fulfillment.listCartOptions({ cart_id: params.cartId }, headers)).pipe(
            switchMap((response: HttpTypes.StoreShippingOptionListResponse) => {
                const shippingOptions = response.shipping_options;

                // Step 2: Filter options that need price calculation
                const calculatedOptions = shippingOptions.filter((option) => option.price_type === 'calculated');

                if (calculatedOptions.length === 0) {
                    return of(mapShippingOptions(shippingOptions, this.defaultCurrency));
                }

                // Step 3: Calculate prices for all calculated options in parallel
                const calculateObservables = calculatedOptions.map((option) =>
                    from(
                        this.sdk.store.fulfillment.calculate(option.id, { cart_id: params.cartId, data: {} }, headers),
                    ).pipe(
                        map((calcResponse: { shipping_option: HttpTypes.StoreCartShippingOption }) => ({
                            optionId: option.id,
                            calculatedOption: calcResponse.shipping_option,
                        })),
                        catchError((error) => {
                            this.logger.warn(`Failed to calculate price for shipping option ${option.id}`, error);
                            return of({ optionId: option.id, calculatedOption: option });
                        }),
                    ),
                );

                // Step 4: Wait for all calculations, then merge results
                return forkJoin(calculateObservables).pipe(
                    map((calculatedResults) => {
                        const calculatedMap = new Map<string, HttpTypes.StoreCartShippingOption>();
                        calculatedResults.forEach((result) => {
                            calculatedMap.set(result.optionId, result.calculatedOption);
                        });

                        const enrichedOptions = shippingOptions.map((option) =>
                            option.price_type === 'calculated' && calculatedMap.has(option.id)
                                ? calculatedMap.get(option.id)!
                                : option,
                        );

                        return mapShippingOptions(enrichedOptions, this.defaultCurrency);
                    }),
                );
            }),
            catchError((error) => handleHttpError(error)),
        );
    }

    completeCheckout(
        params: Checkout.Request.CompleteCheckoutParams,
        data: Checkout.Request.CompleteCheckoutBody,
        authorization: string | undefined,
    ): Observable<Checkout.Model.PlaceOrderResponse> {
        // Setup addresses first
        return this.setAddresses(
            { cartId: params.cartId },
            {
                shippingAddressId: data.shippingAddressId,
                shippingAddress: data.shippingAddress,
                billingAddressId: data.billingAddressId,
                billingAddress: data.billingAddress,
                notes: data.notes,
                email: data.email,
            },
            authorization,
        ).pipe(
            // Setup shipping method if provided
            switchMap(() =>
                data.shippingMethodId
                    ? this.setShippingMethod(
                          { cartId: params.cartId },
                          { shippingOptionId: data.shippingMethodId },
                          authorization,
                      )
                    : throwError(() => new BadRequestException('Shipping method is required for checkout')),
            ),
            switchMap(() =>
                // Setup payment
                data.paymentProviderId
                    ? this.setPayment(
                          { cartId: params.cartId },
                          {
                              providerId: data.paymentProviderId,
                              returnUrl: data.returnUrl,
                              cancelUrl: data.cancelUrl,
                              metadata: data.metadata,
                          },
                          authorization,
                      )
                    : throwError(() => new BadRequestException('Payment provider is required for checkout')),
            ),
            switchMap(() =>
                // Place order
                this.placeOrder(
                    { cartId: params.cartId },
                    {
                        email: data.email,
                    },
                    authorization,
                ),
            ),
        );
    }
}

import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, catchError, forkJoin, from, map, of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Auth, Carts, Checkout, Customers, Orders, Payments } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../utils/handle-http-error';

import { mapCheckoutSummary, mapPlaceOrderResponse, mapShippingOptions } from './checkout.mapper';

@Injectable()
export class CheckoutService extends Checkout.Service {
    private readonly sdk: Medusa;
    private readonly defaultCurrency: string;

    constructor(
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly config: ConfigService,
        private readonly medusaJsService: MedusaJsService,
        private readonly authService: Auth.Service,
        private readonly cartsService: Carts.Service,
        private readonly customersService: Customers.Service,
        private readonly paymentsService: Payments.Service,
        private readonly ordersService: Orders.Service,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
        this.defaultCurrency = this.config.get('DEFAULT_CURRENCY') || '';
    }

    setupAddresses(
        params: Checkout.Request.SetupAddressesParams,
        data: Checkout.Request.SetupAddressesBody,
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

    setupShippingMethod(
        params: Checkout.Request.SetupShippingMethodParams,
        data: Checkout.Request.SetupShippingMethodBody,
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

    setupPayment(
        params: Checkout.Request.SetupPaymentParams,
        data: Checkout.Request.SetupPaymentBody,
        authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        return this.paymentsService
            .createSession(
                {
                    cartId: params.cartId,
                    providerId: data.providerId,
                    returnUrl: 'https://example.com/checkout/return',
                    cancelUrl: 'https://example.com/checkout/cancel',
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

                const paymentSessionId = cart.metadata?.paymentSessionId as string | undefined;

                if (paymentSessionId) {
                    return this.paymentsService
                        .getSession({ id: paymentSessionId }, authorization)
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

                // Store guest email in cart metadata if provided
                const guestEmail = data?.guestEmail || (cart.metadata?.guestEmail as string | undefined);
                if (guestEmail) {
                    return this.cartsService
                        .updateCart(
                            { id: params.cartId },
                            { metadata: { ...cart.metadata, guestEmail } },
                            authorization,
                        )
                        .pipe(
                            switchMap(() => this.completeCartAndCreateOrder(params.cartId, guestEmail, authorization)),
                        );
                }

                return this.completeCartAndCreateOrder(params.cartId, guestEmail, authorization);
            }),
        );
    }

    private completeCartAndCreateOrder(
        cartId: string,
        guestEmail: string | undefined,
        authorization: string | undefined,
    ): Observable<Checkout.Model.PlaceOrderResponse> {
        // Complete the cart in Medusa (this creates the order)
        return from(
            this.sdk.store.cart.complete(cartId, {}, this.medusaJsService.getStoreApiHeaders(authorization)),
        ).pipe(
            switchMap((response: HttpTypes.StoreCompleteCartResponse) => {
                const orderId = response.type === 'order' ? response.order?.id : undefined;
                if (!orderId) {
                    return throwError(() => new BadRequestException('Failed to create order from cart'));
                }

                // Get the created order
                return this.ordersService.getOrder({ id: orderId }, authorization).pipe(
                    switchMap((order) => {
                        if (!order) {
                            return throwError(() => new NotFoundException(`Order with ID ${orderId} not found`));
                        }

                        // Update order with guest email if provided
                        if (guestEmail && !order.email) {
                            // Note: In a real implementation, you'd update the order with email
                            // For now, we'll just use the order as-is
                        }

                        // Note: After successful cart completion (type === 'order'), the cart metadata
                        // is no longer available in the response. Payment redirect URL should be
                        // obtained from the payment session before cart completion.
                        return of(mapPlaceOrderResponse(order));
                    }),
                );
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
        const headers = authorization
            ? this.medusaJsService.getStoreApiHeaders(authorization)
            : this.medusaJsService.getStoreApiHeaders(authorization);

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
        return this.setupAddresses(
            { cartId: params.cartId },
            {
                shippingAddressId: data.shippingAddressId,
                shippingAddress: data.shippingAddress,
                billingAddressId: data.billingAddressId,
                billingAddress: data.billingAddress,
                notes: data.notes,
                guestEmail: data.guestEmail,
            },
            authorization,
        ).pipe(
            // Setup shipping method if provided
            switchMap(() =>
                data.shippingMethodId
                    ? this.setupShippingMethod(
                          { cartId: params.cartId },
                          { shippingOptionId: data.shippingMethodId },
                          authorization,
                      )
                    : of(null),
            ),
            switchMap(() =>
                // Setup payment
                this.setupPayment(
                    { cartId: params.cartId },
                    {
                        providerId: data.paymentProviderId,
                        metadata: data.metadata,
                    },
                    authorization,
                ),
            ),
            switchMap(() =>
                // Place order
                this.placeOrder(
                    { cartId: params.cartId },
                    {
                        guestEmail: data.guestEmail,
                    },
                    authorization,
                ),
            ),
        );
    }
}

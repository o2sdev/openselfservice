import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Auth, Carts, Checkout, Customers, Payments } from '@o2s/framework/modules';

import { MOCKED_ORDERS, mapOrderFromCart } from '../orders/orders.mapper';

import { mapCheckoutSummary, mapPlaceOrderResponse, mapShippingOptions } from './checkout.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class CheckoutService implements Checkout.Service {
    constructor(
        private readonly authService: Auth.Service,
        private readonly cartsService: Carts.Service,
        private readonly customersService: Customers.Service,
        private readonly paymentsService: Payments.Service,
    ) {}

    setAddresses(
        params: Checkout.Request.SetAddressesParams,
        data: Checkout.Request.SetAddressesBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
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
            responseDelay(),
        );
    }

    setShippingMethod(
        params: Checkout.Request.SetShippingMethodParams,
        data: Checkout.Request.SetShippingMethodBody,
        authorization: string | undefined,
    ): Observable<Carts.Model.Cart> {
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
            responseDelay(),
        );
    }

    setPayment(
        params: Checkout.Request.SetPaymentParams,
        data: Checkout.Request.SetPaymentBody,
        authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        return this.cartsService.getCart({ id: params.cartId }, authorization).pipe(
            switchMap((cart) => {
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${params.cartId} not found`));
                }

                // Create payment session
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
            responseDelay(),
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
            responseDelay(),
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

                const paymentSessionId = cart.metadata?.paymentSessionId as string | undefined;
                if (!paymentSessionId) {
                    return throwError(() => new BadRequestException('Payment session is required'));
                }

                // Get email (from request body or cart)
                const email = data?.email || cart.email;

                // Create order from cart
                const order = mapOrderFromCart(cart, email);
                MOCKED_ORDERS.push(order);

                // Get payment session for redirect URL
                return this.paymentsService
                    .getSession({ id: paymentSessionId }, authorization)
                    .pipe(map((session) => mapPlaceOrderResponse(order, session)));
            }),
            responseDelay(),
        );
    }

    getShippingOptions(
        _params: Checkout.Request.GetShippingOptionsParams,
        _authorization?: string,
    ): Observable<Checkout.Model.ShippingOptions> {
        return of(mapShippingOptions()).pipe(responseDelay());
    }

    completeCheckout(
        params: Checkout.Request.CompleteCheckoutParams,
        data: Checkout.Request.CompleteCheckoutBody,
        authorization: string | undefined,
    ): Observable<Checkout.Model.PlaceOrderResponse> {
        // Set addresses first
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
            // Set shipping method if provided
            switchMap(() =>
                data.shippingMethodId
                    ? this.setShippingMethod(
                          { cartId: params.cartId },
                          { shippingOptionId: data.shippingMethodId },
                          authorization,
                      )
                    : of(null),
            ),
            switchMap(() =>
                // Set payment
                this.setPayment(
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
                        email: data.email,
                    },
                    authorization,
                ),
            ),
        );
    }
}

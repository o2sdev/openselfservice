import { Observable } from 'rxjs';

import * as Carts from '../carts';
import * as Payments from '../payments';

import * as Checkout from './';

export abstract class CheckoutService {
    protected constructor(..._services: unknown[]) {}

    // Set addresses (shipping and/or billing)
    abstract setAddresses(
        params: Checkout.Request.SetAddressesParams,
        data: Checkout.Request.SetAddressesBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    // Set shipping method
    abstract setShippingMethod(
        params: Checkout.Request.SetShippingMethodParams,
        data: Checkout.Request.SetShippingMethodBody,
        authorization?: string,
    ): Observable<Carts.Model.Cart>;

    // Set payment (independent action, can be called before or after shipping)
    abstract setPayment(
        params: Checkout.Request.SetPaymentParams,
        data: Checkout.Request.SetPaymentBody,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession>;

    // Get checkout summary (returns current state of cart with all checkout data)
    abstract getCheckoutSummary(
        params: Checkout.Request.GetCheckoutSummaryParams,
        authorization?: string,
    ): Observable<Checkout.Model.CheckoutSummary>;

    // Place order (validates required data is present, creates order)
    abstract placeOrder(
        params: Checkout.Request.PlaceOrderParams,
        data?: Checkout.Request.PlaceOrderBody,
        authorization?: string,
    ): Observable<Checkout.Model.PlaceOrderResponse>;

    // Get available shipping options for a cart
    abstract getShippingOptions(
        params: Checkout.Request.GetShippingOptionsParams,
        authorization?: string,
    ): Observable<Checkout.Model.ShippingOptions>;

    // Complete checkout (orchestrates shipping + payment + order placement in single call)
    abstract completeCheckout(
        params: Checkout.Request.CompleteCheckoutParams,
        data: Checkout.Request.CompleteCheckoutBody,
        authorization?: string,
    ): Observable<Checkout.Model.PlaceOrderResponse>;
}

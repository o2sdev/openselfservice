import { Observable } from 'rxjs';

import * as Carts from '../carts';
import * as Payments from '../payments';

import * as Checkout from './';

/**
 * Abstract checkout service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class CheckoutService {
    protected constructor(..._services: unknown[]) {}

    /** Sets addresses (shipping and/or billing) on checkout. */
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

    /** Sets payment method. Can be called before or after shipping. */
    abstract setPayment(
        params: Checkout.Request.SetPaymentParams,
        data: Checkout.Request.SetPaymentBody,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession>;

    /** Returns current checkout state (cart with addresses, shipping, payment). */
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

    /** Returns available shipping options for cart. Use params.locale for localized names. */
    abstract getShippingOptions(
        params: Checkout.Request.GetShippingOptionsParams,
        authorization?: string,
    ): Observable<Checkout.Model.ShippingOptions>;

    /** Completes checkout in one call (shipping + payment + order placement). */
    abstract completeCheckout(
        params: Checkout.Request.CompleteCheckoutParams,
        data: Checkout.Request.CompleteCheckoutBody,
        authorization?: string,
    ): Observable<Checkout.Model.PlaceOrderResponse>;
}

import { Models } from '@o2s/utils.api-harmonization';

import { Carts, Checkout, Payments } from '@o2s/framework/modules';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-billing-payment.client';

const API_URL = URL;
const CARTS_API_URL = '/carts';
const CHECKOUT_API_URL = '/checkout';
const PAYMENTS_API_URL = '/payments';

export const checkoutBillingPayment = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getCheckoutBillingPayment: (
                query: Request.GetCheckoutBillingPaymentBlockQuery,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Model.CheckoutBillingPaymentBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
        carts: {
            getCart: (
                cartId: string,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Carts.Model.Cart> =>
                request({
                    url: `${CARTS_API_URL}/${encodeURIComponent(cartId)}`,
                    headers,
                    authorization,
                }),
        },
        checkout: {
            setPayment: (
                cartId: string,
                body: Checkout.Request.SetPaymentBody,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Payments.Model.PaymentSession> =>
                request({
                    method: 'post',
                    url: `${CHECKOUT_API_URL}/${encodeURIComponent(cartId)}/payment`,
                    data: body,
                    headers,
                    authorization,
                }),
        },
        payments: {
            getProviders: (
                params: Payments.Request.GetProvidersParams,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Payments.Model.PaymentProviders> =>
                request({
                    url: `${PAYMENTS_API_URL}/providers`,
                    params,
                    headers,
                    authorization,
                }),
        },
    };
};

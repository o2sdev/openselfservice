import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Carts, Checkout, Payments } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-billing-payment.client';

const API_URL = URL;
const CARTS_API_URL = '/carts';
const CHECKOUT_API_URL = '/checkout';
const PAYMENTS_API_URL = '/payments';

export const checkoutBillingPayment = (sdk: Sdk) => ({
    blocks: {
        getCheckoutBillingPayment: (
            query: Request.GetCheckoutBillingPaymentBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.CheckoutBillingPaymentBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),
    },
    carts: {
        getCart: (
            cartId: string,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'get',
                url: `${CARTS_API_URL}/${cartId}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
            }),
    },
    checkout: {
        setPayment: (
            cartId: string,
            body: Checkout.Request.SetPaymentBody,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Payments.Model.PaymentSession> =>
            sdk.makeRequest({
                method: 'post',
                url: `${CHECKOUT_API_URL}/${cartId}/payment`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                data: body,
            }),
    },
    payments: {
        getProviders: (
            params: Payments.Request.GetProvidersParams,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Payments.Model.PaymentProviders> =>
            sdk.makeRequest({
                method: 'get',
                url: `${PAYMENTS_API_URL}/providers`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params,
            }),
    },
});

import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Checkout } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-summary.client';

const API_URL = URL;
const CHECKOUT_API_URL = '/checkout';

export const checkoutSummary = (sdk: Sdk) => ({
    blocks: {
        getCheckoutSummary: (
            query: Request.GetCheckoutSummaryBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.CheckoutSummaryBlock> =>
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
    checkout: {
        getCheckoutSummary: (
            cartId: string,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Checkout.Model.CheckoutSummary> =>
            sdk.makeRequest({
                method: 'get',
                url: `${CHECKOUT_API_URL}/${cartId}/summary`,
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
        placeOrder: (
            cartId: string,
            body: Checkout.Request.PlaceOrderBody,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Checkout.Model.PlaceOrderResponse> =>
            sdk.makeRequest({
                method: 'post',
                url: `${CHECKOUT_API_URL}/${cartId}/place-order`,
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
});

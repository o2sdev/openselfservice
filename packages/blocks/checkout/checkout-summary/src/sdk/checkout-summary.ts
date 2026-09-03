import { Models } from '@o2s/utils.api-harmonization';

import { Checkout } from '@o2s/framework/modules';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-summary.client';

const API_URL = URL;
const CHECKOUT_API_URL = '/checkout';

export const checkoutSummary = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getCheckoutSummary: (
                query: Request.GetCheckoutSummaryBlockQuery,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Model.CheckoutSummaryBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
        checkout: {
            getCheckoutSummary: (
                cartId: string,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Checkout.Model.CheckoutSummary> =>
                request({
                    url: `${CHECKOUT_API_URL}/${encodeURIComponent(cartId)}/summary`,
                    headers,
                    authorization,
                }),
            placeOrder: (
                cartId: string,
                body: Checkout.Request.PlaceOrderBody,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Checkout.Model.PlaceOrderResponse> =>
                request({
                    method: 'post',
                    url: `${CHECKOUT_API_URL}/${encodeURIComponent(cartId)}/place-order`,
                    data: body,
                    headers,
                    authorization,
                }),
        },
    };
};

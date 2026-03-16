import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Carts, Checkout } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-company-data.client';

const API_URL = URL;
const CARTS_API_URL = '/carts';
const CHECKOUT_API_URL = '/checkout';

export const checkoutCompanyData = (sdk: Sdk) => ({
    blocks: {
        getCheckoutCompanyData: (
            query: Request.GetCheckoutCompanyDataBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.CheckoutCompanyDataBlock> =>
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
        setAddresses: (
            cartId: string,
            body: Checkout.Request.SetAddressesBody,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'post',
                url: `${CHECKOUT_API_URL}/${cartId}/addresses`,
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

import { Models } from '@o2s/utils.api-harmonization';

import { Carts, Checkout } from '@o2s/framework/modules';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/checkout-company-data.client';

const API_URL = URL;
const CARTS_API_URL = '/carts';
const CHECKOUT_API_URL = '/checkout';

export const checkoutCompanyData = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getCheckoutCompanyData: (
                query: Request.GetCheckoutCompanyDataBlockQuery,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Model.CheckoutCompanyDataBlock> =>
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
                    url: `${CARTS_API_URL}/${cartId}`,
                    headers,
                    authorization,
                }),
        },
        checkout: {
            setAddresses: (
                cartId: string,
                body: Checkout.Request.SetAddressesBody,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Carts.Model.Cart> =>
                request({
                    method: 'post',
                    url: `${CHECKOUT_API_URL}/${cartId}/addresses`,
                    data: body,
                    headers,
                    authorization,
                }),
        },
    };
};

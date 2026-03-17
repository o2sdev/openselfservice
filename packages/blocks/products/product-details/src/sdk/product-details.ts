import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Carts } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/product-details.client';

const CARTS_API_URL = '/carts';

export const productDetails = (sdk: Sdk) => ({
    blocks: {
        getProductDetails: (
            params: Request.GetProductDetailsBlockParams,
            query?: Request.GetProductDetailsBlockQuery,
            headers?: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.ProductDetailsBlock> => {
            const urlPath = params.variantSlug ? `${URL}/${params.id}/${params.variantSlug}` : `${URL}/${params.id}`;

            return sdk.makeRequest({
                method: 'get',
                url: urlPath,
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
            });
        },
    },
    cart: {
        addCartItem: (
            body: Carts.Request.AddCartItemBody,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'post',
                url: `${CARTS_API_URL}/items`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
                },
                data: body,
            }),
    },
});

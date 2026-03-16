import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Carts } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/recommended-products.client';

const CARTS_API_URL = '/carts';

export const recommendedProducts = (sdk: Sdk) => ({
    blocks: {
        getRecommendedProducts: (
            params: { id: string },
            query?: Omit<Request.GetRecommendedProductsBlockQuery, 'id'>,
            headers?: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.RecommendedProductsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: {
                    ...params,
                    ...query,
                },
            }),
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

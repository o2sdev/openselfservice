import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/product-list.client';
import { URL } from '../api-harmonization/product-list.url';

const API_URL = URL;
const CARTS_API_URL = '/carts';

export const productList = (sdk: Sdk) => ({
    blocks: {
        getProductList: (
            query: Request.GetProductListBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.ProductListBlock> =>
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
    cart: {
        addCartItem: (
            body: Carts.Request.AddCartItemBody,
            headers: AppHeaders,
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

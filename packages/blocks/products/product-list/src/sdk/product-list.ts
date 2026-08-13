import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/product-list.client';
import { URL } from '../api-harmonization/product-list.url';

const API_URL = URL;
const CARTS_API_URL = '/carts';

export const productList = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getProductList: (
                query: Request.GetProductListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.ProductListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
        cart: {
            addCartItem: (
                body: Carts.Request.AddCartItemBody,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Carts.Model.Cart> =>
                request({
                    method: 'post',
                    url: `${CARTS_API_URL}/items`,
                    data: body,
                    headers,
                    authorization,
                }),
        },
    };
};

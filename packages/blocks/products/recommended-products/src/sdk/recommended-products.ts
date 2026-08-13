import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/recommended-products.client';

const CARTS_API_URL = '/carts';

export const recommendedProducts = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getRecommendedProducts: (
                params: { id: string },
                query?: Omit<Request.GetRecommendedProductsBlockQuery, 'id'>,
                headers?: AppHeaders,
                authorization?: string,
            ): Promise<Model.RecommendedProductsBlock> =>
                request({
                    url: URL,
                    params: {
                        ...params,
                        ...query,
                    },
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

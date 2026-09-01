import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/product-details.client';

const CARTS_API_URL = '/carts';

export const productDetails = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getProductDetails: (
                params: Request.GetProductDetailsBlockParams,
                query?: Request.GetProductDetailsBlockQuery,
                headers?: AppHeaders,
                authorization?: string,
            ): Promise<Model.ProductDetailsBlock> => {
                const urlPath = params.variantSlug
                    ? `${URL}/${params.id}/${params.variantSlug}`
                    : `${URL}/${params.id}`;

                return request({
                    url: urlPath,
                    params: query,
                    headers,
                    authorization,
                });
            },
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

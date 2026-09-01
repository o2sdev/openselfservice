import { Models } from '@o2s/utils.api-harmonization';

import { Carts } from '@o2s/framework/modules';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/cart.client';

const API_URL = URL;
const CARTS_API_URL = '/carts';

export const cart = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getCart: (
                query: Request.GetCartBlockQuery,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Model.CartBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
        cart: {
            getCart: (
                cartId: string,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Carts.Model.Cart> =>
                request({
                    url: `${CARTS_API_URL}/${encodeURIComponent(cartId)}`,
                    headers,
                    authorization,
                }),

            updateCartItem: (
                cartId: string,
                itemId: string,
                body: { quantity?: number; metadata?: Record<string, unknown>; locale?: string },
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Carts.Model.Cart> =>
                request({
                    method: 'patch',
                    url: `${CARTS_API_URL}/${encodeURIComponent(cartId)}/items/${encodeURIComponent(itemId)}`,
                    data: body,
                    headers,
                    authorization,
                }),

            removeCartItem: (
                cartId: string,
                itemId: string,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Carts.Model.Cart> =>
                request({
                    method: 'delete',
                    url: `${CARTS_API_URL}/${encodeURIComponent(cartId)}/items/${encodeURIComponent(itemId)}`,
                    headers,
                    authorization,
                }),
        },
    };
};

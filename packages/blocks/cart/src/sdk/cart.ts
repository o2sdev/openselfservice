import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/cart.client';

const API_URL = URL;
const CARTS_API_URL = '/carts';

export const cart = (sdk: Sdk) => ({
    blocks: {
        getCart: (
            query: Request.GetCartBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.CartBlock> =>
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
        updateCartItem: (
            cartId: string,
            itemId: string,
            body: { quantity?: number; metadata?: Record<string, unknown>; locale?: string },
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<unknown> =>
            sdk.makeRequest({
                method: 'patch',
                url: `${CARTS_API_URL}/${cartId}/items/${itemId}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
                },
                data: body,
            }),

        removeCartItem: (
            cartId: string,
            itemId: string,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<unknown> =>
            sdk.makeRequest({
                method: 'delete',
                url: `${CARTS_API_URL}/${cartId}/items/${itemId}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
                },
            }),
    },
});

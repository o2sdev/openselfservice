import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const CARTS_API_URL = '/carts';

export const cart = (sdk: Sdk) => ({
    cart: {
        getCurrentCart: (headers: AppHeaders, authorization?: string): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'get',
                url: `${CARTS_API_URL}/current`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
                },
            }),

        getCart: (cartId: string, headers: AppHeaders, authorization?: string): Promise<Carts.Model.Cart> =>
            sdk.makeRequest({
                method: 'get',
                url: `${CARTS_API_URL}/${cartId}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
                },
            }),
    },
});

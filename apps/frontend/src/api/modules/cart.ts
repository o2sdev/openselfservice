import { AppHeaders } from '@o2s/framework/headers';
import { Carts } from '@o2s/framework/modules';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

const CARTS_API_URL = '/carts';

export const cart = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        cart: {
            getCurrentCart: (headers: AppHeaders, authorization?: string): Promise<Carts.Model.Cart> =>
                request({
                    url: `${CARTS_API_URL}/current`,
                    headers,
                    authorization,
                }),

            getCart: (cartId: string, headers: AppHeaders, authorization?: string): Promise<Carts.Model.Cart> =>
                request({
                    url: `${CARTS_API_URL}/${encodeURIComponent(cartId)}`,
                    headers,
                    authorization,
                }),
        },
    };
};

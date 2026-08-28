import { Models } from '@o2s/utils.api-harmonization';

import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/order-confirmation.client';

const API_URL = URL;

export const orderConfirmation = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getOrderConfirmation: (
                query: Request.GetOrderConfirmationBlockQuery,
                headers: Models.Headers.AppHeaders,
                authorization?: string,
            ): Promise<Model.OrderConfirmationBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

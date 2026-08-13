import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/orders-summary.client';
import { URL } from '../api-harmonization/orders-summary.url';

const API_URL = URL;

export const ordersSummary = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getOrdersSummary: (
                query: Request.GetOrdersSummaryBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.OrdersSummaryBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/orders-summary.client';
import { URL } from '../api-harmonization/orders-summary.url';

const API_URL = URL;

export const ordersSummary = (sdk: Sdk) => ({
    blocks: {
        getOrdersSummary: (
            query: Request.GetOrdersSummaryBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.OrdersSummaryBlock> =>
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
});

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/orders-summary.client';

const API_URL = URL;

export const ordersSummary = (sdk: Sdk) => ({
    blocks: {
        getOrdersSummary: (
            query: Request.GetOrdersSummaryBlockQuery,
            headers: ApiModels.Headers.AppHeaders,
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

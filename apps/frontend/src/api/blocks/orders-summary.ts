import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.OrdersSummary.URL;

export const ordersSummary = (sdk: Sdk) => ({
    blocks: {
        getOrdersSummary: (
            query: Blocks.OrdersSummary.Request.GetOrdersSummaryBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.OrdersSummary.Model.OrdersSummaryBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});

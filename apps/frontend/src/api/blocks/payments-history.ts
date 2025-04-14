import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.PaymentsHistory.URL;

export const paymentsHistory = (sdk: Sdk) => ({
    blocks: {
        getPaymentsHistory: (
            query: Blocks.PaymentsHistory.Request.GetPaymentsHistoryBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.PaymentsHistory.Model.PaymentsHistoryBlock> =>
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

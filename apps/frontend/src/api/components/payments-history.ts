import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.PaymentsHistory.URL;

export const paymentsHistory = (sdk: Sdk) => ({
    blocks: {
        getPaymentsHistory: (
            query: Blocks.PaymentsHistory.Request.GetPaymentsHistoryComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.PaymentsHistory.Model.PaymentsHistoryComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});

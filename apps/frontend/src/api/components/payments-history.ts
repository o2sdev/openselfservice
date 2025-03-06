import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.PaymentsHistory.URL;

export const paymentsHistory = (sdk: Sdk) => ({
    components: {
        getPaymentsHistory: (
            query: Components.PaymentsHistory.Request.GetPaymentsHistoryComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.PaymentsHistory.Model.PaymentsHistoryComponent> =>
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

import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.PaymentsSummary.URL;

export const paymentsSummary = (sdk: Sdk) => ({
    components: {
        getPaymentsSummary: (
            query: Components.PaymentsSummary.Request.GetPaymentsSummaryComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.PaymentsSummary.Model.PaymentsSummaryComponent> =>
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

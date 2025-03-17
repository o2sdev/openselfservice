import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.PaymentsSummary.URL;

export const paymentsSummary = (sdk: Sdk) => ({
    blocks: {
        getPaymentsSummary: (
            query: Blocks.PaymentsSummary.Request.GetPaymentsSummaryBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.PaymentsSummary.Model.PaymentsSummaryBlock> =>
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

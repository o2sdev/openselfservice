import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/payments-summary.client';
import { URL } from '../api-harmonization/payments-summary.url';

const API_URL = URL;

export const paymentsSummary = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getPaymentsSummary: (
                query: Request.GetPaymentsSummaryBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.PaymentsSummaryBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/payments-summary.client';
import { URL } from '../api-harmonization/payments-summary.url';

const API_URL = URL;

export const paymentsSummary = (sdk: Sdk) => ({
    blocks: {
        getPaymentsSummary: (
            query: Request.GetPaymentsSummaryBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.PaymentsSummaryBlock> =>
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

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/payments-history.client';

const API_URL = URL;

export const paymentsHistory = (sdk: Sdk) => ({
    blocks: {
        getPaymentsHistory: (
            params: Request.GetPaymentsHistoryBlockQuery,
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.PaymentsHistoryBlock> =>
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
                params,
            }),
    },
});

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/payments-history.client';
import { URL } from '../api-harmonization/payments-history.url';

const API_URL = URL;

export const paymentsHistory = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getPaymentsHistory: (
                params: Request.GetPaymentsHistoryBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.PaymentsHistoryBlock> =>
                request({
                    url: API_URL,
                    params,
                    headers,
                    authorization,
                }),
        },
    };
};

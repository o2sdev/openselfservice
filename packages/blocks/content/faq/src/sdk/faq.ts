import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/faq.client';
import { URL } from '../api-harmonization/faq.url';

const API_URL = URL;

export const faq = (sdk: Sdk) => ({
    blocks: {
        getFaq: (
            query: Request.GetFaqBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.FaqBlock> =>
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

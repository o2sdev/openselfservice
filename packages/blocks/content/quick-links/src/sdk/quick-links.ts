import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/quick-links.client';
import { URL } from '../api-harmonization/quick-links.url';

const API_URL = URL;

export const quickLinks = (sdk: Sdk) => ({
    blocks: {
        getQuickLinks: (
            query: Request.GetQuickLinksBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.QuickLinksBlock> =>
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

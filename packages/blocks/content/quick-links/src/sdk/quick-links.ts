import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/quick-links.client';
import { URL } from '../api-harmonization/quick-links.url';

const API_URL = URL;

export const quickLinks = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getQuickLinks: (
                query: Request.GetQuickLinksBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.QuickLinksBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

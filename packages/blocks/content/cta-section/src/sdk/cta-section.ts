import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/cta-section.client';
import { URL } from '../api-harmonization/cta-section.url';

const API_URL = URL;

export const ctaSection = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getCtaSection: (
                query: Request.GetCtaSectionBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.CtaSectionBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/feature-section.client';
import { URL } from '../api-harmonization/feature-section.url';

const API_URL = URL;

export const featureSection = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getFeatureSection: (
                query: Request.GetFeatureSectionBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.FeatureSectionBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/feature-section-grid.client';
import { URL } from '../api-harmonization/feature-section-grid.url';

const API_URL = URL;

export const featureSectionGrid = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getFeatureSectionGrid: (
                query: Request.GetFeatureSectionGridBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.FeatureSectionGridBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

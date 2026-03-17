import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/feature-section-grid.client';
import { URL } from '../api-harmonization/feature-section-grid.url';

const API_URL = URL;

export const featureSectionGrid = (sdk: Sdk) => ({
    blocks: {
        getFeatureSectionGrid: (
            query: Request.GetFeatureSectionGridBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.FeatureSectionGridBlock> =>
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

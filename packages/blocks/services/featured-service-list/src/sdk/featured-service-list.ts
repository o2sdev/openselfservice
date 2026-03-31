import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/featured-service-list.client';

const API_URL = URL;

export const featuredServiceList = (sdk: Sdk) => ({
    blocks: {
        getFeaturedServiceList: (
            query: Request.GetFeaturedServiceListBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.FeaturedServiceListBlock> =>
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

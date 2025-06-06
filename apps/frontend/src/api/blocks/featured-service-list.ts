import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.FeaturedServiceList.URL;

export const featuredServiceList = (sdk: Sdk) => ({
    blocks: {
        getFeaturedServiceList: (
            query: Blocks.FeaturedServiceList.Request.GetFeaturedServiceListBlockQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Blocks.FeaturedServiceList.Model.FeaturedServiceListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
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

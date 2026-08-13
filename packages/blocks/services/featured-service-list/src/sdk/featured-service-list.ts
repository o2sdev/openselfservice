import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/featured-service-list.client';

const API_URL = URL;

export const featuredServiceList = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getFeaturedServiceList: (
                query: Request.GetFeaturedServiceListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.FeaturedServiceListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

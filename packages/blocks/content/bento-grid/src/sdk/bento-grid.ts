import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/bento-grid.client';
import { URL } from '../api-harmonization/bento-grid.url';

const API_URL = URL;

export const bentoGrid = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getBentoGrid: (
                query: Request.GetBentoGridBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.BentoGridBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/service-details.client';
import { URL } from '../api-harmonization/service-details.url';

const API_URL = URL;

export const serviceDetails = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getServiceDetails: (
                params: Request.GetServiceDetailsBlockParams,
                query: Request.GetServiceDetailsBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.ServiceDetailsBlock> =>
                request({
                    url: `${API_URL}/${params.id}`,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

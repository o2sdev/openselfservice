import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/service-list.client';
import { URL } from '../api-harmonization/service-list.url';

const API_URL = URL;

export const serviceList = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getServiceList: (
                query: Request.GetServiceListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.ServiceListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

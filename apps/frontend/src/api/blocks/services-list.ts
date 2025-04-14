import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.ServiceList.URL;

export const serviceList = (sdk: Sdk) => ({
    blocks: {
        getServiceList: (
            query: Blocks.ServiceList.Request.GetServiceListBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.ServiceList.Model.ServiceListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    'x-client-timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});

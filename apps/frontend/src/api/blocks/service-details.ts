import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.ServiceDetails.URL;

export const serviceDetails = (sdk: Sdk) => ({
    blocks: {
        getServiceDetails: (
            params: Blocks.ServiceDetails.Request.GetServiceDetailsBlockParams,
            query: Blocks.ServiceDetails.Request.GetServiceDetailsBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.ServiceDetails.Model.ServiceDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});

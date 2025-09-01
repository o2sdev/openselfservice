import { Models } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/service-details.client';

const API_URL = URL;

export const serviceDetails = (sdk: Sdk) => ({
    blocks: {
        getServiceDetails: (
            params: Request.GetServiceDetailsBlockParams,
            query: Request.GetServiceDetailsBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.ServiceDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
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

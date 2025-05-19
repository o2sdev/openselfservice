import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.Organizations.URL;

export const organizations = (sdk: Sdk) => ({
    modules: {
        getCustomers: (
            query: Modules.Organizations.Request.GetCustomersQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Modules.Organizations.Model.CustomerList> =>
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

import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Modules.Organizations.URL;

export const organizations = (sdk: Sdk) => ({
    modules: {
        getOrganizations: (
            query: Modules.Organizations.Request.GetOrganizationsQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Modules.Organizations.Model.OrganizationList> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});

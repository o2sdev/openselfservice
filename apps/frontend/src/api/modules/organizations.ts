import { Modules } from '@o2s/api-harmonization';
import { URL } from '@o2s/api-harmonization/modules/organizations/organizations.url';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

const API_URL = URL;

export const organizations = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        modules: {
            getCustomers: (
                query: Modules.Organizations.Request.GetCustomersQuery,
                headers: AppHeaders,
                authorization: string,
            ): Promise<Modules.Organizations.Model.CustomerList> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

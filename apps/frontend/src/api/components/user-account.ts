import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.UserAccount.URL;

export const userAccount = (sdk: Sdk) => ({
    components: {
        getUserAccount: (
            query: Components.UserAccount.Request.GetUserAccountComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.UserAccount.Model.UserAccountComponent> =>
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

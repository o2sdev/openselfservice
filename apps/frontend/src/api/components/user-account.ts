import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.UserAccount.URL;

export const userAccount = (sdk: Sdk) => ({
    blocks: {
        getUserAccount: (
            query: Blocks.UserAccount.Request.GetUserAccountComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.UserAccount.Model.UserAccountComponent> =>
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

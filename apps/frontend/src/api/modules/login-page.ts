import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Modules.LoginPage.URL;

export const loginPage = (sdk: Sdk) => ({
    modules: {
        getLoginPage: (headers: Headers.AppHeaders): Promise<Modules.LoginPage.Model.LoginPage> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    'x-client-timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
                },
            }),
    },
});

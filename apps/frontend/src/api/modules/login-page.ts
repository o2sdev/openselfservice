import { Modules } from '@o2s/api-harmonization';

import { Models } from '@o2s/utils.api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.LoginPage.URL;

export const loginPage = (sdk: Sdk) => ({
    modules: {
        getLoginPage: (headers: Models.Headers.AppHeaders): Promise<Modules.LoginPage.Model.LoginPage> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                },
            }),
    },
});

import { Modules } from '@o2s/api-harmonization';
import { URL } from '@o2s/api-harmonization/modules/login-page/login-page.url';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = URL;

export const loginPage = (sdk: Sdk) => ({
    modules: {
        getLoginPage: (headers: AppHeaders): Promise<Modules.LoginPage.Model.LoginPage> =>
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

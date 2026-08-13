import { Modules } from '@o2s/api-harmonization';
import { URL } from '@o2s/api-harmonization/modules/login-page/login-page.url';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

const API_URL = URL;

export const loginPage = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        modules: {
            getLoginPage: (headers: AppHeaders): Promise<Modules.LoginPage.Model.LoginPage> =>
                request({
                    url: API_URL,
                    headers,
                }),
        },
    };
};

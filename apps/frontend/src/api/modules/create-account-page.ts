import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.CreateAccountPage.URL;

export const createAccountPage = (sdk: Sdk) => ({
    modules: {
        getCreateAccountPage: (
            headers: Headers.AppHeaders,
        ): Promise<Modules.CreateAccountPage.Model.CreateAccountPage> =>
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

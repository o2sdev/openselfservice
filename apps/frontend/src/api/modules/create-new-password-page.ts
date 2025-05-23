import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.CreateNewPasswordPage.URL;

export const createNewPasswordPage = (sdk: Sdk) => ({
    modules: {
        getCreateNewPasswordPage: (
            headers: Headers.AppHeaders,
        ): Promise<Modules.CreateNewPasswordPage.Model.CreateNewPasswordPage> =>
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

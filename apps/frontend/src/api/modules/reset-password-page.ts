import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.ResetPasswordPage.URL;

export const resetPasswordPage = (sdk: Sdk) => ({
    modules: {
        getResetPasswordPage: (
            headers: Headers.AppHeaders,
        ): Promise<Modules.ResetPasswordPage.Model.ResetPasswordPage> =>
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

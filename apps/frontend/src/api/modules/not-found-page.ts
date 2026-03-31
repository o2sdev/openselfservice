import { Modules } from '@o2s/api-harmonization';
import { URL } from '@o2s/api-harmonization/modules/not-found-page/not-found-page.url';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = URL;

export const notFoundPage = (sdk: Sdk) => ({
    modules: {
        getNotFoundPage: (
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Modules.NotFoundPage.Model.NotFoundPage> => {
            return sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
            });
        },
    },
});

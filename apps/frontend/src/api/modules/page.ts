import { Modules } from '@o2s/api-harmonization';
import { URL } from '@o2s/api-harmonization/modules/page/page.url';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = URL;

export const page = (sdk: Sdk) => ({
    modules: {
        getInit: (
            params: Modules.Page.Request.GetInitQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Modules.Page.Model.Init> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/init`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: params,
            }),
        getPage: (
            params: Modules.Page.Request.GetPageQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Modules.Page.Model.Page> =>
            sdk.makeRequest({
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
                params: params,
            }),
    },
});

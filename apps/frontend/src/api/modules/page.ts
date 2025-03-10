import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Modules.Page.URL;

export const page = (sdk: Sdk) => ({
    modules: {
        getInit: (
            params: Modules.Page.Request.GetInitQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.Page.Model.Init> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/init`,
                headers: {
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
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Modules.Page.Model.Page> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: params,
            }),
    },
});

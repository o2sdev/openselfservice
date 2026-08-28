import { Modules } from '@o2s/api-harmonization';
import { URL } from '@o2s/api-harmonization/modules/page/page.url';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

const API_URL = URL;

export const page = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        modules: {
            getInit: (
                params: Modules.Page.Request.GetInitQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Modules.Page.Model.Init> =>
                request({
                    url: `${API_URL}/init`,
                    params: params,
                    headers,
                    authorization,
                }),
            getPage: (
                params: Modules.Page.Request.GetPageQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Modules.Page.Model.Page> =>
                request({
                    url: API_URL,
                    params: params,
                    headers,
                    authorization,
                }),
        },
    };
};

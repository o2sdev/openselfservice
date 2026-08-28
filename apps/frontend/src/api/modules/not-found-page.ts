import { Modules } from '@o2s/api-harmonization';
import { URL } from '@o2s/api-harmonization/modules/not-found-page/not-found-page.url';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

const API_URL = URL;

export const notFoundPage = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        modules: {
            getNotFoundPage: (
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Modules.NotFoundPage.Model.NotFoundPage> => {
                return request({
                    url: API_URL,
                    headers,
                    authorization,
                });
            },
        },
    };
};

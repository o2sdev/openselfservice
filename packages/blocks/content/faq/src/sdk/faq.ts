import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/faq.client';
import { URL } from '../api-harmonization/faq.url';

const API_URL = URL;

export const faq = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getFaq: (
                query: Request.GetFaqBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.FaqBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

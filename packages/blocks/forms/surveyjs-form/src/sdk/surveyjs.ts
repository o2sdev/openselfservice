import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/surveyjs.client';
import { URL } from '../api-harmonization/surveyjs.url';

const API_URL = URL;

export const surveyjs = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getSurveyjsBlock: (
                query: Request.GetSurveyjsBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.SurveyjsBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

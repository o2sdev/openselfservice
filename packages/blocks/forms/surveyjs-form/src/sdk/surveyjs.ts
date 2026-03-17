import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/surveyjs.client';
import { URL } from '../api-harmonization/surveyjs.url';

const API_URL = URL;

export const surveyjs = (sdk: Sdk) => ({
    blocks: {
        getSurveyjsBlock: (
            query: Request.GetSurveyjsBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.SurveyjsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),
    },
});

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/surveyjs.client';

const API_URL = URL;

export const surveyjs = (sdk: Sdk) => ({
    blocks: {
        getSurveyjsBlock: (
            query: Request.GetSurveyjsBlockQuery,
            headers: ApiModels.Headers.AppHeaders,
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

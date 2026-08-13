import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/surveyjs.client';

const API_URL = URL;

export const surveyjs = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        modules: {
            getSurvey: (
                params: Request.SurveyJsQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.SurveyJs> =>
                request({
                    url: API_URL,
                    params: params,
                    headers,
                    authorization,
                }),

            submitSurvey: (
                params: Request.SurveyJsSubmitPayload,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<void> => {
                return request({
                    method: 'post',
                    url: API_URL,
                    data: params,
                    headers,
                    authorization,
                });
            },
        },
    };
};

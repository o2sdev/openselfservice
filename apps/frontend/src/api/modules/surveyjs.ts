import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.SurveyjsForms.URL;

export const surveyjs = (sdk: Sdk) => ({
    modules: {
        getSurvey: (
            params: Modules.SurveyjsForms.Request.SurveyJsQuery,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.SurveyjsForms.Model.SurveyJs> =>
            sdk.makeRequest({
                method: 'get',
                url: API_URL,
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

        submitSurvey: (
            params: Modules.SurveyjsForms.Request.SurveyJsSubmitPayload,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<void> =>
            sdk.makeRequest({
                method: 'post',
                url: API_URL,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                data: params,
            }),
    },
});

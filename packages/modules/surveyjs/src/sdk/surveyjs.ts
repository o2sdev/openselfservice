import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/surveyjs.client';

const API_URL = URL;

export const surveyjs = (sdk: Sdk) => ({
    modules: {
        getSurvey: (
            params: Request.SurveyJsQuery,
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.SurveyJs> =>
            sdk.makeRequest({
                method: 'get',
                url: API_URL,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: params,
            }),

        /**
         * Unified submit survey method that handles both JSON and multipart/form-data submissions.
         *
         * - If files are provided: uses multipart/form-data (efficient for large files)
         * - If no files: uses application/json (standard submission)
         *
         * @param params - Survey payload (JSON format) or code with data (for multipart)
         * @param headers - Request headers
         * @param authorization - Authorization token
         * @param files - Optional array of File objects (triggers multipart/form-data)
         */
        submitSurvey: (
            params: Request.SurveyJsSubmitPayload | (Record<string, string> & { code: string }),
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
            files?: File[],
        ): Promise<void> => {
            // If files are provided, use multipart/form-data
            if (files && files.length > 0) {
                const formData = new FormData();

                // Handle both payload formats
                if ('surveyPayload' in params) {
                    // JSON format: extract code and surveyPayload fields
                    formData.append('code', params.code);
                    Object.entries(params.surveyPayload).forEach(([key, value]) => {
                        if (value !== undefined && value !== null && key !== 'attachments') {
                            formData.append(key, String(value));
                        }
                    });
                } else {
                    Object.entries(params).forEach(([key, value]) => {
                        if (value !== undefined && value !== null) {
                            formData.append(key, String(value));
                        }
                    });
                }

                // Add files
                files.forEach((file) => {
                    formData.append('attachments', file);
                });

                return sdk.makeRequest({
                    method: 'post',
                    url: API_URL,
                    headers: {
                        ...Utils.Headers.getApiHeaders(),
                        ...headers,
                        ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
                        // Don't set Content-Type - browser will set it with boundary for multipart
                    },
                    data: formData,
                });
            }

            // No files: use standard JSON submission
            return sdk.makeRequest({
                method: 'post',
                url: API_URL,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
                },
                data: params,
            });
        },
    },
});

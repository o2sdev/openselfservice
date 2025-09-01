import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/notification-details.client';

const API_URL = URL;

export const notificationDetails = (sdk: Sdk) => ({
    blocks: {
        getNotificationDetails: (
            params: Request.GetNotificationDetailsBlockParams,
            query: Request.GetNotificationDetailsBlockQuery,
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.NotificationDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
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
        markNotificationAs: (
            body: Request.MarkNotificationAsBlockBody,
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
        ): Promise<void> =>
            sdk.makeRequest({
                method: 'post',
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
                data: body,
            }),
    },
});

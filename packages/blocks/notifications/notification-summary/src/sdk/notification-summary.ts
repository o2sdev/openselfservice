import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/notification-summary.client';

const API_URL = URL;

export const notificationSummary = (sdk: Sdk) => ({
    blocks: {
        getNotificationSummary: (
            query: Request.GetNotificationSummaryBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.NotificationSummaryBlock> =>
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

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/notification-details.client';
import { URL } from '../api-harmonization/notification-details.url';

const API_URL = URL;

export const notificationDetails = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getNotificationDetails: (
                params: Request.GetNotificationDetailsBlockParams,
                query: Request.GetNotificationDetailsBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.NotificationDetailsBlock> =>
                request({
                    url: `${API_URL}/${params.id}`,
                    params: query,
                    headers,
                    authorization,
                }),
            markNotificationAs: (
                body: Request.MarkNotificationAsBlockBody,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<void> =>
                request({
                    method: 'post',
                    url: API_URL,
                    data: body,
                    headers,
                    authorization,
                }),
        },
    };
};

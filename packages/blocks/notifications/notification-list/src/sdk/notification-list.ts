import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/notification-list.client';
import { URL } from '../api-harmonization/notification-list.url';

const API_URL = URL;

export const notificationList = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getNotificationList: (
                query: Request.GetNotificationListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.NotificationListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

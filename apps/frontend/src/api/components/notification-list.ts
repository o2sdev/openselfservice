import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.NotificationList.URL;

export const notificationList = (sdk: Sdk) => ({
    blocks: {
        getNotificationList: (
            query: Blocks.NotificationList.Request.GetNotificationListComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.NotificationList.Model.NotificationListComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: API_URL,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});

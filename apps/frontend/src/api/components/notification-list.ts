import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.NotificationList.URL;

export const notificationList = (sdk: Sdk) => ({
    components: {
        getNotificationList: (
            query: Components.NotificationList.Request.GetNotificationListComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.NotificationList.Model.NotificationListComponent> =>
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

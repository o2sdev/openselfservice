import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.NotificationDetails.URL;

export const notificationDetails = (sdk: Sdk) => ({
    components: {
        getNotificationDetails: (
            params: Components.NotificationDetails.Request.GetNotificationDetailsComponentParams,
            query: Components.NotificationDetails.Request.GetNotificationDetailsComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.NotificationDetails.Model.NotificationDetailsComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),

        markNotificationAs: (
            body: Components.NotificationDetails.Request.MarkNotificationAsComponentBody,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<void> =>
            sdk.makeRequest({
                method: 'post',
                url: API_URL,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                data: body,
            }),
    },
});

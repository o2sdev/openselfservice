import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.NotificationDetails.URL;

export const notificationDetails = (sdk: Sdk) => ({
    blocks: {
        getNotificationDetails: (
            params: Blocks.NotificationDetails.Request.GetNotificationDetailsComponentParams,
            query: Blocks.NotificationDetails.Request.GetNotificationDetailsComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.NotificationDetails.Model.NotificationDetailsComponent> =>
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
            body: Blocks.NotificationDetails.Request.MarkNotificationAsComponentBody,
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

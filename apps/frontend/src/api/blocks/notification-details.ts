import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.NotificationDetails.URL;

export const notificationDetails = (sdk: Sdk) => ({
    blocks: {
        getNotificationDetails: (
            params: Blocks.NotificationDetails.Request.GetNotificationDetailsBlockParams,
            query: Blocks.NotificationDetails.Request.GetNotificationDetailsBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.NotificationDetails.Model.NotificationDetailsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}/${params.id}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),

        markNotificationAs: (
            body: Blocks.NotificationDetails.Request.MarkNotificationAsBlockBody,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<void> =>
            sdk.makeRequest({
                method: 'post',
                url: API_URL,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                data: body,
            }),
    },
});

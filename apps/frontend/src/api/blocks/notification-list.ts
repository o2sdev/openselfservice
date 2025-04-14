import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.NotificationList.URL;

export const notificationList = (sdk: Sdk) => ({
    blocks: {
        getNotificationList: (
            query: Blocks.NotificationList.Request.GetNotificationListBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.NotificationList.Model.NotificationListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: API_URL,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});

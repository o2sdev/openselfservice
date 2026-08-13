import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request, URL } from '../api-harmonization/notification-summary.client';

const API_URL = URL;

export const notificationSummary = (sdk: Sdk) => {
    const request = createBlockMethod(sdk);

    return {
        blocks: {
            getNotificationSummary: (
                query: Request.GetNotificationSummaryBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.NotificationSummaryBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};

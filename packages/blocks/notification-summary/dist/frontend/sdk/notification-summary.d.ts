import { Models } from '@o2s/utils.api-harmonization';
import { Sdk } from '@o2s/framework/sdk';
import { Model, Request } from '../api-harmonization/notification-summary.client';
export declare const notificationSummary: (sdk: Sdk) => {
    blocks: {
        getNotificationSummary: (query: Request.GetNotificationSummaryBlockQuery, headers: Models.Headers.AppHeaders, authorization?: string) => Promise<Model.NotificationSummaryBlock>;
    };
};
//# sourceMappingURL=notification-summary.d.ts.map
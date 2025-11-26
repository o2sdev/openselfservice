import { Models } from '@o2s/utils.api-harmonization';
import { GetNotificationSummaryBlockQuery } from './notification-summary.request';
import { NotificationSummaryService } from './notification-summary.service';
export declare class NotificationSummaryController {
    protected readonly service: NotificationSummaryService;
    constructor(service: NotificationSummaryService);
    getNotificationSummaryBlock(headers: Models.Headers.AppHeaders, query: GetNotificationSummaryBlockQuery): import("rxjs").Observable<import("./notification-summary.model").NotificationSummaryBlock>;
}
//# sourceMappingURL=notification-summary.controller.d.ts.map
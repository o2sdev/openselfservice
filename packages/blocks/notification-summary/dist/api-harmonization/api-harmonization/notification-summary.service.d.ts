import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable } from 'rxjs';
import { Models } from '@o2s/utils.api-harmonization';
import { NotificationSummaryBlock } from './notification-summary.model';
import { GetNotificationSummaryBlockQuery } from './notification-summary.request';
export declare class NotificationSummaryService {
    private readonly cmsService;
    private readonly notificationService;
    constructor(cmsService: CMS.Service, notificationService: Notifications.Service);
    getNotificationSummaryBlock(query: GetNotificationSummaryBlockQuery, headers: Models.Headers.AppHeaders): Observable<NotificationSummaryBlock>;
}
//# sourceMappingURL=notification-summary.service.d.ts.map
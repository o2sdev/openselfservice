import { Injectable } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapNotificationSummary } from './notification-summary.mapper';
import { NotificationSummaryBlock } from './notification-summary.model';
import { GetNotificationSummaryBlockQuery } from './notification-summary.request';

@Injectable()
export class NotificationSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly notificationService: Notifications.Service,
    ) {}

    getNotificationSummaryBlock(
        query: GetNotificationSummaryBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<NotificationSummaryBlock> {
        const cms = this.cmsService.getNotificationSummaryBlock({ ...query, locale: headers['x-locale'] });
        const notifications = this.notificationService.getNotificationList({
            limit: 1000,
            offset: 0,
            locale: headers['x-locale'],
        });

        return forkJoin([notifications, cms]).pipe(
            map(([notifications, cms]) => mapNotificationSummary(cms, notifications, headers['x-locale'])),
        );
    }
}

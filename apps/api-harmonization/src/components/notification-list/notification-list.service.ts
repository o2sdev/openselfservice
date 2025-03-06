import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Notifications } from '../../models';

import { mapNotificationList } from './notification-list.mapper';
import { NotificationListComponent } from './notification-list.model';
import { GetNotificationListComponentQuery } from './notification-list.request';

@Injectable()
export class NotificationListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly notificationService: Notifications.Service,
    ) {}

    getNotificationListComponent(
        query: GetNotificationListComponentQuery,
        headers: AppHeaders,
    ): Observable<NotificationListComponent> {
        const cms = this.cmsService.getNotificationListComponent({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.notificationService
                    .getNotificationList({
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                    })
                    .pipe(map((notifications) => mapNotificationList(notifications, cms, headers['x-locale'])));
            }),
        );
    }
}

import { Injectable } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapNotificationList } from './notification-list.mapper';
import { NotificationListBlock } from './notification-list.model';
import { GetNotificationListBlockQuery } from './notification-list.request';

@Injectable()
export class NotificationListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly notificationService: Notifications.Service,
    ) {}

    getNotificationListBlock(
        query: GetNotificationListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<NotificationListBlock> {
        const cms = this.cmsService.getNotificationListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.notificationService
                    .getNotificationList({
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                        locale: headers['x-locale'],
                    })
                    .pipe(
                        map((notifications) =>
                            mapNotificationList(
                                notifications,
                                cms,
                                headers['x-locale'],
                                headers['x-client-timezone'] || '',
                            ),
                        ),
                    );
            }),
        );
    }
}

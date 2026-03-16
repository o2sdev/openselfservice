import { Injectable } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapNotificationList } from './notification-list.mapper';
import { NotificationListBlock } from './notification-list.model';
import { GetNotificationListBlockQuery } from './notification-list.request';

const H = HeaderName;

@Injectable()
export class NotificationListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly notificationService: Notifications.Service,
        private readonly authService: Auth.Service,
    ) {}

    getNotificationListBlock(
        query: GetNotificationListBlockQuery,
        headers: AppHeaders,
    ): Observable<NotificationListBlock> {
        const cms = this.cmsService.getNotificationListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.notificationService
                    .getNotificationList({
                        ...(cms.initialFilters || {}),
                        ...query,
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                        locale: headers[H.Locale],
                    })
                    .pipe(
                        map((notifications) => {
                            const result = mapNotificationList(
                                notifications,
                                cms,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                            );

                            // Extract permissions using ACL service
                            if (headers[H.Authorization]) {
                                const permissions = this.authService.canPerformActions(
                                    headers[H.Authorization],
                                    'notifications',
                                    ['view', 'mark_read', 'delete'],
                                );

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    mark_read: permissions.mark_read ?? false,
                                    delete: permissions.delete ?? false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}

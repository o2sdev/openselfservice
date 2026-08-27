import { Injectable } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth, Models } from '@o2s/framework/modules';

import { mapNotificationList } from './notification-list.mapper';
import { NotificationListBlock } from './notification-list.model';
import { GetNotificationListBlockQuery } from './notification-list.request';

const H = HeaderName;

const DEFAULT_LIMIT = 1;

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
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getBlockConfig<CMS.Model.NotificationListBlock.NotificationListBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'NotificationListBlock',
        });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                // `page` is a URL concern and is consumed here, so it never reaches the domain module.
                const { page: _page, ...notificationQuery } = query;
                const { limit, offset } = Models.Pagination.resolvePagination(query, {
                    cmsLimit: cms.pagination?.limit,
                    defaultLimit: DEFAULT_LIMIT,
                });

                return this.notificationService
                    .getNotificationList(
                        {
                            ...(cms.initialFilters || {}),
                            ...notificationQuery,
                            limit,
                            offset,
                            locale: headers[H.Locale],
                        },
                        authorization,
                    )
                    .pipe(
                        map((notifications) => {
                            const result = mapNotificationList(
                                notifications,
                                cms,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                            );

                            // Extract permissions using ACL service
                            if (authorization) {
                                const permissions = this.authService.canPerformActions(authorization, 'notifications', [
                                    'view',
                                    'mark_read',
                                    'delete',
                                ]);

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

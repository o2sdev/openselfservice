import { Injectable } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapNotificationSummary } from './notification-summary.mapper';
import { NotificationSummaryBlock } from './notification-summary.model';
import { GetNotificationSummaryBlockQuery } from './notification-summary.request';

const H = HeaderName;

@Injectable()
export class NotificationSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly notificationService: Notifications.Service,
        private readonly authService: Auth.Service,
    ) {}

    getNotificationSummaryBlock(
        query: GetNotificationSummaryBlockQuery,
        headers: AppHeaders,
    ): Observable<NotificationSummaryBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getBlockConfig<CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'NotificationSummaryBlock',
        });
        const notifications = this.notificationService.getNotificationList(
            {
                limit: 1000,
                offset: 0,
                locale: headers[H.Locale],
            },
            authorization,
        );

        return forkJoin([notifications, cms]).pipe(
            map(([notifications, cms]) => {
                const result = mapNotificationSummary(cms, notifications, headers[H.Locale]);

                // Extract permissions using ACL service
                if (authorization) {
                    const permissions = this.authService.canPerformActions(authorization, 'notifications', [
                        'view',
                        'mark_read',
                    ]);

                    result.permissions = {
                        view: permissions.view ?? false,
                        mark_read: permissions.mark_read ?? false,
                    };
                }

                return result;
            }),
        );
    }
}

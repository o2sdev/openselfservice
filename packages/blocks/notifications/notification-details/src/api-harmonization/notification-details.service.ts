import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapNotificationDetails } from './notification-details.mapper';
import { NotificationDetailsBlock } from './notification-details.model';
import {
    GetNotificationDetailsBlockParams,
    GetNotificationDetailsBlockQuery,
    MarkNotificationAsBlockBody,
} from './notification-details.request';

const H = HeaderName;

@Injectable()
export class NotificationDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly notificationService: Notifications.Service,
        private readonly authService: Auth.Service,
    ) {}

    getNotificationDetailsBlock(
        params: GetNotificationDetailsBlockParams,
        query: GetNotificationDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<NotificationDetailsBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getBlockConfig<CMS.Model.NotificationDetailsBlock.NotificationDetailsBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'NotificationDetailsBlock',
        });
        const notification = this.notificationService.getNotification(
            { ...params, locale: headers[H.Locale] },
            authorization,
        );

        return forkJoin([notification, cms]).pipe(
            map(([notification, cms]) => {
                if (!notification) {
                    throw new NotFoundException();
                }

                const result = mapNotificationDetails(
                    notification,
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
    }

    markNotificationAs(body: MarkNotificationAsBlockBody, headers: AppHeaders): Observable<void> {
        const authorization = headers[H.Authorization];
        return this.notificationService.markAs(body, authorization);
    }
}

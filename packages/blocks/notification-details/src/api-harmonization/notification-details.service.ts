import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapNotificationDetails } from './notification-details.mapper';
import { NotificationDetailsBlock } from './notification-details.model';
import {
    GetNotificationDetailsBlockParams,
    GetNotificationDetailsBlockQuery,
    MarkNotificationAsBlockBody,
} from './notification-details.request';

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
        headers: Models.Headers.AppHeaders,
    ): Observable<NotificationDetailsBlock> {
        const cms = this.cmsService.getNotificationDetailsBlock({ ...query, locale: headers['x-locale'] });
        const notification = this.notificationService.getNotification({ ...params, locale: headers['x-locale'] });

        return forkJoin([notification, cms]).pipe(
            map(([notification, cms]) => {
                if (!notification) {
                    throw new NotFoundException();
                }

                const result = mapNotificationDetails(
                    notification,
                    cms,
                    headers['x-locale'],
                    headers['x-client-timezone'] || '',
                );

                // Extract permissions using ACL service
                if (headers.authorization) {
                    const permissions = this.authService.canPerformActions(headers.authorization, 'notifications', [
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

    markNotificationAs(body: MarkNotificationAsBlockBody): Observable<void> {
        return this.notificationService.markAs(body);
    }
}

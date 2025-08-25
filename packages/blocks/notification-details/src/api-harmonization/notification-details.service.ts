import { Injectable, NotFoundException } from '@nestjs/common';
import { CMS, Notifications } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

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

                return mapNotificationDetails(
                    notification,
                    cms,
                    headers['x-locale'],
                    headers['x-client-timezone'] || '',
                );
            }),
        );
    }

    markNotificationAs(body: MarkNotificationAsBlockBody): Observable<void> {
        return this.notificationService.markAs(body);
    }
}

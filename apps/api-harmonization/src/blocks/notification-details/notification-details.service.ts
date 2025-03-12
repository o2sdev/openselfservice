import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Notifications } from '../../models';

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
        headers: AppHeaders,
    ): Observable<NotificationDetailsBlock> {
        const cms = this.cmsService.getNotificationDetailsBlock({ ...query, locale: headers['x-locale'] });
        const notification = this.notificationService.getNotification({ ...params, locale: headers['x-locale'] });

        return forkJoin([notification, cms]).pipe(
            map(([notification, cms]) => {
                if (!notification) {
                    throw new NotFoundException();
                }

                return mapNotificationDetails(notification, cms, headers['x-locale']);
            }),
        );
    }

    markNotificationAs(body: MarkNotificationAsBlockBody): Observable<void> {
        return this.notificationService.markAs(body);
    }
}

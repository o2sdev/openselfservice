import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Notifications } from '../../models';

import { mapNotificationDetails } from './notification-details.mapper';
import { NotificationDetailsComponent } from './notification-details.model';
import {
    GetNotificationDetailsComponentParams,
    GetNotificationDetailsComponentQuery,
    MarkNotificationAsComponentBody,
} from './notification-details.request';

@Injectable()
export class NotificationDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly notificationService: Notifications.Service,
    ) {}

    getNotificationDetailsComponent(
        params: GetNotificationDetailsComponentParams,
        query: GetNotificationDetailsComponentQuery,
        headers: AppHeaders,
    ): Observable<NotificationDetailsComponent> {
        const cms = this.cmsService.getNotificationDetailsComponent({ ...query, locale: headers['x-locale'] });
        const notification = this.notificationService.getNotification(params);

        return forkJoin([notification, cms]).pipe(
            map(([notification, cms]) => {
                if (!notification) {
                    throw new NotFoundException();
                }

                return mapNotificationDetails(notification, cms, headers['x-locale']);
            }),
        );
    }

    markNotificationAs(body: MarkNotificationAsComponentBody): Observable<void> {
        return this.notificationService.markAs(body);
    }
}

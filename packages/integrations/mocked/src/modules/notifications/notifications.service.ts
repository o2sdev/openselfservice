import { Injectable, NotImplementedException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Notifications } from '@o2s/framework/modules';

import { mapNotification, mapNotifications } from './notifications.mapper';
import * as CustomNotifications from './notifications.model';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class NotificationsService implements Notifications.Service {
    getNotification(
        params: Notifications.Request.GetNotificationParams,
    ): Observable<CustomNotifications.Notification | undefined> {
        return of(mapNotification(params.id)).pipe(responseDelay());
    }

    getNotificationList(
        options: Notifications.Request.GetNotificationListQuery,
    ): Observable<CustomNotifications.Notifications> {
        return of(mapNotifications(options)).pipe(responseDelay());
    }

    markAs(_request: Notifications.Request.MarkNotificationAsRequest): Observable<void> {
        throw new NotImplementedException('The method is not implemented');
    }
}

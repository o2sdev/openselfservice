import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';

import { Notifications } from '@o2s/framework/modules';

import { mapNotification, mapNotifications, markNotificationAs } from './notifications.mapper';
import * as CustomNotifications from './notifications.model';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class NotificationsService extends Notifications.Service {
    constructor() {
        super();
    }

    getNotification(
        params: Notifications.Request.GetNotificationParams,
        _authorization?: string,
    ): Observable<CustomNotifications.Notification | undefined> {
        return of(mapNotification(params.id, params.locale)).pipe(responseDelay());
    }

    getNotificationList(
        options: Notifications.Request.GetNotificationListQuery,
        _authorization?: string,
    ): Observable<CustomNotifications.Notifications> {
        return of(mapNotifications(options)).pipe(responseDelay());
    }

    markAs(request: Notifications.Request.MarkNotificationAsRequest, _authorization?: string): Observable<void> {
        if (!markNotificationAs(request)) {
            return throwError(() => new NotFoundException(`Notification with ID ${request.id} not found`));
        }

        return of(undefined).pipe(responseDelay());
    }
}

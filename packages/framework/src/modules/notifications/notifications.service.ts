import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Notifications from './';

@Injectable()
export abstract class NotificationService {
    protected constructor(..._services: unknown[]) {}

    abstract getNotification(
        options: Notifications.Request.GetNotificationParams,
    ): Observable<Notifications.Model.Notification | undefined>;
    abstract getNotificationList(
        options: Notifications.Request.GetNotificationListQuery,
    ): Observable<Notifications.Model.Notifications>;
    abstract markAs(request: Notifications.Request.MarkNotificationAsRequest): Observable<void>;
}

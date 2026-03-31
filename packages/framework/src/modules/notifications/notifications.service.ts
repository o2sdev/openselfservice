import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Notifications from './';

/**
 * Abstract notification service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
@Injectable()
export abstract class NotificationService {
    protected constructor(..._services: unknown[]) {}

    /** Returns a single notification by id. */
    abstract getNotification(
        options: Notifications.Request.GetNotificationParams,
        authorization?: string,
    ): Observable<Notifications.Model.Notification | undefined>;
    /** Notification list with pagination and filters (type, priority, status, dates). */
    abstract getNotificationList(
        options: Notifications.Request.GetNotificationListQuery,
        authorization?: string,
    ): Observable<Notifications.Model.Notifications>;
    /** Marks a notification as a given status (e.g. read). */
    abstract markAs(request: Notifications.Request.MarkNotificationAsRequest, authorization?: string): Observable<void>;
}

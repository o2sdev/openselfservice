import { NotificationPriority, NotificationStatus } from './notifications.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Parameters for fetching a single notification: id, optional locale. */
export class GetNotificationParams {
    id!: string;
    locale?: string;
}

/** Query for notification list: pagination, optional type, priority, status, dateFrom, dateTo, sort, locale. */
export class GetNotificationListQuery extends PaginationQuery {
    type?: string;
    priority?: NotificationPriority;
    status?: NotificationStatus;
    dateFrom?: Date;
    dateTo?: Date;
    sort?: string;
    locale?: string;
}

/** Request body for marking a notification as a status: id, status. */
export class MarkNotificationAsRequest {
    id!: string;
    status!: NotificationStatus;
}

import { NotificationPriority, NotificationStatus } from './notifications.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetNotificationParams {
    id!: string;
    locale?: string;
}

export class GetNotificationListQuery extends PaginationQuery {
    type?: string;
    priority?: NotificationPriority;
    status?: NotificationStatus;
    dateFrom?: Date;
    dateTo?: Date;
    sort?: string;
    locale?: string;
}

export class MarkNotificationAsRequest {
    id!: string;
    status!: NotificationStatus;
}

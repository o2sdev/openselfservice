import { NotificationPriority, NotificationStatus } from './notifications.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single notification. */
export class GetNotificationParams {
    /** Notification ID (required). */
    id!: string;
    /** Optional locale code (e.g., 'en-US'). */
    locale?: string;
}

/** Query params for fetching a paginated notification list. */
export class GetNotificationListQuery extends PaginationQuery {
    /** Notification type filter. */
    type?: string;
    /** Priority level filter. */
    priority?: NotificationPriority;
    /** Notification status filter. */
    status?: NotificationStatus;
    /** Date range start from query string (kept as string). */
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    dateTo?: string;
    /** Sorting expression, e.g., `createdAt_DESC`. */
    sort?: string;
    /** Optional locale code for localized content. */
    locale?: string;
}

/** Request body for updating notification status. */
export class MarkNotificationAsRequest {
    /** Notification identifier. */
    id!: string;
    /** New notification status. */
    status!: NotificationStatus;
}

import { Pagination } from '@/utils/models';

/** Notification: id, title, content, type, priority, status. */
export class Notification {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
    title!: string;
    content!: string;
    type!: string;
    priority!: NotificationPriority;
    status!: NotificationStatus;
}

/** Notification status. */
export type NotificationStatus = 'UNVIEWED' | 'VIEWED' | 'READ';

/** Notification priority. */
export type NotificationPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

/** Paginated notification list. */
export type Notifications = Pagination.Paginated<Notification>;

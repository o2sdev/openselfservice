import { Pagination } from '@/utils/models';

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

export type NotificationStatus = 'UNVIEWED' | 'VIEWED' | 'READ';
export type NotificationPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type Notifications = Pagination.Paginated<Notification>;

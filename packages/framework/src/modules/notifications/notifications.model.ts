import { ApiProperty } from '@nestjs/swagger';

import { Pagination } from '@/utils/models';

/** Allowed notification read/view status values (OpenAPI + TS union). */
export const NOTIFICATION_STATUS_VALUES = ['UNVIEWED', 'VIEWED', 'READ'] as const;
export type NotificationStatus = (typeof NOTIFICATION_STATUS_VALUES)[number];

/** Allowed notification priority values (OpenAPI + TS union). */
export const NOTIFICATION_PRIORITY_VALUES = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] as const;
export type NotificationPriority = (typeof NOTIFICATION_PRIORITY_VALUES)[number];

/** Notification: id, title, content, type, priority, status. */
export class Notification {
    @ApiProperty({ description: 'Unique notification identifier' })
    id!: string;

    @ApiProperty({ description: 'Notification creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiProperty({ description: 'Notification title' })
    title!: string;

    @ApiProperty({ description: 'Notification message content' })
    content!: string;

    @ApiProperty({ description: 'Notification type/category' })
    type!: string;

    @ApiProperty({ description: 'Notification priority level', enum: NOTIFICATION_PRIORITY_VALUES })
    priority!: NotificationPriority;

    @ApiProperty({ description: 'Current notification status', enum: NOTIFICATION_STATUS_VALUES })
    status!: NotificationStatus;
}

/** Paginated notification list for OpenAPI schema. */
export class PaginatedNotifications extends Pagination.Paginated<Notification> {
    @ApiProperty({ description: 'Array of notifications', type: () => [Notification] })
    declare data: Notification[];

    @ApiProperty({ description: 'Total number of notifications matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedNotifications class for OpenAPI compatibility. */
export type Notifications = Pagination.Paginated<Notification>;

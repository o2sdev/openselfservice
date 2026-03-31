import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
    NOTIFICATION_PRIORITY_VALUES,
    NOTIFICATION_STATUS_VALUES,
    type NotificationPriority,
    type NotificationStatus,
} from './notifications.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single notification. */
export class GetNotificationParams {
    /** Notification ID (required). */
    @ApiProperty({ description: 'Notification identifier.' })
    id!: string;
    /** Optional locale code (e.g., 'en-US'). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Query params for fetching a paginated notification list. */
export class GetNotificationListQuery extends PaginationQuery {
    /** Notification type filter. */
    @ApiPropertyOptional({ description: 'Notification type filter.' })
    type?: string;
    /** Priority level filter. */
    @ApiPropertyOptional({ description: 'Notification priority filter.', enum: NOTIFICATION_PRIORITY_VALUES })
    priority?: NotificationPriority;
    /** Notification status filter. */
    @ApiPropertyOptional({ description: 'Notification status filter.', enum: NOTIFICATION_STATUS_VALUES })
    status?: NotificationStatus;
    /** Date range start from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Date range start as ISO string.' })
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Date range end as ISO string.' })
    dateTo?: string;
    /** Sorting expression, e.g., `createdAt_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression from query string, for example `createdAt_DESC`.' })
    sort?: string;
    /** Optional locale code for localized content. */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Request body for updating notification status. */
export class MarkNotificationAsRequest {
    /** Notification identifier. */
    @ApiProperty({ description: 'Notification identifier.' })
    id!: string;
    /** New notification status. */
    @ApiProperty({ description: 'Target notification status to set.', enum: NOTIFICATION_STATUS_VALUES })
    status!: NotificationStatus;
}

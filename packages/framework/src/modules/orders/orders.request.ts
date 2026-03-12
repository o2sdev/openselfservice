import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import type { OrderStatus, PaymentStatus } from './orders.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single order. */
export class GetOrderParams {
    /** Order identifier. */
    @ApiProperty({ description: 'Order identifier.' })
    id!: string;
    /** Optional page size for embedded list views. */
    @ApiPropertyOptional({ description: 'Optional page size for embedded list views.' })
    limit?: number;
    /** Optional page offset for embedded list views. */
    @ApiPropertyOptional({ description: 'Optional page offset for embedded list views.' })
    offset?: number;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression from query string, for example `createdAt_DESC`.' })
    sort?: string;
}

/** Query params for fetching a paginated order list. */
export class GetOrderListQuery extends PaginationQuery {
    /** Optional order identifier filter. */
    @ApiPropertyOptional({ description: 'Optional order identifier filter.' })
    id?: string;
    /** Customer identifier filter. */
    @ApiPropertyOptional({ description: 'Customer identifier filter.' })
    customerId?: string;
    /** Order status filter. */
    @ApiPropertyOptional({ description: 'Order status filter.' })
    status?: OrderStatus;
    /** Payment status filter. */
    @ApiPropertyOptional({ description: 'Payment status filter.' })
    paymentStatus?: PaymentStatus;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression from query string, for example `createdAt_DESC`.' })
    sort?: string;
    /** Date range start from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Date range start as ISO string.' })
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Date range end as ISO string.' })
    dateTo?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

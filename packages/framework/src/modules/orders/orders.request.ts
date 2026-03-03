import { OrderStatus, PaymentStatus } from './orders.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single order. */
export class GetOrderParams {
    /** Order identifier. */
    id!: string;
    /** Optional page size for embedded list views. */
    limit?: number;
    /** Optional page offset for embedded list views. */
    offset?: number;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    sort?: string;
}

/** Query params for fetching a paginated order list. */
export class GetOrderListQuery extends PaginationQuery {
    /** Optional order identifier filter. */
    id?: string;
    /** Customer identifier filter. */
    customerId?: string;
    /** Order status filter. */
    status?: OrderStatus;
    /** Payment status filter. */
    paymentStatus?: PaymentStatus;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    sort?: string;
    /** Date range start from query string (kept as string). */
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    dateTo?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
}

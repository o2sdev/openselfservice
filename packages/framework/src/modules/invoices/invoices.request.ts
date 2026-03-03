import { InvoiceType, PaymentStatusType } from './invoices.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single invoice. */
export class GetInvoiceParams {
    /** Invoice identifier. */
    id!: string;
}

/** Query params for fetching a paginated invoice list. */
export class GetInvoiceListQuery extends PaginationQuery {
    /** Payment status filter. */
    paymentStatus?: PaymentStatusType;
    /** Invoice type filter. */
    type?: InvoiceType;
    /** Date range start from query string (kept as string). */
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    dateTo?: string;
    /** Sort expression from query string, e.g. `issuedDate_DESC`. */
    sort?: string;
    /** Free-text search phrase. */
    search?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
    INVOICE_TYPE_VALUES,
    type InvoiceType,
    PAYMENT_STATUS_TYPE_VALUES,
    type PaymentStatusType,
} from './invoices.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a single invoice. */
export class GetInvoiceParams {
    /** Invoice identifier. */
    @ApiProperty({ description: 'Invoice identifier.' })
    id!: string;
}

/** Query params for fetching a paginated invoice list. */
export class GetInvoiceListQuery extends PaginationQuery {
    /** Payment status filter. */
    @ApiPropertyOptional({ description: 'Filter invoices by payment status.', enum: PAYMENT_STATUS_TYPE_VALUES })
    paymentStatus?: PaymentStatusType;
    /** Invoice type filter. */
    @ApiPropertyOptional({ description: 'Filter invoices by invoice type.', enum: INVOICE_TYPE_VALUES })
    type?: InvoiceType;
    /** Date range start from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include invoices issued from this date (ISO string).' })
    dateFrom?: string;
    /** Date range end from query string (kept as string). */
    @ApiPropertyOptional({ description: 'Include invoices issued until this date (ISO string).' })
    dateTo?: string;
    /** Sort expression from query string, e.g. `issuedDate_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression, for example `issuedDate_DESC`.' })
    sort?: string;
    /** Free-text search phrase. */
    @ApiPropertyOptional({ description: 'Free-text search phrase for invoice content/number.' })
    search?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

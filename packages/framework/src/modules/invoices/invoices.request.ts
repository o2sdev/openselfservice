import { InvoiceType, PaymentStatusType } from './invoices.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Parameters for fetching a single invoice: id. */
export class GetInvoiceParams {
    id!: string;
}

/** Query for invoice list: pagination, optional paymentStatus, type, dateFrom, dateTo, sort, search, locale. */
export class GetInvoiceListQuery extends PaginationQuery {
    paymentStatus?: PaymentStatusType;
    type?: InvoiceType;
    dateFrom?: Date;
    dateTo?: Date;
    sort?: string;
    search?: string;
    locale?: string;
}

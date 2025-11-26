import { InvoiceType, PaymentStatusType } from './invoices.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetInvoiceParams {
    id!: string;
}

export class GetInvoiceListQuery extends PaginationQuery {
    paymentStatus?: PaymentStatusType;
    type?: InvoiceType;
    dateFrom?: Date;
    dateTo?: Date;
    sort?: string;
    search?: string;
    locale?: string;
}

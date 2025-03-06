import { Invoice } from '@/modules/invoices/invoices.model';
import { Component, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export class InvoiceListComponent extends Component.Component {
    title?: string;
    fieldMapping!: Mapping.Mapping<Invoice>;
    tableTitle?: string;
    table!: DataTable.DataTable<Invoice & { amountToPay: number }>;
    pagination?: Pagination.Pagination;
    filters?: Filters.Filters<Invoice>;
    noResults!: {
        title: string;
        description?: string;
    };
    downloadFileName?: string;
    labels!: {
        today: string;
        yesterday: string;
    };
    downloadButtonAriaDescription?: string;
}

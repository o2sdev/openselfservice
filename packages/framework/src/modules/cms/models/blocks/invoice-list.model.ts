import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

import { Invoice } from '@/modules/invoices/invoices.model';

export class InvoiceListBlock extends Block.Block {
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
        clickToSelect: string;
    };
    downloadButtonAriaDescription?: string;
}

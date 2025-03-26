import { Models } from '@o2s/framework/modules';

import { Invoices } from '../../models';
import { Block } from '../../utils';

export class InvoiceListBlock extends Block.Block {
    __typename!: 'InvoiceListBlock';
    title?: string;
    pagination?: Models.Pagination.Pagination;
    filters?: Models.Filters.Filters<Invoices.Model.Invoice>;
    noResults!: {
        title: string;
        description?: string;
    };
    invoices!: {
        data: Invoice[];
        total: Invoices.Model.Invoices['total'];
    };
    table!: {
        title?: string;
        data: Models.DataTable.DataTable<Invoices.Model.Invoice & { amountToPay: number }>;
    };
    downloadFileName?: string;
    downloadButtonAriaDescription?: string;
}

export class Invoice {
    id!: Invoices.Model.Invoice['id'];
    currency!: Models.Price.Currency;
    type!: {
        value: Invoices.Model.Invoice['type'];
        displayValue: string;
    };
    paymentStatus!: {
        value: Invoices.Model.Invoice['paymentStatus'];
        displayValue: string;
    };
    paymentDueDate!: {
        value: Invoices.Model.Invoice['paymentDueDate'];
        displayValue: string;
    };
    totalAmountDue!: {
        value: Invoices.Model.Invoice['totalAmountDue']['value'];
    };
    amountToPay!: {
        value: Invoices.Model.Invoice['totalToBePaid']['value'];
    };
}

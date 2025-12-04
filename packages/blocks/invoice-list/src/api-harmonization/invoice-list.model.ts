import { Invoices } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class InvoiceListBlock extends ApiModels.Block.Block {
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
        data: Models.DataTable.DataTable<Invoices.Model.Invoice>;
    };
    downloadFileName?: string;
    downloadButtonAriaDescription?: string;
    initialFilters?: Partial<Invoices.Model.Invoice & { sort?: string }>;
    cardHeaderSlots?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
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
    totalNetAmountDue!: {
        value: Invoices.Model.Invoice['totalNetAmountDue']['value'];
    };
}

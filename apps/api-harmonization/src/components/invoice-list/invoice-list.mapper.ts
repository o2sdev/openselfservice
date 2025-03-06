import { Date } from '@o2s/api-harmonization/utils';
import { checkNegativeValue } from '@o2s/api-harmonization/utils/price';

import { CMS, Invoices } from '../../models';

import { Invoice, InvoiceListComponent } from './invoice-list.model';

export const mapInvoiceList = (
    invoices: Invoices.Model.Invoices,
    cms: CMS.Model.InvoiceListComponent.InvoiceListComponent,
    locale: string,
): InvoiceListComponent => {
    return {
        __typename: 'InvoiceListComponent',
        id: cms.id,
        title: cms.title,
        pagination: cms.pagination,
        filters: cms.filters,
        noResults: cms.noResults,
        invoices: {
            total: invoices.total,
            data: invoices.data.map((invoice) => mapInvoice(invoice, cms, locale)),
        },
        table: {
            title: cms.tableTitle,
            data: cms.table,
        },
        downloadFileName: cms.downloadFileName,
        downloadButtonAriaDescription: cms.downloadButtonAriaDescription,
    };
};

export const mapInvoice = (
    invoice: Invoices.Model.Invoice,
    cms: CMS.Model.InvoiceListComponent.InvoiceListComponent,
    locale: string,
): Invoice => {
    return {
        id: invoice.id,
        currency: invoice.currency,
        type: {
            displayValue: cms.fieldMapping.type?.[invoice.type] || invoice.type,
            value: invoice.type,
        },
        paymentStatus: {
            displayValue: cms.fieldMapping.paymentStatus?.[invoice.paymentStatus] || invoice.paymentStatus,
            value: invoice.paymentStatus,
        },
        totalAmountDue: checkNegativeValue(invoice.totalAmountDue),
        amountToPay: checkNegativeValue(invoice.totalToBePaid),
        paymentDueDate: {
            displayValue: Date.formatDateRelative(
                invoice.paymentDueDate,
                locale,
                cms.labels.today,
                cms.labels.yesterday,
            ),
            value: invoice.paymentDueDate,
        },
    };
};

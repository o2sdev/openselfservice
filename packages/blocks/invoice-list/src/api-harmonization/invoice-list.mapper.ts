import { CMS, Invoices } from '@o2s/configs.integrations';

import { Utils } from '@o2s/utils.api-harmonization';

import { Invoice, InvoiceListBlock } from './invoice-list.model';

export const mapInvoiceList = (
    invoices: Invoices.Model.Invoices,
    cms: CMS.Model.InvoiceListBlock.InvoiceListBlock,
    locale: string,
    timezone: string,
): InvoiceListBlock => {
    return {
        __typename: 'InvoiceListBlock',
        id: cms.id,
        title: cms.title,
        pagination: cms.pagination,
        filters: cms.filters,
        noResults: cms.noResults,
        invoices: {
            total: invoices.total,
            data: invoices.data.map((invoice) => mapInvoice(invoice, cms, locale, timezone)),
        },
        table: {
            title: cms.tableTitle,
            data: cms.table,
        },
        downloadFileName: cms.downloadFileName,
        downloadButtonAriaDescription: cms.downloadButtonAriaDescription,
        initialFilters: cms.initialFilters,
    };
};

export const mapInvoice = (
    invoice: Invoices.Model.Invoice,
    cms: CMS.Model.InvoiceListBlock.InvoiceListBlock,
    locale: string,
    timezone: string,
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
        totalAmountDue: Utils.Price.checkNegativeValue(invoice.totalAmountDue),
        totalNetAmountDue: Utils.Price.checkNegativeValue(invoice.totalNetAmountDue),
        paymentDueDate: {
            displayValue: Utils.Date.formatDateRelative(
                invoice.paymentDueDate,
                locale,
                cms.labels.today,
                cms.labels.yesterday,
                timezone,
            ),
            value: invoice.paymentDueDate,
        },
    };
};

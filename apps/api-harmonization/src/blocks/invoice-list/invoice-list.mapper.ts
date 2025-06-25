import { formatDateRelative } from '@o2s/api-harmonization/utils/date';
import { checkNegativeValue } from '@o2s/api-harmonization/utils/price';

import { CMS, Invoices } from '../../models';

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
        totalAmountDue: checkNegativeValue(invoice.totalAmountDue),
        totalNetAmountDue: checkNegativeValue(invoice.totalNetAmountDue),
        paymentDueDate: {
            displayValue: formatDateRelative(
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

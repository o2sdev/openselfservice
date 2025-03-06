import { CMS } from '@o2s/framework/modules';

const MOCK_INVOICE_LIST_COMPONENT: CMS.Model.InvoiceListComponent.InvoiceListComponent = {
    id: 'invoice-list-1',
    title: 'Invoices',
    fieldMapping: {
        type: {
            STANDARD: 'Standard',
            PROFORMA: 'Proforma',
            CREDIT_NOTE: 'Credit Note',
            DEBIT_NOTE: 'Debit Note',
        },
        paymentStatus: {
            PAYMENT_COMPLETE: 'Paid',
            PAYMENT_DECLINED: 'Declined',
            PAYMENT_DUE: 'Due',
            PAYMENT_PAST_DUE: 'Past Due',
        },
    },
    tableTitle: 'List of your invoices',
    table: {
        columns: [
            { id: 'type', title: 'Invoice Type' },
            { id: 'id', title: 'Invoice Number' },
            { id: 'paymentDueDate', title: 'Due Date' },
            { id: 'paymentStatus', title: 'Payment Status' },
            { id: 'totalAmountDue', title: 'Total Amount Due' },
            { id: 'amountToPay', title: 'To be Paid' },
        ],
        actions: {
            title: 'Actions',
            label: 'Download',
        },
    },
    pagination: {
        limit: 5,
        legend: 'page of {total} invoices',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filter & Sort',
        title: 'Filter Invoices',
        description: 'Use filters to find specific invoices',
        submit: 'Apply Filters',
        reset: 'Reset Filters',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort',
                allowMultiple: false,
                options: [
                    { label: 'Document Type (ASC)', value: 'type_ASC' },
                    { label: 'Document Type (DESC)', value: 'type_DESC' },
                    { label: 'Payment Status (ASC)', value: 'paymentStatus_ASC' },
                    { label: 'Payment Status (DESC)', value: 'paymentStatus_DESC' },
                    { label: 'Payment Due Date (ASC)', value: 'paymentDueDate_ASC' },
                    { label: 'Payment Due Date (DESC)', value: 'paymentDueDate_DESC' },
                    { label: 'Total Amount Due (ASC)', value: 'totalAmountDue_ASC' },
                    { label: 'Total Amount Due (DESC)', value: 'totalAmountDue_DESC' },
                    { label: 'Amount to Pay (ASC)', value: 'amountToPay_ASC' },
                    { label: 'Amount to Pay (DESC)', value: 'amountToPay_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Invoice Type',
                allowMultiple: true,
                options: [
                    { label: 'Standard Invoice', value: 'STANDARD' },
                    { label: 'Proforma Invoice', value: 'PROFORMA' },
                    { label: 'Credit Note', value: 'CREDIT_NOTE' },
                    { label: 'Debit Note', value: 'DEBIT_NOTE' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'paymentStatus',
                label: 'Payment Status',
                allowMultiple: true,
                options: [
                    { label: 'Paid', value: 'PAYMENT_COMPLETE' },
                    { label: 'Declined', value: 'PAYMENT_DECLINED' },
                    { label: 'Due', value: 'PAYMENT_DUE' },
                    { label: 'Past Due', value: 'PAYMENT_PAST_DUE' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'issuedDate',
                label: 'Issue Date',
                from: {
                    label: 'From',
                },
                to: {
                    label: 'To',
                },
            },
        ],
    },
    noResults: {
        title: 'No Invoices Found',
        description: 'There are no invoices matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    downloadFileName: 'invoice-{id}.pdf',
    downloadButtonAriaDescription: 'Download invoice {id}',
};

export const mapInvoiceListComponent = (_locale: string): CMS.Model.InvoiceListComponent.InvoiceListComponent => {
    return {
        ...MOCK_INVOICE_LIST_COMPONENT,
    };
};

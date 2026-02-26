import { Markdown, Title } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import readme from '../../README.md?raw';

import { InvoiceListPure } from './InvoiceList.client';

const meta = {
    title: 'Blocks/InvoiceList',
    component: InvoiceListPure,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Markdown>{readme}</Markdown>
                </>
            ),
            description: {
                component: readme,
            },
        },
    },
} satisfies Meta<typeof InvoiceListPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0NTg0fQ.wFAXi1DbgN67z8xQcqZdGz9YeAolbim3lecVIzV2rv0',
        locale: 'en',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/login': {
                    en: '/sign-in',
                    de: '/einloggen',
                    pl: '/logowanie',
                },
            },
        },
        __typename: 'InvoiceListBlock',
        id: 'invoice-list-1',
        title: 'Invoices',
        pagination: {
            limit: 5,
            legend: 'of {totalPages} pages',
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
            close: 'Close filters',
            removeFilters: 'Remove filters ({active})',
            items: [
                {
                    __typename: 'FilterSelect',
                    id: 'sort',
                    label: 'Sort',
                    allowMultiple: false,
                    options: [
                        {
                            label: 'Document Type (ascending)',
                            value: 'type_ASC',
                        },
                        {
                            label: 'Document Type (descending)',
                            value: 'type_DESC',
                        },
                        {
                            label: 'Payment Status (ascending)',
                            value: 'paymentStatus_ASC',
                        },
                        {
                            label: 'Payment Status (descending)',
                            value: 'paymentStatus_DESC',
                        },
                        {
                            label: 'Payment Due Date (ascending)',
                            value: 'paymentDueDate_ASC',
                        },
                        {
                            label: 'Payment Due Date (descending)',
                            value: 'paymentDueDate_DESC',
                        },
                        {
                            label: 'Total Amount Due (ascending)',
                            value: 'totalAmountDue_ASC',
                        },
                        {
                            label: 'Total Amount Due (descending)',
                            value: 'totalAmountDue_DESC',
                        },
                        {
                            label: 'Net Amount Due (ascending)',
                            value: 'totalNetAmountDue_ASC',
                        },
                        {
                            label: 'Net Amount Due (descending)',
                            value: 'totalNetAmountDue_DESC',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'type',
                    label: 'Invoice Type',
                    allowMultiple: true,
                    options: [
                        {
                            label: 'Standard',
                            value: 'STANDARD',
                        },
                        {
                            label: 'Proforma',
                            value: 'PROFORMA',
                        },
                        {
                            label: 'Credit Note',
                            value: 'CREDIT_NOTE',
                        },
                        {
                            label: 'Debit Note',
                            value: 'DEBIT_NOTE',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'paymentStatus',
                    label: 'Payment Status',
                    allowMultiple: true,
                    options: [
                        {
                            label: 'Paid',
                            value: 'PAYMENT_COMPLETE',
                        },
                        {
                            label: 'Declined',
                            value: 'PAYMENT_DECLINED',
                        },
                        {
                            label: 'Due',
                            value: 'PAYMENT_DUE',
                        },
                        {
                            label: 'Past Due',
                            value: 'PAYMENT_PAST_DUE',
                        },
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
        invoices: {
            total: 105,
            data: [
                {
                    id: 'INV-HIL-056782',
                    currency: 'EUR',
                    type: {
                        displayValue: 'Standard',
                        value: 'STANDARD',
                    },
                    paymentStatus: {
                        displayValue: 'Due',
                        value: 'PAYMENT_DUE',
                    },
                    totalAmountDue: {
                        value: 1250.5,
                        currency: 'EUR',
                    },
                    totalNetAmountDue: {
                        value: 1016.67,
                        currency: 'EUR',
                    },
                    paymentDueDate: {
                        displayValue: '07/15/2024',
                        value: '2024-07-15',
                    },
                },
                {
                    id: 'INV-HIL-056890',
                    currency: 'EUR',
                    type: {
                        displayValue: 'Standard',
                        value: 'STANDARD',
                    },
                    paymentStatus: {
                        displayValue: 'Paid',
                        value: 'PAYMENT_COMPLETE',
                    },
                    totalAmountDue: {
                        value: 3450.75,
                        currency: 'EUR',
                    },
                    totalNetAmountDue: {
                        value: 2805.49,
                        currency: 'EUR',
                    },
                    paymentDueDate: {
                        displayValue: '06/10/2024',
                        value: '2024-06-10',
                    },
                },
                {
                    id: 'INV-HIL-057123',
                    currency: 'EUR',
                    type: {
                        displayValue: 'Proforma',
                        value: 'PROFORMA',
                    },
                    paymentStatus: {
                        displayValue: 'Due',
                        value: 'PAYMENT_DUE',
                    },
                    totalAmountDue: {
                        value: 780.25,
                        currency: 'EUR',
                    },
                    totalNetAmountDue: {
                        value: 634.35,
                        currency: 'EUR',
                    },
                    paymentDueDate: {
                        displayValue: '07/05/2024',
                        value: '2024-07-05',
                    },
                },
                {
                    id: 'INV-HIL-057456',
                    currency: 'EUR',
                    type: {
                        displayValue: 'Credit Note',
                        value: 'CREDIT_NOTE',
                    },
                    paymentStatus: {
                        displayValue: 'Paid',
                        value: 'PAYMENT_COMPLETE',
                    },
                    totalAmountDue: {
                        value: 0,
                        currency: 'EUR',
                    },
                    totalNetAmountDue: {
                        value: 0,
                        currency: 'EUR',
                    },
                    paymentDueDate: {
                        displayValue: '05/20/2024',
                        value: '2024-05-20',
                    },
                },
                {
                    id: 'INV-HIL-058234',
                    currency: 'EUR',
                    type: {
                        displayValue: 'Standard',
                        value: 'STANDARD',
                    },
                    paymentStatus: {
                        displayValue: 'Past Due',
                        value: 'PAYMENT_PAST_DUE',
                    },
                    totalAmountDue: {
                        value: 5670.3,
                        currency: 'EUR',
                    },
                    totalNetAmountDue: {
                        value: 4610,
                        currency: 'EUR',
                    },
                    paymentDueDate: {
                        displayValue: '06/15/2024',
                        value: '2024-06-15',
                    },
                },
            ],
        },
        table: {
            title: 'List of your invoices',
            data: {
                columns: [
                    {
                        id: 'type',
                        title: 'Invoice Type',
                    },
                    {
                        id: 'id',
                        title: 'Invoice Number',
                    },
                    {
                        id: 'paymentDueDate',
                        title: 'Due Date',
                    },
                    {
                        id: 'paymentStatus',
                        title: 'Payment Status',
                    },
                    {
                        id: 'totalAmountDue',
                        title: 'Gross Amount',
                    },
                    {
                        id: 'totalNetAmountDue',
                        title: 'Net amount',
                    },
                ],
                actions: {
                    title: 'Actions',
                    label: 'Download',
                },
            },
        },
        downloadFileName: 'invoice-{id}.pdf',
        downloadButtonAriaDescription: 'Download invoice {id}',
    },
};

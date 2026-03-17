import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import readme from '../../README.md?raw';

import { OrderListPure } from './OrderList.client';

const meta = {
    title: 'Blocks/OrderList',
    component: OrderListPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof OrderListPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0MjY1fQ.nyOzU0nunQOPmCeQAMzz3EVit6Q0PQTcw1MO7SMePGE',
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
        __typename: 'OrderListBlock',
        id: 'order-list-1',
        title: 'Orders',
        filters: {
            label: 'Filters & Sort',
            title: 'Filters & Sort',
            description: 'Filter your cases by topic, type, or date range to find what you need quickly.',
            submit: 'Apply',
            reset: 'Clear',
            close: 'Close filters',
            removeFilters: 'Remove filters ({active})',
            items: [
                {
                    __typename: 'FilterSelect',
                    id: 'sort',
                    label: 'Sort by',
                    allowMultiple: false,
                    options: [
                        {
                            label: 'Order ID (ascending)',
                            value: 'id_ASC',
                        },
                        {
                            label: 'Order ID (descending)',
                            value: 'id_DESC',
                        },
                        {
                            label: 'Order date (ascending)',
                            value: 'createdAt_ASC',
                        },
                        {
                            label: 'Order date (descending)',
                            value: 'createdAt_DESC',
                        },
                        {
                            label: 'Payment due date (ascending)',
                            value: 'updatedAt_ASC',
                        },
                        {
                            label: 'Payment due date (descending)',
                            value: 'updatedAt_DESC',
                        },
                        {
                            label: 'Order net value (ascending)',
                            value: 'subtotal_ASC',
                        },
                        {
                            label: 'Order net value (descending)',
                            value: 'subtotal_DESC',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'status',
                    label: 'Status',
                    allowMultiple: false,
                    isLeading: false,
                    options: [
                        {
                            label: 'Completed',
                            value: 'COMPLETED',
                        },
                        {
                            label: 'Cancelled',
                            value: 'CANCELLED',
                        },
                        {
                            label: 'Pending',
                            value: 'PENDING',
                        },
                        {
                            label: 'Processing',
                            value: 'PROCESSING',
                        },
                        {
                            label: 'Shipped',
                            value: 'SHIPPED',
                        },
                        {
                            label: 'Delivered',
                            value: 'DELIVERED',
                        },
                        {
                            label: 'Returned',
                            value: 'RETURNED',
                        },
                        {
                            label: 'Training Request',
                            value: 'TRAINING_REQUEST',
                        },
                        {
                            label: 'Unknown',
                            value: 'UNKNOWN',
                        },
                    ],
                },
                {
                    __typename: 'FilterDateRange',
                    id: 'updatedAt',
                    label: 'Period of time',
                    from: {
                        label: 'From',
                    },
                    to: {
                        label: 'To',
                    },
                },
            ],
        },
        subtitle: 'Order history',
        table: {
            columns: [
                {
                    id: 'id',
                    title: 'Order ID',
                },
                {
                    id: 'createdAt',
                    title: 'Order date',
                },
                {
                    id: 'paymentDueDate',
                    title: 'Payment due date',
                },
                {
                    id: 'status',
                    title: 'Status',
                },
                {
                    id: 'subtotal',
                    title: 'Order net value',
                },
            ],
            actions: {
                title: 'Actions',
                label: 'Details',
            },
        },
        noResults: {
            title: "So far, there's nothing here",
            description: '',
        },
        orders: {
            total: 560,
            data: [
                {
                    id: {
                        label: 'ORD-5001521',
                        value: 'ORD-5001521',
                    },
                    status: {
                        label: 'Cancelled',
                        value: 'CANCELLED',
                    },
                    createdAt: {
                        label: '21:14 Today',
                        value: '2025-08-27T19:14:14.519Z',
                    },
                    paymentDueDate: {
                        label: '08/31/2025',
                        value: '2025-08-31T19:14:14.519Z',
                    },
                    subtotal: {
                        value: 1016.847,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-5001521',
                },
                {
                    id: {
                        label: 'ORD-5000025',
                        value: 'ORD-5000025',
                    },
                    status: {
                        label: 'Cancelled',
                        value: 'CANCELLED',
                    },
                    createdAt: {
                        label: '15:02 Today',
                        value: '2025-08-27T13:02:22.338Z',
                    },
                    paymentDueDate: {
                        label: '09/01/2025',
                        value: '2025-09-01T13:02:22.338Z',
                    },
                    subtotal: {
                        value: 71.991,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-5000025',
                },
                {
                    id: {
                        label: 'ORD-5000256',
                        value: 'ORD-5000256',
                    },
                    status: {
                        label: 'Requires Action',
                        value: 'REQUIRES_ACTION',
                    },
                    createdAt: {
                        label: '09:44 Today',
                        value: '2025-08-27T07:44:03.114Z',
                    },
                    paymentDueDate: {
                        label: '09/01/2025',
                        value: '2025-09-01T07:44:03.114Z',
                    },
                    subtotal: {
                        value: 472.32,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-5000256',
                },
                {
                    id: {
                        label: 'ORD-5000400',
                        value: 'ORD-5000400',
                    },
                    status: {
                        label: 'Cancelled',
                        value: 'CANCELLED',
                    },
                    createdAt: {
                        label: '08:04 Today',
                        value: '2025-08-27T06:04:52.193Z',
                    },
                    paymentDueDate: {
                        label: '08/28/2025',
                        value: '2025-08-28T06:04:52.193Z',
                    },
                    subtotal: {
                        value: 773.9459999999999,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-5000400',
                },
                {
                    id: {
                        label: 'ORD-10000036',
                        value: 'ORD-10000036',
                    },
                    status: {
                        label: 'Shipped',
                        value: 'SHIPPED',
                    },
                    createdAt: {
                        label: '01:47 Today',
                        value: '2025-08-26T23:47:01.171Z',
                    },
                    paymentDueDate: {
                        label: '08/30/2025',
                        value: '2025-08-29T23:47:01.171Z',
                    },
                    subtotal: {
                        value: 625.374,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-10000036',
                },
                {
                    id: {
                        label: 'ORD-5000961',
                        value: 'ORD-5000961',
                    },
                    status: {
                        label: 'Shipped',
                        value: 'SHIPPED',
                    },
                    createdAt: {
                        label: 'Yesterday',
                        value: '2025-08-26T05:52:19.362Z',
                    },
                    paymentDueDate: {
                        label: '08/29/2025',
                        value: '2025-08-29T05:52:19.362Z',
                    },
                    subtotal: {
                        value: 107.964,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-5000961',
                },
                {
                    id: {
                        label: 'ORD-5000001',
                        value: 'ORD-5000001',
                    },
                    status: {
                        label: 'Unknown',
                        value: 'UNKNOWN',
                    },
                    createdAt: {
                        label: 'Yesterday',
                        value: '2025-08-26T01:19:43.690Z',
                    },
                    paymentDueDate: {
                        label: '08/30/2025',
                        value: '2025-08-30T01:19:43.690Z',
                    },
                    subtotal: {
                        value: 1115.775,
                        currency: 'EUR',
                    },
                    currency: 'EUR',
                    detailsUrl: '/orders/ORD-5000001',
                },
                {
                    id: {
                        label: 'ORD-5000900',
                        value: 'ORD-5000900',
                    },
                    status: {
                        label: 'Pending',
                        value: 'PENDING',
                    },
                    createdAt: {
                        label: 'Yesterday',
                        value: '2025-08-25T22:38:29.922Z',
                    },
                    paymentDueDate: {
                        label: '08/29/2025',
                        value: '2025-08-28T22:38:29.922Z',
                    },
                    subtotal: {
                        value: 620.865,
                        currency: 'EUR',
                    },
                    currency: 'EUR',
                    detailsUrl: '/orders/ORD-5000900',
                },
                {
                    id: {
                        label: 'ORD-5001089',
                        value: 'ORD-5001089',
                    },
                    status: {
                        label: 'Unknown',
                        value: 'UNKNOWN',
                    },
                    createdAt: {
                        label: '08/25/2025',
                        value: '2025-08-25T18:17:25.118Z',
                    },
                    paymentDueDate: {
                        label: '08/29/2025',
                        value: '2025-08-29T18:17:25.118Z',
                    },
                    subtotal: {
                        value: 512.928,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-5001089',
                },
                {
                    id: {
                        label: 'ORD-5001681',
                        value: 'ORD-5001681',
                    },
                    status: {
                        label: 'Archived',
                        value: 'ARCHIVED',
                    },
                    createdAt: {
                        label: '08/25/2025',
                        value: '2025-08-25T18:13:52.352Z',
                    },
                    paymentDueDate: {
                        label: '08/29/2025',
                        value: '2025-08-29T18:13:52.352Z',
                    },
                    subtotal: {
                        value: 458.95500000000004,
                        currency: 'USD',
                    },
                    currency: 'USD',
                    detailsUrl: '/orders/ORD-5001681',
                },
            ],
        },
        pagination: {
            limit: 10,
            legend: 'of {totalPages} pages',
            prev: 'Previous',
            next: 'Next',
            selectPage: 'Select page',
        },
        labels: {
            showMore: 'Show more',
            clickToSelect: 'Click to select',
        },
        reorderLabel: 'Reorder',
    },
};

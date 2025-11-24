import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TicketListPure } from './TicketList.client';

const meta = {
    title: 'Blocks/TicketList',
    component: TicketListPure,
} satisfies Meta<typeof TicketListPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI1MDg0fQ.NElLzvmxH4I23eh_hySqvZ9E3_vVyLvujXfcxsURfzU',
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
        __typename: 'TicketListBlock',
        id: 'ticket-list-1',
        title: 'Cases',
        subtitle: 'Your recent cases',
        table: {
            columns: [
                {
                    id: 'topic',
                    title: 'Topic',
                },
                {
                    id: 'type',
                    title: 'Case type',
                },
                {
                    id: 'status',
                    title: 'Status',
                },
                {
                    id: 'updatedAt',
                    title: 'Date',
                },
            ],
            actions: {
                title: 'Action',
                label: 'Details',
            },
        },
        pagination: {
            limit: 10,
            legend: 'of {totalPages} pages',
            prev: 'Previous',
            next: 'Next',
            selectPage: 'Select page',
        },
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
                    __typename: 'FilterToggleGroup',
                    id: 'status',
                    label: 'Status',
                    allowMultiple: true,
                    isLeading: true,
                    options: [
                        {
                            label: 'All',
                            value: 'ALL',
                        },
                        {
                            label: 'Under consideration',
                            value: 'OPEN',
                        },
                        {
                            label: 'Resolved',
                            value: 'CLOSED',
                        },
                        {
                            label: 'New response',
                            value: 'IN_PROGRESS',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'sort',
                    label: 'Sort by',
                    allowMultiple: false,
                    options: [
                        {
                            label: 'Topic (ascending)',
                            value: 'topic_ASC',
                        },
                        {
                            label: 'Topic (descending)',
                            value: 'topic_DESC',
                        },
                        {
                            label: 'Type (ascending)',
                            value: 'type_ASC',
                        },
                        {
                            label: 'Type (descending)',
                            value: 'type_DESC',
                        },
                        {
                            label: 'Status (ascending)',
                            value: 'status_ASC',
                        },
                        {
                            label: 'Status (descending)',
                            value: 'status_DESC',
                        },
                        {
                            label: 'Updated (ascending)',
                            value: 'updatedAt_ASC',
                        },
                        {
                            label: 'Updated (descending)',
                            value: 'updatedAt_DESC',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'topic',
                    label: 'Topic',
                    allowMultiple: false,
                    isLeading: false,
                    options: [
                        {
                            label: 'All',
                            value: 'ALL',
                        },
                        {
                            label: 'Tool Repair',
                            value: 'TOOL_REPAIR',
                        },
                        {
                            label: 'Fleet Exchange',
                            value: 'FLEET_EXCHANGE',
                        },
                        {
                            label: 'Calibration',
                            value: 'CALIBRATION',
                        },
                        {
                            label: 'Theft Report',
                            value: 'THEFT_REPORT',
                        },
                        {
                            label: 'Software Support',
                            value: 'SOFTWARE_SUPPORT',
                        },
                        {
                            label: 'Rental Request',
                            value: 'RENTAL_REQUEST',
                        },
                        {
                            label: 'Training Request',
                            value: 'TRAINING_REQUEST',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'type',
                    label: 'Case type',
                    allowMultiple: false,
                    options: [
                        {
                            label: 'Urgent',
                            value: 'URGENT',
                        },
                        {
                            label: 'Standard',
                            value: 'STANDARD',
                        },
                        {
                            label: 'Low Priority',
                            value: 'LOW_PRIORITY',
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
        noResults: {
            title: "So far, there's nothing here",
            description: '',
        },
        tickets: {
            total: 105,
            data: [
                {
                    id: 'EL-465-920-678',
                    topic: {
                        label: 'Tool Repair',
                        value: 'TOOL_REPAIR',
                    },
                    type: {
                        label: 'Urgent',
                        value: 'URGENT',
                    },
                    status: {
                        label: 'Under consideration',
                        value: 'OPEN',
                    },
                    createdAt: '21:04 Today',
                    updatedAt: '21:04 Today',
                    detailsUrl: '/cases/EL-465-920-678',
                },
                {
                    id: 'EL-465-920-677',
                    topic: {
                        label: 'Fleet Exchange',
                        value: 'FLEET_EXCHANGE',
                    },
                    type: {
                        label: 'Standard',
                        value: 'STANDARD',
                    },
                    status: {
                        label: 'Resolved',
                        value: 'CLOSED',
                    },
                    createdAt: 'Yesterday',
                    updatedAt: 'Yesterday',
                    detailsUrl: '/cases/EL-465-920-677',
                },
                {
                    id: 'EL-465-920-676',
                    topic: {
                        label: 'Calibration',
                        value: 'CALIBRATION',
                    },
                    type: {
                        label: 'Standard',
                        value: 'STANDARD',
                    },
                    status: {
                        label: 'New response',
                        value: 'IN_PROGRESS',
                    },
                    createdAt: '12/12/2024',
                    updatedAt: '12/14/2024',
                    detailsUrl: '/cases/EL-465-920-676',
                },
                {
                    id: 'EL-465-920-675',
                    topic: {
                        label: 'Theft Report',
                        value: 'THEFT_REPORT',
                    },
                    type: {
                        label: 'Urgent',
                        value: 'URGENT',
                    },
                    status: {
                        label: 'Under consideration',
                        value: 'OPEN',
                    },
                    createdAt: '12/10/2024',
                    updatedAt: '12/12/2024',
                    detailsUrl: '/cases/EL-465-920-675',
                },
                {
                    id: 'EL-465-920-674',
                    topic: {
                        label: 'Software Support',
                        value: 'SOFTWARE_SUPPORT',
                    },
                    type: {
                        label: 'Standard',
                        value: 'STANDARD',
                    },
                    status: {
                        label: 'Under consideration',
                        value: 'OPEN',
                    },
                    createdAt: '12/10/2024',
                    updatedAt: '12/12/2024',
                    detailsUrl: '/cases/EL-465-920-674',
                },
                {
                    id: 'EL-465-920-573',
                    topic: {
                        label: 'Rental Request',
                        value: 'RENTAL_REQUEST',
                    },
                    type: {
                        label: 'Low Priority',
                        value: 'LOW_PRIORITY',
                    },
                    status: {
                        label: 'Under consideration',
                        value: 'OPEN',
                    },
                    createdAt: '12/16/2024',
                    updatedAt: '12/09/2024',
                    detailsUrl: '/cases/EL-465-920-573',
                },
                {
                    id: 'EL-465-920-572',
                    topic: {
                        label: 'Calibration',
                        value: 'CALIBRATION',
                    },
                    type: {
                        label: 'Urgent',
                        value: 'URGENT',
                    },
                    status: {
                        label: 'Under consideration',
                        value: 'OPEN',
                    },
                    createdAt: '12/13/2024',
                    updatedAt: '12/10/2024',
                    detailsUrl: '/cases/EL-465-920-572',
                },
                {
                    id: 'EL-465-920-571',
                    topic: {
                        label: 'Rental Request',
                        value: 'RENTAL_REQUEST',
                    },
                    type: {
                        label: 'Urgent',
                        value: 'URGENT',
                    },
                    status: {
                        label: 'Under consideration',
                        value: 'OPEN',
                    },
                    createdAt: '12/12/2024',
                    updatedAt: '12/10/2024',
                    detailsUrl: '/cases/EL-465-920-571',
                },
                {
                    id: 'EL-465-920-570',
                    topic: {
                        label: 'Software Support',
                        value: 'SOFTWARE_SUPPORT',
                    },
                    type: {
                        label: 'Standard',
                        value: 'STANDARD',
                    },
                    status: {
                        label: 'New response',
                        value: 'IN_PROGRESS',
                    },
                    createdAt: '12/28/2024',
                    updatedAt: '12/24/2024',
                    detailsUrl: '/cases/EL-465-920-570',
                },
                {
                    id: 'EL-465-920-569',
                    topic: {
                        label: 'Rental Request',
                        value: 'RENTAL_REQUEST',
                    },
                    type: {
                        label: 'Low Priority',
                        value: 'LOW_PRIORITY',
                    },
                    status: {
                        label: 'New response',
                        value: 'IN_PROGRESS',
                    },
                    createdAt: '12/12/2024',
                    updatedAt: '12/12/2024',
                    detailsUrl: '/cases/EL-465-920-569',
                },
            ],
        },
        forms: [
            {
                label: 'Submit complaint',
                url: '/submit-complaint',
                icon: 'MessageSquareWarning',
            },
            {
                label: 'Request device maintenance',
                url: '/request-device-maintenance',
                icon: 'Hammer',
            },
            {
                label: 'Contact us',
                icon: 'ClipboardPenLine',
                url: '/contact-us',
            },
        ],
        labels: {
            showMore: 'Show more',
            clickToSelect: 'Click to select',
        },
    },
};

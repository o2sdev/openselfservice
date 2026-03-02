import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import readme from '../../README.md?raw';

import { NotificationListPure } from './NotificationList.client';

const meta = {
    title: 'Blocks/NotificationList',
    component: NotificationListPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof NotificationListPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0MTM2fQ.prL2fGs0RuMdNKQ6bLW8feB1mJ8_Dd8k3sKr0mAPPD0',
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
        __typename: 'NotificationListBlock',
        id: 'notification-list-1',
        title: 'Notifications',
        subtitle: 'List of your notifications',
        table: {
            columns: [
                {
                    id: 'status',
                    title: 'Status',
                },
                {
                    id: 'title',
                    title: 'Title',
                },
                {
                    id: 'type',
                    title: 'Type',
                },
                {
                    id: 'priority',
                    title: 'Priority',
                },
                {
                    id: 'createdAt',
                    title: 'Date',
                },
            ],
            actions: {
                title: 'Actions',
                label: 'View details',
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
            label: 'Filter & Sort',
            title: 'Filter & Sort notifications',
            description: 'Use filters to find specific notifications',
            submit: 'Apply',
            reset: 'Clear',
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
                            label: 'Priority (ascending)',
                            value: 'priority_ASC',
                        },
                        {
                            label: 'Priority (descending)',
                            value: 'priority_DESC',
                        },
                        {
                            label: 'Date (ascending)',
                            value: 'createdAt_ASC',
                        },
                        {
                            label: 'Date (descending)',
                            value: 'createdAt_DESC',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'type',
                    label: 'Type',
                    allowMultiple: true,
                    options: [
                        {
                            label: 'General notification',
                            value: 'GENERAL_NOTIFICATION',
                        },
                        {
                            label: 'Ticket update',
                            value: 'TICKET_UPDATE',
                        },
                        {
                            label: 'Special offer',
                            value: 'TYPE_1',
                        },
                        {
                            label: 'Changes',
                            value: 'TYPE_2',
                        },
                        {
                            label: 'Important news',
                            value: 'TYPE_3',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'status',
                    label: 'Status',
                    allowMultiple: true,
                    options: [
                        {
                            label: 'Not viewed',
                            value: 'UNVIEWED',
                        },
                        {
                            label: 'Viewed',
                            value: 'VIEWED',
                        },
                        {
                            label: 'Read',
                            value: 'READ',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'priority',
                    label: 'Priority',
                    allowMultiple: true,
                    options: [
                        {
                            label: 'Low Priority',
                            value: 'low',
                        },
                        {
                            label: 'Medium Priority',
                            value: 'medium',
                        },
                        {
                            label: 'High Priority',
                            value: 'high',
                        },
                        {
                            label: 'Critical Priority',
                            value: 'critical',
                        },
                    ],
                },
                {
                    __typename: 'FilterDateRange',
                    id: 'createdAt',
                    label: 'Date',
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
            title: 'No notifications found',
            description: 'There are no notifications matching your criteria',
        },
        notifications: {
            total: 105,
            data: [
                {
                    id: 'NOT-123-456',
                    title: 'TE 70-ATC Tool Repair Completed',
                    type: {
                        label: 'Ticket update',
                        value: 'TICKET_UPDATE',
                    },
                    status: {
                        label: 'Not viewed',
                        value: 'UNVIEWED',
                    },
                    priority: {
                        label: 'High',
                        value: 'HIGH',
                    },
                    createdAt: '21:48 Today',
                    updatedAt: '21:48 Today',
                    detailsUrl: '/notifications/NOT-123-456',
                },
                {
                    id: 'NOT-123-457',
                    title: 'Scheduled Fleet Equipment Exchange',
                    type: {
                        label: 'General',
                        value: 'GENERAL_NOTIFICATION',
                    },
                    status: {
                        label: 'Not viewed',
                        value: 'UNVIEWED',
                    },
                    priority: {
                        label: 'Medium',
                        value: 'MEDIUM',
                    },
                    createdAt: 'Yesterday',
                    updatedAt: 'Yesterday',
                    detailsUrl: '/notifications/NOT-123-457',
                },
                {
                    id: 'NOT-123-458',
                    title: 'PD-S Laser Measurement Calibration Update',
                    type: {
                        label: 'General',
                        value: 'GENERAL_NOTIFICATION',
                    },
                    status: {
                        label: 'Read',
                        value: 'READ',
                    },
                    priority: {
                        label: 'Low',
                        value: 'LOW',
                    },
                    createdAt: '03/17/2024',
                    updatedAt: '03/17/2024',
                    detailsUrl: '/notifications/NOT-123-458',
                },
                {
                    id: 'NOT-123-459',
                    title: 'Fleet Tool Theft Report Received',
                    type: {
                        label: 'General',
                        value: 'GENERAL_NOTIFICATION',
                    },
                    status: {
                        label: 'Not viewed',
                        value: 'UNVIEWED',
                    },
                    priority: {
                        label: 'Critical',
                        value: 'CRITICAL',
                    },
                    createdAt: '03/16/2024',
                    updatedAt: '03/16/2024',
                    detailsUrl: '/notifications/NOT-123-459',
                },
                {
                    id: 'NOT-123-460',
                    title: 'PROFIS License Issue Resolution',
                    type: {
                        label: 'General',
                        value: 'GENERAL_NOTIFICATION',
                    },
                    status: {
                        label: 'Read',
                        value: 'READ',
                    },
                    priority: {
                        label: 'High',
                        value: 'HIGH',
                    },
                    createdAt: '03/15/2024',
                    updatedAt: '03/15/2024',
                    detailsUrl: '/notifications/NOT-123-460',
                },
                {
                    id: 'NOT-123-469',
                    title: 'Cost Center Change Confirmation',
                    type: {
                        label: 'Special offer',
                        value: 'TYPE_1',
                    },
                    status: {
                        label: 'Viewed',
                        value: 'VIEWED',
                    },
                    priority: {
                        label: 'Medium',
                        value: 'MEDIUM',
                    },
                    createdAt: '03/19/2024',
                    updatedAt: '03/29/2024',
                    detailsUrl: '/notifications/NOT-123-469',
                },
                {
                    id: 'NOT-123-470',
                    title: 'Fleet Recycling Report for Q2',
                    type: {
                        label: 'Special offer',
                        value: 'TYPE_1',
                    },
                    status: {
                        label: 'Not viewed',
                        value: 'UNVIEWED',
                    },
                    priority: {
                        label: 'Medium',
                        value: 'MEDIUM',
                    },
                    createdAt: '03/21/2024',
                    updatedAt: '03/26/2024',
                    detailsUrl: '/notifications/NOT-123-470',
                },
                {
                    id: 'NOT-123-471',
                    title: 'Fleet Recycling Report for Q2',
                    type: {
                        label: 'Special offer',
                        value: 'TYPE_1',
                    },
                    status: {
                        label: 'Not viewed',
                        value: 'UNVIEWED',
                    },
                    priority: {
                        label: 'Critical',
                        value: 'CRITICAL',
                    },
                    createdAt: '03/06/2024',
                    updatedAt: '03/06/2024',
                    detailsUrl: '/notifications/NOT-123-471',
                },
                {
                    id: 'NOT-123-472',
                    title: 'New Fleet Labels Available',
                    type: {
                        label: 'Special offer',
                        value: 'TYPE_1',
                    },
                    status: {
                        label: 'Viewed',
                        value: 'VIEWED',
                    },
                    priority: {
                        label: 'Critical',
                        value: 'CRITICAL',
                    },
                    createdAt: '03/24/2024',
                    updatedAt: '03/12/2024',
                    detailsUrl: '/notifications/NOT-123-472',
                },
                {
                    id: 'NOT-123-473',
                    title: 'Software Update Available',
                    type: {
                        label: 'Special offer',
                        value: 'TYPE_1',
                    },
                    status: {
                        label: 'Viewed',
                        value: 'VIEWED',
                    },
                    priority: {
                        label: 'Critical',
                        value: 'CRITICAL',
                    },
                    createdAt: '03/17/2024',
                    updatedAt: '03/27/2024',
                    detailsUrl: '/notifications/NOT-123-473',
                },
            ],
        },
    },
};

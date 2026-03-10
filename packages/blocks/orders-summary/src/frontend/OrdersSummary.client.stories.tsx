import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import readme from '../../README.md?raw';

import { OrdersSummaryPure } from './OrdersSummary.client';

const meta = {
    title: 'Blocks/OrdersSummary',
    component: OrdersSummaryPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof OrdersSummaryPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0MjY1fQ.nyOzU0nunQOPmCeQAMzz3EVit6Q0PQTcw1MO7SMePGE',
        __typename: 'OrdersSummaryBlock',
        id: 'orders-summary-1',
        title: 'At a glance',
        subtitle: 'Compared to the same period a year before',
        totalValue: {
            title: 'Total order value',
            value: {
                value: 80019.11700000003,
                currency: 'USD',
            },
            trend: -4,
            icon: 'Coins',
        },
        averageValue: {
            title: 'Avg. order value',
            value: {
                value: 769.4145865384618,
                currency: 'USD',
            },
            trend: 1,
            icon: 'ShoppingCart',
        },
        averageNumber: {
            title: 'Avg. number of orders',
            value: 104,
            trend: -5,
            icon: 'Package',
        },
        chart: {
            title: 'Number of orders',
            data: [
                {
                    label: 'Mar',
                    prev: 17,
                    current: 10,
                },
                {
                    label: 'Apr',
                    prev: 21,
                    current: 6,
                },
                {
                    label: 'May',
                    prev: 16,
                    current: 10,
                },
                {
                    label: 'Jun',
                    prev: 17,
                    current: 13,
                },
                {
                    label: 'Jul',
                    prev: 16,
                    current: 16,
                },
                {
                    label: 'Aug',
                    prev: 21,
                    current: 49,
                },
            ],
            legend: {
                prev: 'Previous period',
                current: 'Current period',
            },
            showChart: true,
        },
        noResults: {
            title: "So far, there's nothing here",
            description: '',
        },
        ranges: [
            {
                label: '1 Wk',
                value: 7,
                type: 'day',
            },
            {
                label: '1 Mo',
                value: 30,
                type: 'day',
            },
            {
                label: '6 Mo',
                value: 6,
                type: 'month',
                isDefault: true,
            },
        ],
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
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs';

import { PaymentsSummaryPure } from './PaymentsSummary.client';

const meta = {
    title: 'Blocks/PaymentsSummary',
    component: PaymentsSummaryPure,
} satisfies Meta<typeof PaymentsSummaryPure>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseRouting = {
    locales: ['en', 'de', 'pl'],
    defaultLocale: 'en',
    pathnames: {
        '/login': {
            en: '/sign-in',
            de: '/einloggen',
            pl: '/logowanie',
        },
    },
};

const baseAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0NTg0fQ.wFAXi1DbgN67z8xQcqZdGz9YeAolbim3lecVIzV2rv0';

export const Default: Story = {
    args: {
        routing: baseRouting,
        __typename: 'PaymentsSummaryBlock',
        id: 'payments-summary-1',
        currency: 'EUR',
        layout: 'vertical',
        overdue: {
            title: 'Overdue',
            link: {
                label: 'Pay online',
                icon: 'ArrowUpRight',
                url: '',
            },
            description: '599 days overdue',
            value: {
                value: 5544.828051951577,
                currency: 'EUR',
            },
            isOverdue: true,
            icon: 'ThumbsUp',
        },
        toBePaid: {
            title: 'To be paid',
            link: {
                label: 'Pay online',
                icon: 'ArrowUpRight',
                url: '',
            },
            description: 'New and overdue',
            value: {
                value: 1234.56,
                currency: 'EUR',
            },
            icon: 'CreditCard',
        },
        accessToken: baseAccessToken,
        locale: 'en',
    },
};

export const WithChart: Story = {
    args: {
        routing: baseRouting,
        __typename: 'PaymentsSummaryBlock',
        id: 'payments-summary-7',
        currency: 'EUR',
        layout: 'vertical',
        overdue: {
            title: 'Overdue',
            link: {
                label: 'Pay online',
                icon: 'ArrowUpRight',
                url: '',
            },
            description: '599 days overdue',
            value: {
                value: 5544.828051951577,
                currency: 'EUR',
            },
            isOverdue: true,
            icon: 'ThumbsUp',
        },
        toBePaid: {
            title: 'To be paid',
            link: {
                label: 'Pay online',
                icon: 'ArrowUpRight',
                url: '',
            },
            description: 'New and overdue',
            value: {
                value: 1234.56,
                currency: 'EUR',
            },
            icon: 'CreditCard',
        },
        chart: {
            title: '6-months history',
            labels: {
                topSegment: 'Overdue',
                middleSegment: 'To be paid',
                bottomSegment: 'Paid',
                total: 'Total',
            },
            chartData: [
                {
                    month: 'Jan',
                    topSegment: '100.00',
                    middleSegment: '200.00',
                    bottomSegment: '300.00',
                    total: '600.00',
                },
                {
                    month: 'Feb',
                    topSegment: '150.00',
                    middleSegment: '250.00',
                    bottomSegment: '350.00',
                    total: '750.00',
                },
                {
                    month: 'Mar',
                    topSegment: '120.00',
                    middleSegment: '220.00',
                    bottomSegment: '320.00',
                    total: '660.00',
                },
                {
                    month: 'Apr',
                    topSegment: '180.00',
                    middleSegment: '280.00',
                    bottomSegment: '380.00',
                    total: '840.00',
                },
                {
                    month: 'May',
                    topSegment: '200.00',
                    middleSegment: '300.00',
                    bottomSegment: '400.00',
                    total: '900.00',
                },
                {
                    month: 'Jun',
                    topSegment: '160.00',
                    middleSegment: '260.00',
                    bottomSegment: '360.00',
                    total: '780.00',
                },
            ],
            showChart: true,
            monthsToShow: 6,
        },
        accessToken: baseAccessToken,
        locale: 'en',
    },
};

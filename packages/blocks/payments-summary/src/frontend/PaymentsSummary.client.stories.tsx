import type { Meta, StoryObj } from '@storybook/nextjs';

import { PaymentsSummaryPure } from './PaymentsSummary.client';

const meta = {
    title: 'Blocks/PaymentsSummary',
    component: PaymentsSummaryPure,
} satisfies Meta<typeof PaymentsSummaryPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
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
        __typename: 'PaymentsSummaryBlock',
        id: 'payments-summary-1',
        currency: 'EUR',
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
            icon: 'CreditCard',
            description: 'New and overdue',
            link: {
                label: 'Pay online',
                icon: 'ArrowUpRight',
                url: '',
            },
            value: {
                value: 1674.6002166383103,
                currency: 'EUR',
            },
        },
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0NTg0fQ.wFAXi1DbgN67z8xQcqZdGz9YeAolbim3lecVIzV2rv0',
        locale: 'en',
    },
};

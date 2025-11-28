import type { Meta, StoryObj } from '@storybook/nextjs';

import { TicketSummaryPure } from './TicketSummary.client';

const meta = {
    title: 'Blocks/TicketSummary',
    component: TicketSummaryPure,
} satisfies Meta<typeof TicketSummaryPure>;

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
        __typename: 'TicketSummaryBlock',
        id: 'ticket-summary-1',
        layout: 'horizontal',
        infoCards: [
            {
                title: 'Under consideration',
                icon: 'Clock',
                value: 35,
                description: 'Tickets under consideration',
                variant: 'OPEN',
            },
            {
                title: 'New response',
                icon: 'AlertCircle',
                value: 36,
                description: 'New response tickets',
                variant: 'IN_PROGRESS',
            },
            {
                title: 'Resolved',
                icon: 'CheckCircle',
                value: 34,
                description: 'Resolved tickets',
                variant: 'CLOSED',
            },
        ],
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSWiaWF0IjoxNzU2MzI0NTg0fQ.wFAXi1DbgN67z8xQcqZdGz9YeAolbim3lecVIzV2rv0',
        locale: 'en',
    },
};

export const Vertical: Story = {
    args: {
        ...Default.args,
        layout: 'vertical',
    },
};

export const SingleStatus: Story = {
    args: {
        ...Default.args,
        infoCards: [
            {
                title: 'New response',
                icon: 'AlertCircle',
                value: 36,
                description: 'New response tickets',
                variant: 'IN_PROGRESS',
            },
        ],
    },
};

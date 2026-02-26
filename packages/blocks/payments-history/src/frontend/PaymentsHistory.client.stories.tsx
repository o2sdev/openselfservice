import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import readme from '../../README.md?raw';

import { PaymentsHistoryPure } from './PaymentsHistory.client';

const meta = {
    title: 'Blocks/PaymentsHistory',
    component: PaymentsHistoryPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof PaymentsHistoryPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        __typename: 'PaymentsHistoryBlock',
        id: 'payments-history-1',
        title: '6-months history',
        labels: {
            topSegment: 'Overdue',
            middleSegment: 'To be paid',
            bottomSegment: 'Paid',
            total: 'Total',
        },
        currency: 'EUR',
        chartData: [
            {
                month: 'Mar',
                topSegment: '33.80',
                middleSegment: '0.00',
                bottomSegment: '91.62',
                total: '125.42',
            },
            {
                month: 'Apr',
                topSegment: '21.12',
                middleSegment: '0.00',
                bottomSegment: '168.37',
                total: '189.49',
            },
            {
                month: 'May',
                topSegment: '0.00',
                middleSegment: '100.65',
                bottomSegment: '370.22',
                total: '470.87',
            },
            {
                month: 'Jun',
                topSegment: '96.70',
                middleSegment: '0.00',
                bottomSegment: '67.74',
                total: '164.44',
            },
            {
                month: 'Jul',
                topSegment: '115.35',
                middleSegment: '116.69',
                bottomSegment: '218.36',
                total: '450.39',
            },
            {
                month: 'Aug',
                topSegment: '45.61',
                middleSegment: '87.44',
                bottomSegment: '18.27',
                total: '151.33',
            },
        ],
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0NTg0fQ.wFAXi1DbgN67z8xQcqZdGz9YeAolbim3lecVIzV2rv0',
        locale: 'en',
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs';

import { NotificationDetailsPure } from './NotificationDetails.client';

const meta = {
    title: 'Blocks/NotificationDetails',
    component: NotificationDetailsPure,
} satisfies Meta<typeof NotificationDetailsPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        notificationId: 'NOT-123-456',
        __typename: 'NotificationDetailsBlock',
        id: 'notification-details-1',
        data: {
            customField: 'someNewField',
            id: {
                label: 'NOT-123-456',
                title: 'ID',
                value: 'NOT-123-456',
            },
            title: {
                value: 'TE 70-ATC Tool Repair Completed',
                title: 'Title',
                label: 'TE 70-ATC Tool Repair Completed',
            },
            content: {
                value: 'Your TE 70-ATC/AVR device has been repaired and is ready for pickup. Please visit <a href="/cases/EL-465-920-678">ticket details</a> to see more information.',
                title: 'Content',
                label: 'Your TE 70-ATC/AVR device has been repaired and is ready for pickup. Please visit <a href="/cases/EL-465-920-678">ticket details</a> to see more information.',
            },
            type: {
                value: 'TICKET_UPDATE',
                title: 'Type',
                label: 'Ticket update',
            },
            status: {
                value: 'UNVIEWED',
                title: 'Status',
                label: 'Not viewed',
            },
            priority: {
                value: 'HIGH',
                title: 'Priority',
                label: 'HIGH',
            },
            createdAt: '21:46 Today',
            updatedAt: '21:46 Today',
        },
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0MDI2fQ.8dJ7xWRHsfYD-Y8RL8p47n36Bhe86g88PumQ50Dj4Gc',
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

import type { Meta, StoryObj } from '@storybook/nextjs';

import { QuickLinksPure } from './QuickLinks.client';

const meta = {
    title: 'Blocks/QuickLinks',
    component: QuickLinksPure,
} satisfies Meta<typeof QuickLinksPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0NzQ2fQ.czG8TMlxf72BvxnMLz8xpjQ7mpYdS40HSh6eGiSKeI4',
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
        __typename: 'QuickLinksBlock',
        id: 'quick-links-1',
        title: 'Find it in an instant',
        description: 'Quick access to our most popular tools and services to help you get what you need without delay.',
        items: [
            {
                label: 'Find a retailer',
                url: '/contact-us',
                description:
                    'Locate authorized retailers and service centers near you for in-person assistance, product demos, and expert advice.',
                icon: 'MapPin',
            },
            {
                label: 'Online repair',
                url: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
                description:
                    'Diagnose and schedule repairs for your tools online. Get quick service estimates and track repair status in real-time.',
                icon: 'Drill',
            },
            {
                label: 'View Invoices',
                url: '/invoices',
                description:
                    'Access and download your invoices and payment history. Keep track of all your transactions in one place.',
                icon: 'CreditCard',
            },
            {
                label: 'View Orders',
                url: '/orders',
                description:
                    'Track and manage your orders. View order history, check status, and access order details in one place.',
                icon: 'ShoppingBag',
            },
        ],
    },
};

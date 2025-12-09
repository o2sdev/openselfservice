import type { Meta, StoryObj } from '@storybook/nextjs';

import { DocumentListPure } from './DocumentList.client';

const meta = {
    title: 'Blocks/DocumentList',
    component: DocumentListPure,
} satisfies Meta<typeof DocumentListPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzYzNDQyfQ.1JT9Sjz_ch1LTFrqqQXJWmhkEWXRBok_8YkFbJFhxgk',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'DocumentListBlock',
        id: 'document-list-1',
        title: 'Document List',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        documents: [
            {
                title: 'Tariff of commissions and fees for natural persons lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum',
                file: {
                    url: 'https://www.google.com',
                    alt: 'Tariff of commissions and fees for natural persons',
                },
                icon: 'FileText',
            },
            {
                title: 'Tariff of commissions and fees for natural persons lorem ipsum',
                file: {
                    url: 'https://www.google.com',
                    alt: 'Tariff of commissions and fees for natural persons',
                },
                icon: 'FileText',
            },
            {
                title: 'Tariff of commissions and fees for natural persons lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum',
                file: {
                    url: 'https://www.google.com',
                    alt: 'Tariff of commissions and fees for natural persons',
                },
                icon: 'FileText',
            },
            {
                title: 'Tariff of commissions and fees for natural persons',
                file: {
                    url: 'https://www.google.com',
                    alt: 'Tariff of commissions and fees for natural persons',
                },
                icon: 'FileText',
            },
        ],
    },
};

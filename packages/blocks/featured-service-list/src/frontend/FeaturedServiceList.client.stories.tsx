import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import readme from '../../README.md?raw';

import { FeaturedServiceListPure } from './FeaturedServiceList.client';

const meta = {
    title: 'Blocks/FeaturedServiceList',
    component: FeaturedServiceListPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof FeaturedServiceListPure>;

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
        __typename: 'FeaturedServiceListBlock',
        id: 'featured-service-list-1',
        title: 'Enhance your services with these',
        pagination: {
            limit: 3,
            legend: 'of {totalPages} pages',
            prev: 'Previous',
            next: 'Next',
            selectPage: 'Select page',
        },
        noResults: {
            title: 'No Services Found',
            description: 'There are no services matching your criteria',
        },
        detailsLabel: 'Details',
        detailsUrl: '/services/{id}',
        labels: {
            on: 'On',
            off: 'Off',
        },
        services: {
            data: [
                {
                    id: 'SRV-001',
                    name: 'WeldGuard Safety',
                    description: 'WeldGuard Safety - Protective Solutions for Welding Environments',
                    shortDescription: 'WeldGuard Safety - Protective Solutions for Welding Environments',
                    price: {
                        value: 79.83,
                        currency: 'USD',
                    },
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                        width: 640,
                        height: 656,
                        alt: 'WeldGuard Safety',
                    },
                    link: 'https://example.com/products/weldguard-safety',
                    tags: [
                        {
                            label: 'New',
                            variant: 'secondary',
                        },
                    ],
                },
                {
                    id: 'SRV-002',
                    name: 'MaxFlow Air Systems',
                    description: 'MaxFlow Air Systems - Industrial Pneumatics Maintenance',
                    shortDescription: 'MaxFlow Air Systems - Industrial Pneumatics Maintenance',
                    price: {
                        value: 79.83,
                        currency: 'USD',
                    },
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                        width: 640,
                        height: 656,
                        alt: 'MaxFlow Air Systems',
                    },
                    link: 'https://example.com/products/maxflow-air-systems',
                    tags: [
                        {
                            label: 'New',
                            variant: 'secondary',
                        },
                    ],
                },
                {
                    id: 'SRV-003',
                    name: 'RapidFix Repair',
                    description: 'RapidFix Repair - Fast & Reliable Industrial Tool Repairs',
                    shortDescription: 'RapidFix Repair - Fast & Reliable Industrial Tool Repairs',
                    price: {
                        value: 79.83,
                        currency: 'USD',
                    },
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                        width: 640,
                        height: 656,
                        alt: 'RapidFix Repair',
                    },
                    link: 'https://example.com/products/rapidfix-repair',
                    tags: [
                        {
                            label: 'New',
                            variant: 'secondary',
                        },
                    ],
                },
            ],
            total: 3,
        },
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzIzNDMwfQ.ZUPeaS76DpibwDJb4O7ZABbzIHYdlh-0ptLibRtFYJw',
        locale: 'en',
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ServiceDetailsPure } from './ServiceDetails.client';

const meta = {
    title: 'Blocks/ServiceDetails',
    component: ServiceDetailsPure,
} satisfies Meta<typeof ServiceDetailsPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        __typename: 'ServiceDetailsBlock',
        id: 'service-details-1',
        data: {
            price: {
                title: 'Price',
                value: {
                    value: 19.99,
                    currency: 'USD',
                },
            },
            type: {
                label: 'Virtual',
                title: 'Type',
                value: 'VIRTUAL',
            },
            status: {
                label: 'Active',
                title: 'Status',
                value: 'ACTIVE',
            },
            category: {
                label: 'Training',
                title: 'Category',
                value: 'TRAINING',
            },
            startDate: {
                title: 'Start date',
                value: '01/01/2024',
            },
            endDate: {
                title: 'End date',
                value: '12/31/2024',
            },
            name: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
            details: 'Service details',
            description:
                '<ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li></ul>',
            labels: {
                settings: 'Settings',
                renew: 'Renew',
            },
        },
        serviceId: 'SRV-002',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0ODM1fQ.Li89mxO1mbP2IC6t3R1079VsVq1PIBTFHws2QgtosPs',
        locale: 'en',
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

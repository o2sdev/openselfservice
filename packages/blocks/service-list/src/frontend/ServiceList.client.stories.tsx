import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ServiceListPure } from './ServiceList.client';

const meta = {
    title: 'Blocks/ServiceList',
    component: ServiceListPure,
} satisfies Meta<typeof ServiceListPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0ODI5fQ.i-ofzMm1drdeK2_-ORFrv4YZZwadD_P-URxF_cMlkV4',
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
        __typename: 'ServiceListBlock',
        id: 'service-list-1',
        title: 'Services',
        subtitle: 'List of your services',
        detailsLabel: 'Details',
        pagination: {
            limit: 6,
            legend: 'of {totalPages} pages',
            prev: 'Previous',
            next: 'Next',
            selectPage: 'Select page',
        },
        filters: {
            label: 'Filter',
            title: 'Filter Services',
            description: 'Use filters to find specific services',
            submit: 'Apply Filters',
            reset: 'Reset Filters',
            removeFilters: 'Remove filters ({active})',
            close: 'Close filters',
            items: [
                {
                    __typename: 'FilterSelect',
                    id: 'sort',
                    label: 'Sort by',
                    allowMultiple: false,
                    options: [
                        {
                            label: 'Service number ascending',
                            value: 'id_ASC',
                        },
                        {
                            label: 'Service number descending',
                            value: 'id_DESC',
                        },
                        {
                            label: 'Service name ascending',
                            value: 'name_ASC',
                        },
                        {
                            label: 'Service name descending',
                            value: 'name_DESC',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'type',
                    label: 'Product Type',
                    allowMultiple: true,
                    options: [
                        {
                            label: 'Physical',
                            value: 'PHYSICAL',
                        },
                        {
                            label: 'Virtual',
                            value: 'VIRTUAL',
                        },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'category',
                    label: 'Product Category',
                    allowMultiple: true,
                    options: [
                        {
                            label: 'Software',
                            value: 'SOFTWARE',
                        },
                        {
                            label: 'Tools',
                            value: 'TOOLS',
                        },
                        {
                            label: 'Hardware',
                            value: 'HARDWARE',
                        },
                        {
                            label: 'Measurement',
                            value: 'MEASUREMENT',
                        },
                        {
                            label: 'Cloud',
                            value: 'CLOUD',
                        },
                        {
                            label: 'Support',
                            value: 'SUPPORT',
                        },
                        {
                            label: 'Subscription',
                            value: 'SUBSCRIPTION',
                        },
                        {
                            label: 'Warranty',
                            value: 'WARRANTY',
                        },
                        {
                            label: 'Maintenance',
                            value: 'MAINTENANCE',
                        },
                        {
                            label: 'Training',
                            value: 'TRAINING',
                        },
                    ],
                },
            ],
        },
        noResults: {
            title: 'No Services Found',
            description: 'There are no services matching your criteria',
        },
        services: {
            total: 4,
            data: [
                {
                    __typename: 'Service',
                    id: 'SRV-003',
                    billingAccountId: 'BA-004',
                    detailsUrl: '/services/SRV-003',
                    contract: {
                        id: 'CNT-003',
                        type: {
                            value: 'MAINTENANCE',
                            label: 'MAINTENANCE',
                        },
                        status: {
                            value: 'ACTIVE',
                            label: 'Active',
                        },
                        startDate: '01/01/2024',
                        endDate: '12/31/2024',
                        price: {
                            value: 88,
                            currency: 'USD',
                            period: 'mo',
                        },
                    },
                    product: {
                        id: 'PRD-011',
                        name: 'PowerCharge Solutions™ – Battery & Charger Management for Manufacturing',
                        type: {
                            value: 'VIRTUAL',
                            label: 'Virtual',
                        },
                        category: {
                            value: 'MAINTENANCE',
                            label: 'MAINTENANCE',
                        },
                        description:
                            '<ul><li>Smart Diagnostics</li><li>Sustainable Recycling</li><li>On-Demand Replacements</li></ul>',
                        shortDescription:
                            '<ul><li>Smart Diagnostics</li><li>Sustainable Recycling</li><li>On-Demand Replacements</li></ul>',
                        image: {
                            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                            width: 640,
                            height: 656,
                            alt: 'PowerCharge Solutions™ – Battery & Charger Management for Manufacturing',
                        },
                        link: 'https://example.com/services/powercharge-solutions',
                        tags: [
                            {
                                label: 'Promo',
                                variant: 'destructive',
                            },
                            {
                                label: 'New',
                                variant: 'secondary',
                            },
                        ],
                    },
                },
                {
                    __typename: 'Service',
                    id: 'SRV-002',
                    billingAccountId: 'BA-003',
                    detailsUrl: '/services/SRV-002',
                    contract: {
                        id: 'CNT-002',
                        type: {
                            value: 'TRAINING',
                            label: 'TRAINING',
                        },
                        status: {
                            value: 'ACTIVE',
                            label: 'Active',
                        },
                        startDate: '01/01/2024',
                        endDate: '12/31/2024',
                        price: {
                            value: 67,
                            currency: 'USD',
                        },
                    },
                    product: {
                        id: 'PRD-010',
                        name: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
                        type: {
                            value: 'VIRTUAL',
                            label: 'Virtual',
                        },
                        category: {
                            value: 'TRAINING',
                            label: 'TRAINING',
                        },
                        description:
                            '<ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li></ul>',
                        shortDescription:
                            '<ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li></ul>',
                        image: {
                            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-calibration.jpg',
                            width: 640,
                            height: 656,
                            alt: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
                        },
                        link: 'https://example.com/services/training',
                        tags: [
                            {
                                label: 'Promo',
                                variant: 'destructive',
                            },
                            {
                                label: 'New',
                                variant: 'secondary',
                            },
                        ],
                    },
                },
                {
                    __typename: 'Service',
                    id: 'SRV-001',
                    billingAccountId: 'BA-003',
                    detailsUrl: '/services/SRV-001',
                    contract: {
                        id: 'CNT-001',
                        type: {
                            value: 'SUPPORT',
                            label: 'SUPPORT',
                        },
                        status: {
                            value: 'ACTIVE',
                            label: 'Active',
                        },
                        startDate: '01/01/2024',
                        endDate: '12/31/2024',
                        price: {
                            value: 89.9,
                            currency: 'USD',
                            period: 'ye',
                        },
                    },
                    product: {
                        id: 'PRD-009',
                        name: 'RentPro Industrial™ – Flexible Equipment Rental Solutions',
                        type: {
                            value: 'VIRTUAL',
                            label: 'Virtual',
                        },
                        category: {
                            value: 'RENTAL',
                            label: 'RENTAL',
                        },
                        description:
                            '<ul><li>Short & Long-Term Rentals</li><li>Wide Equipment Selection</li><li>Maintenance & Support Included</li></ul>',
                        shortDescription:
                            '<ul><li>Short & Long-Term Rentals</li><li>Wide Equipment Selection</li><li>Maintenance & Support Included</li></ul>',
                        image: {
                            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-rental.jpg',
                            width: 640,
                            height: 656,
                            alt: 'RentPro Industrial™ – Flexible Equipment Rental Solutions',
                        },
                        link: 'https://example.com/services/rentpro-industrial',
                        tags: [
                            {
                                label: 'New',
                                variant: 'secondary',
                            },
                        ],
                    },
                },
                {
                    __typename: 'Service',
                    id: 'SRV-007',
                    billingAccountId: 'BA-006',
                    detailsUrl: '/services/SRV-007',
                    contract: {
                        id: 'CNT-007',
                        type: {
                            value: 'RENTAL',
                            label: 'RENTAL',
                        },
                        status: {
                            value: 'INACTIVE',
                            label: 'Inactive',
                        },
                        startDate: '01/01/2024',
                        endDate: '12/31/2024',
                        price: {
                            value: 78.9,
                            currency: 'USD',
                            period: 'mo',
                        },
                    },
                    product: {
                        id: 'PRD-006',
                        name: 'Laser Measurement',
                        type: {
                            value: 'PHYSICAL',
                            label: 'Physical',
                        },
                        category: {
                            value: 'MEASUREMENT',
                            label: 'Measurement',
                        },
                        description:
                            '<h2>Detailed description</h2>\n<p>The PrecisionCut Laser TS2 Cutter represents the next evolution in laser cutting technology, offering enhanced precision and versatility for modern manufacturing needs. This advanced system combines cutting-edge laser technology with intelligent control systems to deliver exceptional cutting quality and operational efficiency.</p>\n\n<ul>\n    <li>Dual-Laser System (CO₂ + Fiber)</li>\n    <li>Smart Control Interface</li>\n    <li>Automated Material Detection</li>\n    <li>Advanced Cooling System</li>\n    <li>Cloud-Based Monitoring</li>\n</ul>\n\n<p>Engineered for maximum versatility, the TS2 excels in processing a diverse range of materials including specialized alloys, advanced composites, and delicate substrates. The dual-laser system allows for optimal processing of both reflective and non-reflective materials, while maintaining superior edge quality and minimal thermal impact.</p>\n\n<p>The smart control interface features AI-powered optimization algorithms that automatically adjust cutting parameters based on material properties and desired outcomes. Integrated sensors and real-time monitoring systems ensure consistent quality and prevent material waste, while the advanced cooling system maintains optimal operating temperatures for extended production runs.</p>\n\n<p>With cloud-based monitoring and remote operation capabilities, the TS2 enables seamless integration into modern manufacturing workflows. Regular software updates and a comprehensive support network ensure your investment remains at the forefront of laser cutting technology, delivering exceptional results for years to come.</p>',
                        shortDescription: 'Laser measurement device for distance measurements',
                        image: {
                            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                            width: 640,
                            height: 656,
                            alt: 'Laser Measurement',
                        },
                        link: 'https://example.com/products/pd-s',
                        tags: [
                            {
                                label: 'New',
                                variant: 'secondary',
                            },
                        ],
                    },
                },
            ],
        },
    },
};

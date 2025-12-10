import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProductListPure } from './ProductList.client';

const meta = {
    title: 'Blocks/ProductList',
    component: ProductListPure,
} satisfies Meta<typeof ProductListPure>;

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
        __typename: 'ProductListBlock',
        id: 'product-list-1',
        title: 'Products',
        subtitle: 'Browse our product catalog',
        detailsLabel: 'View Details',
        table: {
            columns: [
                { id: 'sku', title: 'SKU' },
                { id: 'name', title: 'Product Name' },
                { id: 'category', title: 'Category' },
                { id: 'type', title: 'Type' },
                { id: 'price', title: 'Price' },
            ],
            actions: {
                title: 'Actions',
                label: 'View Details',
            },
        },
        fieldMapping: {
            type: {
                PHYSICAL: 'Physical',
                VIRTUAL: 'Virtual',
            },
            category: {
                SOFTWARE: 'Software',
                TOOLS: 'Tools',
                HARDWARE: 'Hardware',
                MEASUREMENT: 'Measurement',
                CLOUD: 'Cloud',
                SUPPORT: 'Support',
                SUBSCRIPTION: 'Subscription',
                WARRANTY: 'Warranty',
                MAINTENANCE: 'Maintenance',
                TRAINING: 'Training',
            },
        },
        pagination: {
            limit: 12,
            legend: 'of {totalPages} pages',
            prev: 'Previous',
            next: 'Next',
            selectPage: 'Select page',
        },
        filters: {
            label: 'Filter',
            title: 'Filter Products',
            description: 'Use filters to find specific products',
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
                        { label: 'Name ascending', value: 'name_ASC' },
                        { label: 'Name descending', value: 'name_DESC' },
                        { label: 'Price ascending', value: 'price_ASC' },
                        { label: 'Price descending', value: 'price_DESC' },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'type',
                    label: 'Product Type',
                    allowMultiple: true,
                    options: [
                        { label: 'Physical', value: 'PHYSICAL' },
                        { label: 'Virtual', value: 'VIRTUAL' },
                    ],
                },
                {
                    __typename: 'FilterSelect',
                    id: 'category',
                    label: 'Category',
                    allowMultiple: true,
                    options: [
                        { label: 'Software', value: 'SOFTWARE' },
                        { label: 'Tools', value: 'TOOLS' },
                        { label: 'Hardware', value: 'HARDWARE' },
                        { label: 'Measurement', value: 'MEASUREMENT' },
                        { label: 'Cloud', value: 'CLOUD' },
                        { label: 'Support', value: 'SUPPORT' },
                        { label: 'Subscription', value: 'SUBSCRIPTION' },
                        { label: 'Warranty', value: 'WARRANTY' },
                        { label: 'Maintenance', value: 'MAINTENANCE' },
                        { label: 'Training', value: 'TRAINING' },
                    ],
                },
            ],
        },
        noResults: {
            title: 'No Products Found',
            description: 'There are no products matching your criteria',
        },
        labels: {
            clickToSelect: 'Click to select',
            gridView: 'Grid view',
            tableView: 'Table view',
        },
        products: {
            total: 6,
            data: [
                {
                    __typename: 'ProductItem',
                    id: 'PRD-001',
                    sku: 'PP-DRL-500',
                    name: 'PowerPro Drill 500W',
                    description:
                        'Professional-grade cordless drill with 500W motor, perfect for heavy-duty applications',
                    shortDescription: 'Professional 500W cordless drill',
                    detailsUrl: '/products/powerpro-drill-500w',
                    type: {
                        value: 'PHYSICAL',
                        label: 'Physical',
                    },
                    category: {
                        value: 'TOOLS',
                        label: 'Tools',
                    },
                    price: {
                        value: 299.99,
                        currency: 'USD',
                    },
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-rental.jpg',
                        width: 640,
                        height: 656,
                        alt: 'PowerPro Drill 500W',
                    },
                    tags: [
                        { label: 'New', variant: 'secondary' },
                        { label: 'Bestseller', variant: 'default' },
                    ],
                    link: '/products/powerpro-drill-500w',
                },
                {
                    __typename: 'ProductItem',
                    id: 'PRD-002',
                    sku: 'MC-LAS-CUT',
                    name: 'PrecisionCut Laser TS2',
                    description:
                        'Advanced laser cutting system with dual CO₂ and fiber laser technology for industrial applications',
                    shortDescription: 'Industrial laser cutting system',
                    detailsUrl: '/products/precisioncut-laser-ts2',
                    type: {
                        value: 'PHYSICAL',
                        label: 'Physical',
                    },
                    category: {
                        value: 'HARDWARE',
                        label: 'Hardware',
                    },
                    price: {
                        value: 12999.0,
                        currency: 'USD',
                    },
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                        width: 640,
                        height: 656,
                        alt: 'PrecisionCut Laser TS2',
                    },
                    tags: [{ label: 'Professional', variant: 'default' }],
                    link: '/products/precisioncut-laser-ts2',
                },
                {
                    __typename: 'ProductItem',
                    id: 'PRD-003',
                    sku: 'SW-CAD-PRO',
                    name: 'CAD Pro Design Suite',
                    description: '3D CAD software suite with advanced modeling and simulation capabilities',
                    shortDescription: 'Professional 3D CAD software',
                    detailsUrl: '/products/cad-pro-design-suite',
                    type: {
                        value: 'VIRTUAL',
                        label: 'Virtual',
                    },
                    category: {
                        value: 'SOFTWARE',
                        label: 'Software',
                    },
                    price: {
                        value: 499.0,
                        currency: 'USD',
                    },
                    tags: [{ label: 'Digital', variant: 'secondary' }],
                    link: '/products/cad-pro-design-suite',
                },
                {
                    __typename: 'ProductItem',
                    id: 'PRD-004',
                    sku: 'MS-LAS-100',
                    name: 'Laser Measurement Device',
                    description: 'High-precision laser distance measurement tool with 100m range',
                    shortDescription: 'Precision laser measurement',
                    detailsUrl: '/products/laser-measurement-device',
                    type: {
                        value: 'PHYSICAL',
                        label: 'Physical',
                    },
                    category: {
                        value: 'MEASUREMENT',
                        label: 'Measurement',
                    },
                    price: {
                        value: 189.99,
                        currency: 'USD',
                    },
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-calibration.jpg',
                        width: 640,
                        height: 656,
                        alt: 'Laser Measurement Device',
                    },
                    tags: [{ label: 'New', variant: 'secondary' }],
                    link: '/products/laser-measurement-device',
                },
                {
                    __typename: 'ProductItem',
                    id: 'PRD-005',
                    sku: 'CL-MON-360',
                    name: 'CloudMonitor 360',
                    description: 'Real-time cloud infrastructure monitoring and analytics platform',
                    shortDescription: 'Cloud monitoring solution',
                    detailsUrl: '/products/cloudmonitor-360',
                    type: {
                        value: 'VIRTUAL',
                        label: 'Virtual',
                    },
                    category: {
                        value: 'CLOUD',
                        label: 'Cloud',
                    },
                    price: {
                        value: 99.0,
                        currency: 'USD',
                    },
                    tags: [
                        { label: 'Subscription', variant: 'default' },
                        { label: 'Popular', variant: 'secondary' },
                    ],
                    link: '/products/cloudmonitor-360',
                },
                {
                    __typename: 'ProductItem',
                    id: 'PRD-006',
                    sku: 'SUP-PRE-24',
                    name: 'Premium Support 24/7',
                    description: 'Round-the-clock premium technical support with guaranteed response time',
                    shortDescription: '24/7 premium support service',
                    detailsUrl: '/products/premium-support-247',
                    type: {
                        value: 'VIRTUAL',
                        label: 'Virtual',
                    },
                    category: {
                        value: 'SUPPORT',
                        label: 'Support',
                    },
                    price: {
                        value: 299.0,
                        currency: 'USD',
                    },
                    tags: [{ label: 'Service', variant: 'default' }],
                    link: '/products/premium-support-247',
                },
            ],
        },
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import readme from '../../README.md?raw';

import { OrderDetailsPure } from './OrderDetails.client';

const meta = {
    title: 'Blocks/OrderDetails',
    component: OrderDetailsPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof OrderDetailsPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI0Mjg2fQ.6EQ9eg88K8eGMbKK9S7OPf77JDwkRo5mHNChA3FzB8k',
        orderId: 'ORD-5000900',
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
        __typename: 'OrderDetailsBlock',
        id: 'order-details-1',
        title: 'Order details',
        order: {
            id: {
                value: 'ORD-5000900',
            },
            subtotal: {
                title: 'Order net value',
                icon: 'Package',
                label: '620.865',
                description: '7 items',
                value: {
                    value: 620.865,
                    currency: 'EUR',
                },
            },
            createdAt: {
                title: 'Order date',
                label: 'Yesterday',
                icon: 'CalendarClock',
                description: '12:38 AM',
                value: '2025-08-25T22:38:29.922Z',
            },
            paymentDueDate: {
                title: 'Payment due date',
                label: '08/29/2025',
                icon: 'Coins',
                description: 'Document no. 56700/08/2025',
                value: '2025-08-28T22:38:29.922Z',
            },
            overdue: {
                title: 'Overdue',
                icon: 'ThumbsUp',
                label: '0',
                description: 'No orders to be paid',
                value: {
                    value: 0,
                    currency: 'EUR',
                },
                isOverdue: false,
            },
            status: {
                title: 'Order status',
                icon: 'CheckCheck',
                label: 'Pending',
                value: 'PENDING',
                statusLadder: ['Created', 'Confirmed', 'Completed'],
            },
            customerComment: {
                title: 'Comment',
                icon: 'Text',
                value: 'Please confirm stock availability before shipping and ensure timely delivery. Include a packing list with batch numbers and certifications, if applicable. Additionally, verify that all documents are accurate and complete to avoid delays',
                link: {
                    label: 'See full',
                    icon: 'ArrowRight',
                    url: '',
                },
            },
        },
        productList: {
            title: 'Product list',
            products: {
                data: [
                    {
                        id: 'ITEM-300',
                        productId: 'PRD-014',
                        quantity: 1,
                        price: {
                            value: 17.991,
                            currency: 'EUR',
                        },
                        total: {
                            value: 17.991,
                            currency: 'EUR',
                        },
                        subtotal: {
                            value: 13.853069999999999,
                            currency: 'EUR',
                        },
                        unit: 'PCS',
                        currency: 'EUR',
                        product: {
                            id: 'PRD-014',
                            sku: 'ABC-12345-S-BL',
                            name: 'RapidFix Repair',
                            description: 'Description for RapidFix Repair',
                            shortDescription: 'Short description for RapidFix Repair',
                            image: {
                                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                                width: 640,
                                height: 656,
                                alt: 'RapidFix Repair',
                            },
                            price: {
                                value: 19.99,
                                currency: 'EUR',
                            },
                            link: 'https://example.com/products/prd-014',
                            type: 'VIRTUAL',
                            category: 'MAINTENANCE',
                            tags: [
                                {
                                    label: 'New',
                                    variant: 'secondary',
                                },
                            ],
                        },
                    },
                    {
                        id: 'ITEM-301',
                        productId: 'PRD-004',
                        quantity: 2,
                        price: {
                            value: 90,
                            currency: 'USD',
                        },
                        total: {
                            value: 180,
                            currency: 'USD',
                        },
                        subtotal: {
                            value: 138.6,
                            currency: 'USD',
                        },
                        unit: 'PCS',
                        currency: 'USD',
                        product: {
                            id: 'PRD-004',
                            sku: 'ABC-12345-S-BL',
                            name: 'Rotary Hammer',
                            description: 'Description for Rotary Hammer',
                            shortDescription: 'Short description for Rotary Hammer',
                            image: {
                                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                                width: 640,
                                height: 656,
                                alt: 'Rotary Hammer',
                            },
                            price: {
                                value: 100,
                                currency: 'USD',
                            },
                            link: 'https://example.com/products/prd-004',
                            type: 'PHYSICAL',
                            category: 'TOOLS',
                            tags: [
                                {
                                    label: 'New',
                                    variant: 'secondary',
                                },
                            ],
                        },
                    },
                    {
                        id: 'ITEM-302',
                        productId: 'PRD-011',
                        quantity: 4,
                        price: {
                            value: 35.991,
                            currency: 'USD',
                        },
                        total: {
                            value: 143.964,
                            currency: 'USD',
                        },
                        subtotal: {
                            value: 110.85228000000001,
                            currency: 'USD',
                        },
                        unit: 'PCS',
                        currency: 'USD',
                        product: {
                            id: 'PRD-011',
                            sku: 'ABC-12345-S-BL',
                            name: 'Tool Belt',
                            description: 'Description for Tool Belt',
                            shortDescription: 'Short description for Tool Belt',
                            image: {
                                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                                width: 640,
                                height: 656,
                                alt: 'Tool Belt',
                            },
                            price: {
                                value: 39.99,
                                currency: 'USD',
                            },
                            link: 'https://example.com/products/prd-011',
                            type: 'PHYSICAL',
                            category: 'ACCESSORIES',
                            tags: [
                                {
                                    label: 'New',
                                    variant: 'secondary',
                                },
                            ],
                        },
                    },
                    {
                        id: 'ITEM-303',
                        productId: 'PRD-014',
                        quantity: 2,
                        price: {
                            value: 17.991,
                            currency: 'EUR',
                        },
                        total: {
                            value: 35.982,
                            currency: 'EUR',
                        },
                        subtotal: {
                            value: 27.706139999999998,
                            currency: 'EUR',
                        },
                        unit: 'PCS',
                        currency: 'EUR',
                        product: {
                            id: 'PRD-014',
                            sku: 'ABC-12345-S-BL',
                            name: 'RapidFix Repair',
                            description: 'Description for RapidFix Repair',
                            shortDescription: 'Short description for RapidFix Repair',
                            image: {
                                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                                width: 640,
                                height: 656,
                                alt: 'RapidFix Repair',
                            },
                            price: {
                                value: 19.99,
                                currency: 'EUR',
                            },
                            link: 'https://example.com/products/prd-014',
                            type: 'VIRTUAL',
                            category: 'MAINTENANCE',
                            tags: [
                                {
                                    label: 'New',
                                    variant: 'secondary',
                                },
                            ],
                        },
                    },
                    {
                        id: 'ITEM-304',
                        productId: 'PRD-013',
                        quantity: 3,
                        price: {
                            value: 17.991,
                            currency: 'USD',
                        },
                        total: {
                            value: 53.973,
                            currency: 'USD',
                        },
                        subtotal: {
                            value: 41.55921,
                            currency: 'USD',
                        },
                        unit: 'PCS',
                        currency: 'USD',
                        product: {
                            id: 'PRD-013',
                            sku: 'ABC-12345-S-BL',
                            name: 'MaxFlow Air Systems',
                            description: 'Description for MaxFlow Air Systems',
                            shortDescription: 'Short description for MaxFlow Air Systems',
                            image: {
                                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                                width: 640,
                                height: 656,
                                alt: 'MaxFlow Air Systems',
                            },
                            price: {
                                value: 19.99,
                                currency: 'USD',
                            },
                            link: 'https://example.com/products/prd-013',
                            type: 'VIRTUAL',
                            category: 'MAINTENANCE',
                            tags: [
                                {
                                    label: 'New',
                                    variant: 'secondary',
                                },
                            ],
                        },
                    },
                ],
                total: 7,
            },
            table: {
                columns: [
                    {
                        id: 'image',
                        title: 'Image',
                    },
                    {
                        id: 'name',
                        title: 'Name',
                    },
                    {
                        id: 'sku',
                        title: 'SKU no.',
                    },
                    {
                        id: 'unit',
                        title: 'Unit',
                    },
                    {
                        id: 'price',
                        title: 'Net price',
                    },
                    {
                        id: 'discountTotal',
                        title: 'Discount',
                    },
                    {
                        id: 'quantity',
                        title: 'Items',
                    },
                    {
                        id: 'subtotal',
                        title: 'Net value',
                    },
                ],
            },
            pagination: {
                limit: 5,
                legend: 'of {totalPages} pages',
                prev: 'Previous',
                next: 'Next',
                selectPage: 'Select page',
            },
            filters: {
                label: 'Filters & Sort',
                title: 'Filters & Sort',
                description: 'Filter your products by name, type, or date range to find what you need quickly.',
                submit: 'Apply',
                reset: 'Clear',
                close: 'Close filters',
                removeFilters: 'Remove filters ({active})',
                items: [
                    {
                        __typename: 'FilterSelect',
                        id: 'sort',
                        label: 'Sort by',
                        allowMultiple: false,
                        options: [
                            {
                                label: 'Name (ascending)',
                                value: 'name_ASC',
                            },
                            {
                                label: 'Name (descending)',
                                value: 'name_DESC',
                            },
                            {
                                label: 'SKU (ascending)',
                                value: 'sku_ASC',
                            },
                            {
                                label: 'SKU (descending)',
                                value: 'sku_DESC',
                            },
                            {
                                label: 'Net value (ascending)',
                                value: 'subtotal_ASC',
                            },
                            {
                                label: 'Net value (descending)',
                                value: 'subtotal_DESC',
                            },
                            {
                                label: 'Net price (ascending)',
                                value: 'price_ASC',
                            },
                            {
                                label: 'Net price (descending)',
                                value: 'price_DESC',
                            },
                            {
                                label: 'Discount value (ascending)',
                                value: 'discountTotal_ASC',
                            },
                            {
                                label: 'Discount value (descending)',
                                value: 'discountTotal_DESC',
                            },
                            {
                                label: 'Unit (ascending)',
                                value: 'unit_ASC',
                            },
                            {
                                label: 'Unit (descending)',
                                value: 'unit_DESC',
                            },
                            {
                                label: 'Items (ascending)',
                                value: 'quantity_ASC',
                            },
                            {
                                label: 'Items (descending)',
                                value: 'quantity_DESC',
                            },
                        ],
                    },
                ],
            },
            noResults: {
                title: "So far, there's nothing here",
                description: '',
            },
        },
        labels: {
            today: 'Today',
            yesterday: 'Yesterday',
            showMore: 'Show more',
            close: 'Close',
        },
        reorderLabel: 'Reorder',
        trackOrderLabel: 'Track order',
        payOnlineLabel: 'Pay online',
    },
};

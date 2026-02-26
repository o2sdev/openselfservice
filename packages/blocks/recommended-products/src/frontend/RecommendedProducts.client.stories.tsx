import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import readme from '../../README.md?raw';

import { RecommendedProductsPure } from './RecommendedProducts.client';

const meta = {
    title: 'Blocks/RecommendedProducts',
    component: RecommendedProductsPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof RecommendedProductsPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        __typename: 'RecommendedProductsBlock',
        id: 'recommended-products-1',
        locale: 'en',
        routing: {
            locales: ['en', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/products/[id]': {
                    en: '/products/[id]',
                    pl: '/produkty/[id]',
                },
            },
        },
        products: [
            {
                id: 'PRD-005',
                name: 'Cordless Angle Grinder',
                description: 'Cordless angle grinder with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                    alt: 'Cordless Angle Grinder',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 199.99,
                    currency: 'USD',
                },
                link: 'https://example.com/products/ag-125-a22',
                badges: [
                    { label: 'New', variant: 'secondary' },
                    { label: 'Promo', variant: 'destructive' },
                ],
            },
            {
                id: 'PRD-006',
                name: 'Laser Measurement',
                description: 'Laser measurement device for distance measurements',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    alt: 'Laser Measurement',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/pd-s',
                badges: [{ label: 'New', variant: 'secondary' }],
            },
            {
                id: 'PRD-007',
                name: 'Cordless Drill Driver',
                description: 'Cordless drill driver with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    alt: 'Cordless Drill Driver',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/sfc-22-a',
                badges: [{ label: 'New', variant: 'secondary' }],
            },
            {
                id: 'PRD-008',
                name: 'Professional Calibration',
                description: 'Professional calibration service for industrial equipment',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                    alt: 'Professional Calibration Service',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 199.99,
                    currency: 'USD',
                },
                link: 'https://example.com/products/ag-125-a22',
                badges: [
                    { label: 'New', variant: 'secondary' },
                    { label: 'Promo', variant: 'destructive' },
                ],
            },
        ],
        labels: {
            title: 'Recommended Products',
            detailsLabel: 'Details',
        },
    },
};

export const WithCustomTitle: Story = {
    args: {
        ...Default.args,
        labels: {
            title: 'You Might Also Like',
            detailsLabel: 'View Details',
        },
    },
};

export const WithoutTitle: Story = {
    args: {
        ...Default.args,
        labels: {
            detailsLabel: 'Details',
        },
    },
};

export const SingleProduct: Story = {
    args: {
        ...Default.args,
        products: [
            {
                id: 'PRD-005',
                name: 'Cordless Angle Grinder',
                description: 'Cordless angle grinder with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                    alt: 'Cordless Angle Grinder',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 199.99,
                    currency: 'USD',
                },
                link: 'https://example.com/products/ag-125-a22',
                badges: [
                    { label: 'New', variant: 'secondary' },
                    { label: 'Promo', variant: 'destructive' },
                ],
            },
        ],
    },
};

export const EmptyProducts: Story = {
    args: {
        ...Default.args,
        products: [],
    },
};

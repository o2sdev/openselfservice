import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { Button } from '@o2s/ui/elements/button';

import { ProductCarousel } from './ProductCarousel';
import { ProductSummaryItem } from './ProductCarousel.types';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/ProductCarousel',
    component: ProductCarousel,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ProductCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data
const sampleProducts: ProductSummaryItem[] = [
    {
        id: 'PRD-005',
        name: 'Cordless Angle Grinder',
        description: '<p>Cordless angle grinder with 22V battery platform</p>',
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
        link: '/products/ag-125-a22',
        badges: [
            { label: 'New', variant: 'secondary' },
            { label: 'Promo', variant: 'destructive' },
        ],
    },
    {
        id: 'PRD-006',
        name: 'Laser Measurement Device',
        description: '<p>Laser measurement device for distance measurements</p>',
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
        link: '/products/pd-s',
        badges: [{ label: 'New', variant: 'secondary' }],
    },
    {
        id: 'PRD-007',
        name: 'Cordless Drill Driver',
        description: '<p>Cordless drill driver with 22V battery platform</p>',
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
        link: '/products/sfc-22-a',
        badges: [{ label: 'New', variant: 'secondary' }],
    },
    {
        id: 'PRD-008',
        name: 'Professional Calibration Service',
        description: '<p>ISO-Certified Calibration for industrial equipment</p>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-calibration.jpg',
            alt: 'Professional Calibration Service',
            width: 640,
            height: 656,
        },
        price: {
            value: 149.99,
            currency: 'USD',
        },
        link: '/services/calibration',
        badges: [{ label: 'Popular', variant: 'default' }],
    },
    {
        id: 'PRD-009',
        name: 'Safety Equipment Package',
        description: '<p>Complete safety equipment for welding environments</p>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-welding.jpg',
            alt: 'Safety Equipment Package',
            width: 640,
            height: 656,
        },
        price: {
            value: 299.99,
            currency: 'USD',
        },
        link: '/products/safety-package',
        badges: [
            { label: 'Bestseller', variant: 'default' },
            { label: 'Safety', variant: 'outline' },
        ],
    },
    {
        id: 'PRD-010',
        name: 'Power Tool Battery Pack',
        description: '<p>High-capacity battery pack for cordless tools</p>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
            alt: 'Power Tool Battery Pack',
            width: 640,
            height: 656,
        },
        price: {
            value: 79.99,
            currency: 'USD',
        },
        link: '/products/battery-pack',
        badges: [{ label: 'New', variant: 'secondary' }],
    },
];

export const Default: Story = {
    args: {
        products: sampleProducts,
        title: 'Recommended Products',
        LinkComponent: MockLinkComponent,
        linkDetailsLabel: 'View Details',
    },
};

export const WithDescription: Story = {
    args: {
        products: sampleProducts,
        title: 'You Might Also Like',
        description: '<p>Check out these carefully selected products that complement your choice.</p>',
        LinkComponent: MockLinkComponent,
        linkDetailsLabel: 'View Details',
    },
};

export const WithAction: Story = {
    args: {
        products: sampleProducts,
        title: 'Popular Products',
        description: '<p>Discover our most popular items chosen by customers like you.</p>',
        action: (
            <Button variant="secondary" onClick={() => console.log('View all clicked')}>
                View All Products
            </Button>
        ),
        LinkComponent: MockLinkComponent,
        linkDetailsLabel: 'View Details',
    },
};

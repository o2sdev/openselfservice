import { Models } from '@o2s/framework/modules';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { Button } from '@o2s/ui/elements/button';

import { ProductCard } from './ProductCard';
import { ProductCardBadge } from './ProductCard.types';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/Cards/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data
const sampleImage = {
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80',
    alt: 'Sample product image',
    width: 800,
    height: 400,
};

const samplePrice: Models.Price.Price = {
    value: 99.99,
    currency: 'USD',
};

const sampleTags: ProductCardBadge[] = [
    { label: 'New', variant: 'default' },
    { label: 'Sale', variant: 'destructive' },
];

const sampleStatus: ProductCardBadge = { label: 'In Stock', variant: 'outline' };

const sampleLink = {
    label: 'View Details',
    url: '/products/sample-product',
};

const sampleDescription =
    '<p>This is a sample product description. It provides information about the product features and benefits.</p>';

export const Default: Story = {
    args: {
        title: 'Premium Wireless Headphones',
        description: sampleDescription,
        price: samplePrice,
        image: sampleImage,
        tags: sampleTags,
        status: sampleStatus,
        link: sampleLink,
        action: <Button variant="outline">Add to Cart</Button>,
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutImage: Story = {
    args: {
        ...Default.args,
        image: undefined,
    },
};

export const WithoutDescription: Story = {
    args: {
        ...Default.args,
        description: undefined,
    },
};

export const WithoutPrice: Story = {
    args: {
        ...Default.args,
        price: undefined,
    },
};

export const WithoutTags: Story = {
    args: {
        ...Default.args,
        tags: undefined,
    },
};

export const WithoutStatus: Story = {
    args: {
        ...Default.args,
        status: undefined,
    },
};

export const WithoutLink: Story = {
    args: {
        ...Default.args,
        link: undefined,
    },
};

export const WithoutAction: Story = {
    args: {
        ...Default.args,
        action: undefined,
    },
};

export const WithoutActionAndLink: Story = {
    args: {
        ...Default.args,
        action: undefined,
        link: undefined,
    },
};

export const WithCustomAction: Story = {
    args: {
        ...Default.args,
        action: (
            <div className="flex gap-2">
                <Button variant="outline" size="sm">
                    Save
                </Button>
                <Button variant="primary" size="sm">
                    Buy Now
                </Button>
            </div>
        ),
    },
};

export const OutOfStock: Story = {
    args: {
        ...Default.args,
        status: { label: 'Out of Stock', variant: 'destructive' },
    },
};

export const WithLongTitle: Story = {
    args: {
        ...Default.args,
        title: 'Premium Wireless Noise Cancelling Headphones with Extended Battery Life and Multiple Device Connectivity',
    },
};

export const WithLongDescription: Story = {
    args: {
        ...Default.args,
        description:
            '<p>This premium product features advanced noise cancellation technology, providing an immersive audio experience in any environment. With up to 30 hours of battery life, you can enjoy your favorite music all day long. The comfortable over-ear design ensures extended wearing comfort, while the high-quality materials guarantee durability. Compatible with multiple devices via Bluetooth 5.0, these headphones offer seamless switching between your phone, tablet, and computer.</p>',
    },
};

export const WithMultipleTags: Story = {
    args: {
        ...Default.args,
        tags: [
            { label: 'New', variant: 'default' },
            { label: 'Sale', variant: 'destructive' },
            { label: 'Limited', variant: 'secondary' },
            { label: 'Premium', variant: 'outline' },
        ],
    },
};

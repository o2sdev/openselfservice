import { Models } from '@o2s/framework/modules';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { PricingCard } from './PricingCard';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/Cards/PricingCard',
    component: PricingCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof PricingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data
const sampleImage = {
    url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    alt: 'Sample pricing image',
    width: 800,
    height: 400,
};

const samplePrice: Models.Price.Price = {
    value: 19.99,
    currency: 'USD',
    period: 'month',
};

const sampleTags: Models.Badge.Badge[] = [
    { label: 'Popular', variant: 'default' },
    { label: 'New', variant: 'outline' },
];

const sampleLinks: Models.Link.Link[] = [
    {
        label: 'Get Started',
        url: '/pricing/starter',
        variant: 'primary',
    },
    {
        label: 'Learn More',
        url: '/pricing/details',
        variant: 'outline',
    },
];

const sampleFeatureList = [
    {
        title: '10 Users',
        icon: 'Check',
    },
    {
        title: '5GB Storage',
        icon: 'Check',
        description: 'Expandable up to 20GB for an additional fee',
    },
    {
        title: 'Basic Support',
        icon: 'Check',
    },
    {
        title: 'Analytics Dashboard',
        icon: 'Check',
        description: 'Access to basic analytics and reporting features',
    },
];

export const Default: Story = {
    args: {
        title: 'Starter Plan',
        description: '<p>Perfect for small teams and startups</p>',
        image: sampleImage,
        price: samplePrice,
        tags: sampleTags,
        links: sampleLinks,
        featureListTitle: "What's included:",
        featureList: sampleFeatureList,
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

export const WithoutLinks: Story = {
    args: {
        ...Default.args,
        links: undefined,
    },
};

export const WithoutFeatureList: Story = {
    args: {
        ...Default.args,
        featureListTitle: undefined,
        featureList: undefined,
    },
};

export const Promoted: Story = {
    args: {
        ...Default.args,
        isPromoted: true,
    },
};

export const Recommended: Story = {
    args: {
        ...Default.args,
        recommended: true,
    },
};

export const FreePrice: Story = {
    args: {
        ...Default.args,
        title: 'Free Plan',
        description: '<p>Try our service for free</p>',
        price: {
            value: 0,
            currency: 'USD',
            period: 'month',
        },
    },
};

export const WithLongTitle: Story = {
    args: {
        ...Default.args,
        title: 'Enterprise Premium Advanced Plan with Extended Support and Priority Features',
    },
};

export const WithLongDescription: Story = {
    args: {
        ...Default.args,
        description:
            '<p>This comprehensive plan includes all the features you need to grow your business, with advanced analytics, priority support, and extended storage options. Perfect for medium to large teams looking to scale their operations efficiently while maintaining high quality service.</p>',
    },
};

export const WithManyFeatures: Story = {
    args: {
        ...Default.args,
        featureList: [
            ...sampleFeatureList,
            {
                title: 'Custom Domains',
                icon: 'Check',
            },
            {
                title: 'API Access',
                icon: 'Check',
                description: 'Full access to our REST API',
            },
            {
                title: 'Email Support',
                icon: 'Check',
            },
            {
                title: 'Advanced Security',
                icon: 'Check',
                description: 'Includes 2FA and role-based permissions',
            },
        ],
    },
};

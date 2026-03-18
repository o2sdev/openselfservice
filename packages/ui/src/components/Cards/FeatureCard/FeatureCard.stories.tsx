import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { FeatureCard } from './FeatureCard';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/Cards/FeatureCard',
    component: FeatureCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof FeatureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data
const sampleImage = {
    url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    alt: 'Sample feature image',
    width: 800,
    height: 400,
};

export const Default: Story = {
    args: {
        title: 'Advanced Analytics',
        description: '<p>Get detailed insights into your business performance with our advanced analytics tools.</p>',
        image: sampleImage,
        link: {
            label: 'Learn More',
            url: '/features/analytics',
            icon: 'ArrowRight',
        },
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

export const WithoutLink: Story = {
    args: {
        ...Default.args,
        link: undefined,
    },
};

export const WithLongTitle: Story = {
    args: {
        ...Default.args,
        title: 'Advanced Analytics Platform with Real-time Data Processing and Visualization Tools',
    },
};

export const WithLongDescription: Story = {
    args: {
        ...Default.args,
        description:
            '<p>Our advanced analytics platform provides comprehensive insights into your business performance. With real-time data processing and visualization tools, you can make informed decisions quickly. The platform includes customizable dashboards, automated reporting, and predictive analytics capabilities to help you stay ahead of the competition.</p>',
    },
};

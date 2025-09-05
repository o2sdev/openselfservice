import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbItem } from './Breadcrumbs.types';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample breadcrumb items
const sampleBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', slug: '/' },
    { label: 'Products', slug: '/products' },
    { label: 'Categories', slug: '/products/categories' },
    { label: 'Current Page' },
];

export const Default: Story = {
    args: {
        breadcrumbs: sampleBreadcrumbs,
        LinkComponent: MockLinkComponent,
    },
};

export const SingleItem: Story = {
    args: {
        breadcrumbs: [{ label: 'Current Page' }],
        LinkComponent: MockLinkComponent,
    },
};

export const TwoItems: Story = {
    args: {
        breadcrumbs: [{ label: 'Home', slug: '/' }, { label: 'Current Page' }],
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutSlugs: Story = {
    args: {
        breadcrumbs: [{ label: 'Home' }, { label: 'Products' }, { label: 'Current Page' }],
        LinkComponent: MockLinkComponent,
    },
};

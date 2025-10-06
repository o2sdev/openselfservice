import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { BlogCard } from './BlogCard';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/Cards/BlogCard',
    component: BlogCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof BlogCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data
const sampleImage = {
    url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    alt: 'Sample blog image',
    width: 800,
    height: 400,
};

export const Default: Story = {
    args: {
        title: 'How to Build a Modern Web Application',
        lead: 'Learn the best practices for building scalable and maintainable web applications using modern technologies.',
        url: '/blog/how-to-build-a-modern-web-application',
        date: 'June 15, 2023',
        image: sampleImage,
        author: {
            name: 'John Doe',
            avatar: 'https://github.com/shadcn.png',
            position: 'Senior Developer',
        },
        categoryTitle: 'Web Development',
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutImage: Story = {
    args: {
        ...Default.args,
        image: undefined,
    },
};

export const WithoutAuthor: Story = {
    args: {
        ...Default.args,
        author: undefined,
    },
};

export const WithoutCategory: Story = {
    args: {
        ...Default.args,
        categoryTitle: undefined,
    },
};

export const LongTitle: Story = {
    args: {
        ...Default.args,
        title: 'This is a very long title that should be truncated after two lines to ensure proper display in the card layout',
    },
};

export const LongLead: Story = {
    args: {
        ...Default.args,
        lead: 'This is a very long lead paragraph that should be truncated after three lines. It contains a lot of information about the blog post and is designed to give the reader a good idea of what the post is about without revealing too much. The text should be truncated with an ellipsis to indicate that there is more content available.',
    },
};

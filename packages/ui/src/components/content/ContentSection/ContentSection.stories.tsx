import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { ContentSection } from './ContentSection';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/ContentSection',
    component: ContentSection,
    tags: ['autodocs'],
} satisfies Meta<typeof ContentSection>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample content for the section
const SampleContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="p-4 border border-gray-200 rounded-md">Item 1</div>
        <div className="p-4 border border-gray-200 rounded-md">Item 2</div>
        <div className="p-4 border border-gray-200 rounded-md">Item 3</div>
    </div>
);

export const Default: Story = {
    args: {
        title: 'Section Title',
        description: 'This is a description for the content section.',
        categoryLink: {
            label: 'View All',
            url: '/view-all',
        },
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutTitle: Story = {
    args: {
        description: 'This is a description for the content section without a title.',
        categoryLink: {
            label: 'View All',
            url: '/view-all',
        },
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutDescription: Story = {
    args: {
        title: 'Section Title Without Description',
        categoryLink: {
            label: 'View All',
            url: '/view-all',
        },
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutCategoryLink: Story = {
    args: {
        title: 'Section Title Without Link',
        description: 'This is a description for the content section without a category link.',
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const TitleOnly: Story = {
    args: {
        title: 'Section Title Only',
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const DescriptionOnly: Story = {
    args: {
        description: 'This is a description for the content section without a title or category link.',
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const ContentOnly: Story = {
    args: {
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const WithRichTextDescription: Story = {
    args: {
        title: 'Section with Rich Text Description',
        description: '<p>This is a <strong>rich text</strong> description with <em>formatting</em>.</p>',
        categoryLink: {
            label: 'View All',
            url: '/view-all',
        },
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const WithLongTitle: Story = {
    args: {
        title: 'This is a very long section title that might wrap to multiple lines on smaller screens',
        description: 'This is a description for the content section with a long title.',
        categoryLink: {
            label: 'View All',
            url: '/view-all',
        },
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

export const WithLongDescription: Story = {
    args: {
        title: 'Section with Long Description',
        description:
            'This is a very long description for the content section that might wrap to multiple lines. It contains a lot of text to demonstrate how the component handles longer descriptions. The description should be readable and properly formatted within the layout of the component.',
        categoryLink: {
            label: 'View All',
            url: '/view-all',
        },
        children: <SampleContent />,
        LinkComponent: MockLinkComponent,
    },
};

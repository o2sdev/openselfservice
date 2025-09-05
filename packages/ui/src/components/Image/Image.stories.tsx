import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { Image } from './Image';

const meta = {
    title: 'Components/Image',
    component: Image,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample image URL
const sampleImageUrl =
    'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80';

export const Default: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Sample image',
        width: 400,
        height: 300,
    },
};

export const WithFixedDimensions: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with fixed dimensions',
        width: 300,
        height: 200,
    },
};

export const WithFill: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with fill',
        fill: true,
    },
    render: (args) => (
        <div style={{ position: 'relative', width: '400px', height: '300px' }}>
            <Image {...args} />
        </div>
    ),
};

export const WithObjectFit: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with object-fit',
        width: 400,
        height: 200,
        style: { objectFit: 'cover' },
    },
};

export const WithObjectPosition: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with object-position',
        width: 400,
        height: 200,
        style: { objectFit: 'cover', objectPosition: 'bottom' },
    },
};

export const WithPriority: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with priority',
        width: 400,
        height: 300,
        priority: true,
    },
};

export const WithQuality: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with quality',
        width: 400,
        height: 300,
        quality: 50,
    },
};

export const WithClassName: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with className',
        width: 400,
        height: 300,
        className: 'rounded-lg shadow-lg',
    },
};

export const WithSizes: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image with sizes',
        width: 400,
        height: 300,
        sizes: '(max-width: 768px) 100vw, 400px',
    },
};

export const WithoutDimensions: Story = {
    args: {
        src: sampleImageUrl,
        alt: 'Image without dimensions (falls back to img tag)',
    },
};

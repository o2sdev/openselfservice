import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { Container } from './Container';

const meta = {
    title: 'Components/Container',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample content for the container
const SampleContent = () => (
    <div className="p-4 border border-dashed border-gray-300 rounded-md">
        <h2 className="text-xl font-bold mb-2">Container Content</h2>
        <p>
            This is sample content inside the container. The container component controls the width, spacing, and
            background.
        </p>
    </div>
);

export const Default: Story = {
    args: {
        variant: 'full',
        spacing: 'medium',
        children: <SampleContent />,
    },
};

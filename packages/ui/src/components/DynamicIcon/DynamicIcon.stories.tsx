import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { DynamicIcon } from './DynamicIcon';

const meta = {
    title: 'Components/DynamicIcon',
    component: DynamicIcon,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DynamicIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'User',
    },
};

export const CommonIcons: Story = {
    args: {
        name: 'User',
    },
    render: () => (
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
                <DynamicIcon name="User" />
                <span className="text-xs mt-1">User</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Home" />
                <span className="text-xs mt-1">Home</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Settings" />
                <span className="text-xs mt-1">Settings</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Mail" />
                <span className="text-xs mt-1">Mail</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Search" />
                <span className="text-xs mt-1">Search</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Bell" />
                <span className="text-xs mt-1">Bell</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Calendar" />
                <span className="text-xs mt-1">Calendar</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Heart" />
                <span className="text-xs mt-1">Heart</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Star" />
                <span className="text-xs mt-1">Star</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Check" />
                <span className="text-xs mt-1">Check</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="X" />
                <span className="text-xs mt-1">X</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="ArrowRight" />
                <span className="text-xs mt-1">ArrowRight</span>
            </div>
        </div>
    ),
};

export const DifferentSizes: Story = {
    args: {
        name: 'User',
    },
    render: () => (
        <div className="flex items-end gap-4">
            <div className="flex flex-col items-center">
                <DynamicIcon name="User" size={16} />
                <span className="text-xs mt-1">16px</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="User" size={24} />
                <span className="text-xs mt-1">24px</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="User" size={32} />
                <span className="text-xs mt-1">32px</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="User" size={48} />
                <span className="text-xs mt-1">48px</span>
            </div>
        </div>
    ),
};

export const DifferentColors: Story = {
    args: {
        name: 'User',
    },
    render: () => (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <DynamicIcon name="Heart" color="currentColor" />
                <span className="text-xs mt-1">Current</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Heart" color="red" />
                <span className="text-xs mt-1">Red</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Heart" color="blue" />
                <span className="text-xs mt-1">Blue</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Heart" color="green" />
                <span className="text-xs mt-1">Green</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Heart" color="#9333ea" />
                <span className="text-xs mt-1">Purple</span>
            </div>
        </div>
    ),
};

export const DifferentStrokeWidths: Story = {
    args: {
        name: 'User',
    },
    render: () => (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <DynamicIcon name="Circle" strokeWidth={1} />
                <span className="text-xs mt-1">1px</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Circle" strokeWidth={2} />
                <span className="text-xs mt-1">2px</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Circle" strokeWidth={3} />
                <span className="text-xs mt-1">3px</span>
            </div>
            <div className="flex flex-col items-center">
                <DynamicIcon name="Circle" strokeWidth={4} />
                <span className="text-xs mt-1">4px</span>
            </div>
        </div>
    ),
};

export const WithClassName: Story = {
    args: {
        name: 'User',
        className: 'text-blue-500 hover:text-blue-700 transition-colors',
    },
};

export const CustomIcon: Story = {
    args: {
        name: 'User',
        size: 32,
        color: 'purple',
        strokeWidth: 1.5,
        className: 'opacity-80',
    },
};

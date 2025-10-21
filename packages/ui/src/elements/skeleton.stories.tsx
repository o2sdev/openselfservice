import type { Meta, StoryObj } from '@storybook/nextjs';

import { Skeleton } from './skeleton';

const meta = {
    title: 'Elements/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="space-y-2">
            <Skeleton className="w-[250px]" />
            <Skeleton className="w-[200px]" />
            <Skeleton className="w-[300px]" />
        </div>
    ),
};

export const Rounded: Story = {
    render: () => (
        <div className="space-y-2">
            <Skeleton variant="rounded" className="w-[300px]" />
        </div>
    ),
};

export const Circle: Story = {
    render: () => (
        <div className="space-y-2">
            <Skeleton variant="circle" />
        </div>
    ),
};

export const Card: Story = {
    render: () => (
        <div className="space-y-2">
            <div className="flex items-center space-x-4">
                <Skeleton variant="circle" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    ),
};

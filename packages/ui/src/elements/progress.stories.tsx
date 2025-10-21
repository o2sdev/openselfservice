import type { Meta, StoryObj } from '@storybook/nextjs';

import { Progress } from './progress';

const meta = {
    title: 'Elements/Progress',
    component: Progress,
    tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Progress value={75} className="w-full" />,
};

export const Vertical: Story = {
    render: () => <Progress value={75} orientation="vertical" className="h-24" />,
};

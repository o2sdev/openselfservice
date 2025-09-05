import type { Meta, StoryObj } from '@storybook/nextjs';

import { Separator } from './separator';

const meta = {
    title: 'Elements/Separator',
    component: Separator,
    tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div>
            <h4 className="text-sm font-medium leading-none">Horizontal Separator</h4>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">A horizontal line to separate content.</p>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Content</div>
            <Separator orientation="vertical" />
            <div>Content</div>
            <Separator orientation="vertical" />
            <div>Content</div>
        </div>
    ),
};

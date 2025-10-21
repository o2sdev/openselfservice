import type { Meta, StoryObj } from '@storybook/nextjs';

import { BadgeStatus } from './badge-status';

const meta = {
    title: 'Elements/BadgeStatus',
    component: BadgeStatus,
    tags: ['autodocs'],
} satisfies Meta<typeof BadgeStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
    },
    render: ({ variant }) => (
        <div className="flex items-center gap-2">
            <BadgeStatus variant={variant} />
            <span>Online</span>
        </div>
    ),
};

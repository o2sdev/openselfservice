import type { Meta, StoryObj } from '@storybook/nextjs';

import { Badge } from './badge';

const meta = {
    title: 'Elements/Badge',
    component: Badge,
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'default',
    },
    render: ({ variant, children }) => <Badge variant={variant}>{children}</Badge>,
};

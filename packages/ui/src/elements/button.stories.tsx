import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './button';

const meta = {
    title: 'Elements/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'default',
    },
    render: ({ variant, size, children }) => (
        <Button variant={variant} size={size}>
            {children}
        </Button>
    ),
};

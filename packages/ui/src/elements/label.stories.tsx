import type { Meta, StoryObj } from '@storybook/nextjs';

import { Label } from './label';

const meta = {
    title: 'Elements/Label',
    component: Label,
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        htmlFor: 'email',
        children: 'Email',
    },
    render: (args) => <Label {...args} />,
};

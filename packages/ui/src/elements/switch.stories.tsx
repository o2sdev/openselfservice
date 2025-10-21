import type { Meta, StoryObj } from '@storybook/nextjs';

import { Switch, SwitchWithLabel } from './switch';

const meta = {
    title: 'Elements/Switch',
    component: SwitchWithLabel,
    tags: ['autodocs'],
} satisfies Meta<typeof SwitchWithLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: false,
        disabled: false,
        label: 'Notifications',
    },
    render: ({ checked, disabled }) => <Switch checked={checked} disabled={disabled} />,
};

export const WithLabel: Story = {
    args: {
        checked: false,
        disabled: false,
        label: 'Notifications',
    },
    render: ({ checked, disabled, label }) => <SwitchWithLabel checked={checked} disabled={disabled} label={label} />,
};

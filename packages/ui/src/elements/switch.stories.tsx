import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Switch, SwitchWithLabel, SwitchWithLabelAndDetails } from './switch';

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

type DetailsStory = StoryObj<Meta<typeof SwitchWithLabelAndDetails>>;

export const WithLabelAndDescription: DetailsStory = {
    render: () => (
        <SwitchWithLabelAndDetails
            label="Email notifications"
            description="Receive email updates about your account."
        />
    ),
};

export const WithError: DetailsStory = {
    render: () => (
        <SwitchWithLabelAndDetails
            label="Terms and conditions"
            hasError
            errorMessage="You must accept the terms to continue."
        />
    ),
};

export const ReadOnly: DetailsStory = {
    render: () => (
        <SwitchWithLabelAndDetails label="Admin access" description="Managed by your organization." readOnly checked />
    ),
};

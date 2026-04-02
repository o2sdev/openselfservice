import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { InputWithDetails } from '@o2s/ui/elements/input';

import { FormFieldWrapper } from './FormFieldWrapper';

const meta = {
    title: 'Components/Forms/FormFieldWrapper',
    component: FormFieldWrapper,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof FormFieldWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Email address',
        children: <InputWithDetails label="Email" placeholder="john@example.com" />,
    },
};

export const WithRequired: Story = {
    args: {
        title: 'Email address',
        requiredLabel: 'required',
        children: <InputWithDetails label="Email" placeholder="john@example.com" />,
    },
};

export const WithOptional: Story = {
    args: {
        title: 'Nickname',
        optionalLabel: 'optional',
        children: <InputWithDetails label="Nickname" placeholder="Enter nickname" />,
    },
};

export const WithHtmlFor: Story = {
    args: {
        title: 'Full name',
        htmlFor: 'full-name-input',
        children: <InputWithDetails id="full-name-input" label="Full name" placeholder="John Doe" />,
    },
};

export const WithCustomClassName: Story = {
    args: {
        title: 'Address',
        className: 'bg-muted/50 p-4 rounded-lg',
        children: <InputWithDetails label="Address" placeholder="123 Main St" />,
    },
};

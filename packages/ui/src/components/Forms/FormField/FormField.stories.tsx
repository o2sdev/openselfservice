import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FormField } from './FormField';

const mockField = (name: string, value = '') => ({
    name,
    value,
    onChange: () => {},
    onBlur: () => {},
});

const meta = {
    title: 'Components/Forms/FormField',
    component: FormField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        field: mockField('email'),
        touched: {},
        errors: {},
        name: 'email',
        label: 'Email address',
        placeholder: 'john@example.com',
    },
};

export const Required: Story = {
    args: {
        field: mockField('email'),
        touched: {},
        errors: {},
        name: 'email',
        label: 'Email address',
        placeholder: 'john@example.com',
        isRequired: true,
        requiredLabel: 'required',
    },
};

export const WithError: Story = {
    args: {
        field: mockField('email', 'invalid'),
        touched: { email: true },
        errors: { email: 'Please enter a valid email address' },
        name: 'email',
        label: 'Email address',
        placeholder: 'john@example.com',
    },
};

export const WithDescription: Story = {
    args: {
        field: mockField('username'),
        touched: {},
        errors: {},
        name: 'username',
        label: 'Username',
        placeholder: 'Enter username',
        description: 'This will be your public display name.',
    },
};

export const WithValidations: Story = {
    args: {
        field: mockField('password', 'Hello1'),
        touched: {},
        errors: {},
        name: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        type: 'password',
        validations: [
            { type: 'minLength', label: 'At least 8 characters', pattern: '.{8,}' },
            { type: 'uppercase', label: 'One uppercase letter', pattern: '[A-Z]' },
            { type: 'lowercase', label: 'One lowercase letter', pattern: '[a-z]' },
            { type: 'number', label: 'One number', pattern: '[0-9]' },
        ],
    },
};

export const Disabled: Story = {
    args: {
        field: mockField('email', 'john@example.com'),
        touched: {},
        errors: {},
        name: 'email',
        label: 'Email address',
        disabled: true,
    },
};

export const ReadOnly: Story = {
    args: {
        field: mockField('email', 'john@example.com'),
        touched: {},
        errors: {},
        name: 'email',
        label: 'Email address',
        readOnly: true,
    },
};

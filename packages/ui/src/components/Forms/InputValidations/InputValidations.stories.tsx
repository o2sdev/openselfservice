'use client';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';

import { Input } from '@o2s/ui/elements/input';

import { InputValidations } from './InputValidations';

const meta = {
    title: 'Components/Forms/InputValidations',
    component: InputValidations,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof InputValidations>;

export default meta;

type Story = StoryObj<typeof meta>;

const passwordValidations = [
    { type: 'minLength', label: 'At least 8 characters', pattern: '.{8,}' },
    { type: 'uppercase', label: 'One uppercase letter', pattern: '[A-Z]' },
    { type: 'lowercase', label: 'One lowercase letter', pattern: '[a-z]' },
    { type: 'number', label: 'One number', pattern: '[0-9]' },
];

export const Default: Story = {
    args: {
        targetInputName: 'password',
        validations: passwordValidations,
        value: '',
    },
};

export const PartiallyValid: Story = {
    args: {
        targetInputName: 'password',
        validations: passwordValidations,
        value: 'Hello123',
    },
};

export const AllValid: Story = {
    args: {
        targetInputName: 'password',
        validations: passwordValidations,
        value: 'Hello123!',
    },
};

export const SingleValidation: Story = {
    args: {
        targetInputName: 'email',
        validations: [{ type: 'email', label: 'Valid email format', pattern: '^[^@]+@[^@]+\\.[^@]+$' }],
        value: 'test@example.com',
    },
};

export const Interactive: Story = {
    args: {
        targetInputName: 'password',
        validations: passwordValidations,
        value: '',
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState('');

        return (
            <div className="flex flex-col gap-4 w-80">
                <Input placeholder="Type a password..." value={value} onChange={(e) => setValue(e.target.value)} />
                <InputValidations {...args} value={value} />
            </div>
        );
    },
};

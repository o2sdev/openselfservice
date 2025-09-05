import type { Meta, StoryObj } from '@storybook/nextjs';
import { Search } from 'lucide-react';

import { Input, InputWithLabel } from './input';

const meta = {
    title: 'Elements/Input',
    component: InputWithLabel,
    tags: ['autodocs'],
} satisfies Meta<typeof InputWithLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Search',
        placeholder: 'Search for something...',
        adornment: <Search className="h-4 w-4" />,
        adornmentProps: {
            behavior: 'prepend',
        },
    },
    render: ({ label, placeholder, adornment, adornmentProps, ...props }) => (
        <Input placeholder={placeholder} adornment={adornment} adornmentProps={adornmentProps} {...props} />
    ),
};

export const WithLabel: Story = {
    args: {
        label: 'Search',
        placeholder: 'Search for something...',
        adornment: <Search className="h-4 w-4" />,
        adornmentProps: {
            behavior: 'prepend',
        },
    },
    render: ({ label, placeholder, adornment, adornmentProps, ...props }) => (
        <InputWithLabel
            label={label}
            placeholder={placeholder}
            adornment={adornment}
            adornmentProps={adornmentProps}
            {...props}
        />
    ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { PhoneInput } from './phone-input';
import { PhoneInputProps } from './phone-input.types';

const meta = {
    title: 'Elements/PhoneInput',
    component: PhoneInput,
    tags: ['autodocs'],
    args: {
        onChange: () => {},
    },
    argTypes: {
        defaultCountry: {
            control: 'select',
            options: ['GB', 'DE', 'PL'],
            description: 'Default country code for phone number formatting',
        },
        onChange: {
            action: 'changed',
            description: 'Callback function called when the phone number changes',
        },
    },
} satisfies Meta<typeof PhoneInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const PhoneInputWrapper = (props: PhoneInputProps & { initialValue?: string }) => {
    const { initialValue = '', ...rest } = props;
    const [value, setValue] = useState(initialValue);
    return (
        <div style={{ maxWidth: '400px' }}>
            <PhoneInput
                {...rest}
                value={value}
                onChange={(newValue, isValid) => {
                    setValue(newValue);
                    rest.onChange?.(newValue, isValid);
                }}
            />
        </div>
    );
};

export const Default: Story = {
    args: {
        label: 'Phone Number',
        placeholder: 'Enter phone number',
        defaultCountry: 'PL',
    },
    render: (args) => <PhoneInputWrapper {...args} initialValue="" />,
};

export const WithPolishNumber: Story = {
    args: {
        label: 'Phone Number (Poland)',
        placeholder: 'Enter Polish phone number',
        defaultCountry: 'PL',
        caption: 'Format: +48 XXX XXX XXX',
    },
    render: (args) => <PhoneInputWrapper {...args} initialValue="500500500" />,
};

export const WithGermanNumber: Story = {
    args: {
        label: 'Phone Number (Germany)',
        placeholder: 'Enter German phone number',
        defaultCountry: 'DE',
        caption: 'Format: +49 XXX XXXXXXX',
    },
    render: (args) => <PhoneInputWrapper {...args} initialValue="15012345678" />,
};

export const WithBritishNumber: Story = {
    args: {
        label: 'Phone Number (Great Britain)',
        placeholder: 'Enter British phone number',
        defaultCountry: 'GB',
        caption: 'Format: +44 XXXX XXXXXX',
    },
    render: (args) => <PhoneInputWrapper {...args} initialValue="7400123456" />,
};

const WithValidationWrapper = (props: PhoneInputProps) => {
    const [value, setValue] = useState('');
    return (
        <div style={{ maxWidth: '400px' }}>
            <PhoneInput
                {...props}
                value={value}
                onChange={(newValue, isValid) => {
                    setValue(newValue);
                    props.onChange?.(newValue, isValid);
                }}
            />
            <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                Try entering: 500500500 or +48 500 500 500
            </p>
        </div>
    );
};

export const WithValidation: Story = {
    args: {
        label: 'Phone Number',
        placeholder: 'Enter phone number',
        defaultCountry: 'PL',
        caption: 'The input will show validation errors for invalid numbers',
        isRequired: true,
        requiredLabel: 'required',
    },
    render: (args) => <WithValidationWrapper {...args} />,
};

export const Disabled: Story = {
    args: {
        label: 'Phone Number',
        placeholder: 'Enter phone number',
        defaultCountry: 'PL',
        disabled: true,
    },
    render: (args) => <PhoneInputWrapper {...args} initialValue="+48 500 500 500" />,
};

export const WithError: Story = {
    args: {
        label: 'Phone Number',
        placeholder: 'Enter phone number',
        defaultCountry: 'PL',
        hasError: true,
        errorMessage: 'This field is required',
    },
    render: (args) => <PhoneInputWrapper {...args} initialValue="" />,
};

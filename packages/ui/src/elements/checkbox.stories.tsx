import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useEffect, useState } from 'react';

import { Checkbox, CheckboxWithDetails, CheckboxWithLabel } from './checkbox';

const meta = {
    title: 'Elements/Checkbox',
    component: CheckboxWithLabel,
    tags: ['autodocs'],
} satisfies Meta<typeof CheckboxWithLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '',
        checked: false,
        disabled: false,
    },
    render: ({ label, checked, disabled, ...props }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isChecked, setIsChecked] = useState(checked);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return <Checkbox checked={isChecked} onCheckedChange={setIsChecked} disabled={disabled} {...props} />;
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Accept terms and conditions',
        checked: false,
        disabled: false,
    },
    render: ({ label, checked, disabled, ...props }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isChecked, setIsChecked] = useState(checked);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return (
            <CheckboxWithLabel
                label={label}
                checked={isChecked}
                onCheckedChange={setIsChecked}
                disabled={disabled}
                {...props}
            />
        );
    },
};

export const WithError: Story = {
    args: {
        label: 'Accept terms and conditions',
        checked: false,
        disabled: false,
        hasError: true,
    },
    render: ({ label, checked, disabled, hasError, ...props }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isChecked, setIsChecked] = useState(checked);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return (
            <CheckboxWithLabel
                label={label}
                checked={isChecked}
                onCheckedChange={setIsChecked}
                disabled={disabled}
                hasError={hasError}
                {...props}
            />
        );
    },
};

export const WithDetailsDescription: StoryObj<typeof CheckboxWithDetails> = {
    args: {
        label: 'Accept terms and conditions',
        checked: false,
        disabled: false,
        description: 'You must accept the terms and conditions to continue.',
    },
    render: ({ checked, ...props }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isChecked, setIsChecked] = useState(checked);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return <CheckboxWithDetails checked={isChecked} onCheckedChange={setIsChecked} {...props} />;
    },
};

export const WithDetailsError: StoryObj<typeof CheckboxWithDetails> = {
    args: {
        label: 'Accept terms and conditions',
        checked: false,
        disabled: false,
        hasError: true,
        errorMessage: 'You must accept the terms and conditions.',
    },
    render: ({ checked, ...props }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isChecked, setIsChecked] = useState(checked);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            setIsChecked(checked);
        }, [checked]);

        return <CheckboxWithDetails checked={isChecked} onCheckedChange={setIsChecked} {...props} />;
    },
};

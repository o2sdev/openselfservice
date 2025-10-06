import type { Meta, StoryObj } from '@storybook/nextjs';
import { useEffect, useState } from 'react';

import { Checkbox, CheckboxWithLabel } from './checkbox';

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

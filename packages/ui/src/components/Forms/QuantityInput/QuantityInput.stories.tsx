import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { QuantityInput } from './QuantityInput';

const meta: Meta<typeof QuantityInput> = {
    title: 'Components/Forms/QuantityInput',
    component: QuantityInput,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuantityInput>;

const DefaultWithState = (args: React.ComponentProps<typeof QuantityInput>) => {
    const [value, setValue] = useState(args.value);
    return <QuantityInput {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
    args: {
        value: 1,
        min: 1,
        labels: {
            increase: 'Increase quantity',
            decrease: 'Decrease quantity',
            quantity: 'Quantity',
        },
    },
    render: (args) => <DefaultWithState {...args} />,
};

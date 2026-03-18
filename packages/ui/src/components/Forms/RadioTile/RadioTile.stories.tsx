import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Typography } from '@o2s/ui/elements/typography';

import { RadioTileGroup } from './RadioTile';
import type { RadioTileOption } from './RadioTile.types';

const meta: Meta<typeof RadioTileGroup> = {
    title: 'Components/Forms/RadioTileGroup',
    component: RadioTileGroup,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioTileGroup>;

const shippingOptions: RadioTileOption[] = [
    {
        id: 'standard',
        label: 'Standard delivery',
        description: '3–5 business days',
        extra: <Typography variant="small">$5.99</Typography>,
    },
    {
        id: 'express',
        label: 'Express delivery',
        description: '1–2 business days',
        extra: <Typography variant="small">$14.99</Typography>,
    },
    {
        id: 'free',
        label: 'Free delivery',
        description: '5–7 business days',
    },
];

const DefaultWithState = (args: React.ComponentProps<typeof RadioTileGroup>) => {
    const [value, setValue] = useState('express');
    return <RadioTileGroup {...args} value={value} onValueChange={setValue} options={shippingOptions} />;
};

export const Default: Story = {
    render: (args) => <DefaultWithState {...args} />,
};

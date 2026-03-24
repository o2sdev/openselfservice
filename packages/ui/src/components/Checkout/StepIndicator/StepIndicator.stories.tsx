import type { Meta, StoryObj } from '@storybook/react';

import { StepIndicator } from './StepIndicator';

const meta: Meta<typeof StepIndicator> = {
    title: 'Components/Checkout/StepIndicator',
    component: StepIndicator,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

export const Default: Story = {
    args: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 2,
    },
};

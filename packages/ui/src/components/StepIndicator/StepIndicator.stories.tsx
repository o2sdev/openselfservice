import type { Meta, StoryObj } from '@storybook/react';

import { StepIndicator } from './StepIndicator';

const meta: Meta<typeof StepIndicator> = {
    title: 'Components/StepIndicator',
    component: StepIndicator,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

export const Default: Story = {
    args: {
        className: 'StepIndicator',
    },
};

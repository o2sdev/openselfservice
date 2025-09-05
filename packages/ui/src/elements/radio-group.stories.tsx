import type { Meta, StoryObj } from '@storybook/nextjs';

import { RadioGroup, RadioGroupItemWithLabel } from './radio-group';

const meta = {
    title: 'Elements/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="comfortable">
            <div className="space-y-2">
                <RadioGroupItemWithLabel value="default" label="Default" id="r1" />
                <RadioGroupItemWithLabel value="comfortable" label="Comfortable" id="r2" />
                <RadioGroupItemWithLabel value="compact" label="Compact" id="r3" />
                <RadioGroupItemWithLabel value="disabled" label="Disabled option" id="r4" disabled />
            </div>
        </RadioGroup>
    ),
};

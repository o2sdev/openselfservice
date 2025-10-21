import type { Meta, StoryObj } from '@storybook/nextjs';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta = {
    title: 'Elements/ToggleGroup',
    component: ToggleGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'single',
        variant: 'default',
        size: 'default',
    },
    render: ({ type, variant, size }) => (
        <div className="space-y-8">
            <div className="space-y-2">
                <ToggleGroup type={type} variant={variant} size={size}>
                    <ToggleGroupItem value="left" aria-label="Align left">
                        <AlignLeft className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Align center">
                        <AlignCenter className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Align right">
                        <AlignRight className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import { Bold } from 'lucide-react';

import { Toggle } from './toggle';

const meta = {
    title: 'Elements/Toggle',
    component: Toggle,
    tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Toggle',
        variant: 'default',
        size: 'default',
        disabled: false,
    },
    render: ({ variant, size, disabled, children }) => (
        <Toggle variant={variant} size={size} disabled={disabled} aria-label="Toggle example">
            <Bold className="h-4 w-4" />
            {children}
        </Toggle>
    ),
};

export const Examples: Story = {
    render: () => (
        <div className="space-y-8">
            <div className="space-y-2">
                <h4 className="text-sm font-medium">Toggle Variants</h4>
                <div className="flex items-center space-x-2">
                    <Toggle variant="default" aria-label="Toggle default">
                        <Bold className="h-4 w-4" />
                        Default
                    </Toggle>
                    <Toggle variant="outline" aria-label="Toggle outline">
                        <Bold className="h-4 w-4" />
                        Outline
                    </Toggle>
                    <Toggle variant="solid" aria-label="Toggle solid">
                        <Bold className="h-4 w-4" />
                        Solid
                    </Toggle>
                </div>
            </div>

            <div className="space-y-2">
                <h4 className="text-sm font-medium">Toggle Sizes</h4>
                <div className="flex items-center space-x-2">
                    <Toggle size="sm" aria-label="Toggle small">
                        <Bold className="h-4 w-4" />
                        Small
                    </Toggle>
                    <Toggle size="default" aria-label="Toggle default">
                        <Bold className="h-4 w-4" />
                        Default
                    </Toggle>
                    <Toggle size="lg" aria-label="Toggle large">
                        <Bold className="h-4 w-4" />
                        Large
                    </Toggle>
                </div>
            </div>
        </div>
    ),
};

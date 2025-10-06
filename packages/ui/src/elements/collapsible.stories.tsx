import type { Meta, StoryObj } from '@storybook/nextjs';
import { ChevronsUpDown } from 'lucide-react';

import { Button } from './button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';

const meta = {
    title: 'Elements/Collapsible',
    component: Collapsible,
    tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Collapsible className="w-[350px]">
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/icons</div>
            </CollapsibleContent>
        </Collapsible>
    ),
};

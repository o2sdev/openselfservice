import type { Meta, StoryObj } from '@storybook/nextjs';
import { Info } from 'lucide-react';

import { Button } from './button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const meta = {
    title: 'Elements/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover Me</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>This is a tooltip</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};

export const WithIconTrigger: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Info className="h-4 w-4 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Additional information</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};

export const WithOfset: Story = {
    render: () => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">More Space</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={30}>
                    <p>This tooltip has more space from the trigger</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
};

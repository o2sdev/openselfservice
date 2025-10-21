import type { Meta, StoryObj } from '@storybook/nextjs';
import { AlertCircle, HelpCircle, Info } from 'lucide-react';
import React from 'react';

import { Button } from '@o2s/ui/elements/button';
import { Typography } from '@o2s/ui/elements/typography';

import { TooltipHover } from './TooltipHover';

const meta = {
    title: 'Components/TooltipHover',
    component: TooltipHover,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TooltipHover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        trigger: (setIsOpen) => (
            <Button variant="outline" onClick={() => setIsOpen(true)}>
                Hover me
            </Button>
        ),
        content: <p>This is a tooltip</p>,
    },
};

export const WithIcon: Story = {
    args: {
        trigger: (setIsOpen) => (
            <Info
                className="h-5 w-5 text-muted-foreground cursor-help"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            />
        ),
        content: <p>Helpful information</p>,
    },
};

export const WithRichContent: Story = {
    args: {
        trigger: (setIsOpen) => (
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
                <HelpCircle className="h-4 w-4 mr-2" />
                Need help?
            </Button>
        ),
        content: (
            <div className="max-w-xs">
                <Typography variant="subtitle">Help Information</Typography>
                <Typography variant="small" className="mt-2">
                    This is a more detailed explanation with rich content.
                </Typography>
                <ul className="mt-2 list-disc pl-4 text-sm">
                    <li>First item of information</li>
                    <li>Second item of information</li>
                    <li>Third item of information</li>
                </ul>
            </div>
        ),
    },
};

export const WithTextTrigger: Story = {
    args: {
        trigger: (setIsOpen) => (
            <span
                className="underline cursor-help text-muted-foreground"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                Hover over this text
            </span>
        ),
        content: <p>Additional information about this text</p>,
    },
};

export const WithWarning: Story = {
    args: {
        trigger: (setIsOpen) => (
            <div className="flex items-center gap-1 cursor-help" onClick={() => setIsOpen(!setIsOpen)}>
                <AlertCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Important notice</span>
            </div>
        ),
        content: (
            <div className="max-w-xs">
                <Typography variant="small" className="text-destructive font-semibold">
                    Warning
                </Typography>
                <Typography variant="small" className="mt-1">
                    This action cannot be undone. Please proceed with caution.
                </Typography>
            </div>
        ),
    },
};

export const ProgrammaticallyControlled: Story = {
    args: {
        trigger: (setIsOpen) => (
            <Button variant="outline" onClick={() => setIsOpen(true)}>
                Hover me
            </Button>
        ),
        content: <p>This is a tooltip</p>,
    },
    render: () => {
        // This example shows how to programmatically control the tooltip
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isControlledOpen, setIsControlledOpen] = React.useState(false);

        return (
            <div className="flex flex-col items-center gap-4">
                <Button onClick={() => setIsControlledOpen(!isControlledOpen)}>
                    {isControlledOpen ? 'Hide Tooltip' : 'Show Tooltip'}
                </Button>

                <div className="mt-8">
                    <TooltipHover
                        trigger={(setIsOpen) => {
                            // Sync the external state with the tooltip's internal state
                            React.useEffect(() => {
                                setIsOpen(isControlledOpen);
                            }, [setIsOpen]);

                            return <Button variant="outline">Target Element</Button>;
                        }}
                        content={<p>This tooltip is controlled by the button above</p>}
                    />
                </div>
            </div>
        );
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';

import { useToast } from '../hooks/use-toast';

import { Button } from './button';
import { Toast, ToastAction, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast';
import { Toaster } from './toaster';

const meta = {
    title: 'Elements/Toast',
    component: Toast,
    tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setOpen] = useState(false);

        return (
            <div className="space-y-8">
                <div className="space-y-2">
                    <h4 className="text-sm font-medium">Basic Toast</h4>
                    <div className="flex flex-col gap-2">
                        <Button variant="outline" onClick={() => setOpen(true)}>
                            Show Toast
                        </Button>

                        <ToastProvider swipeDirection="right">
                            <Toast open={open} onOpenChange={setOpen}>
                                <div className="grid gap-1">
                                    <ToastTitle>Toast Title</ToastTitle>
                                    <ToastDescription>
                                        This is a toast message that provides information to the user.
                                    </ToastDescription>
                                </div>
                            </Toast>
                            <ToastViewport />
                        </ToastProvider>
                    </div>
                </div>
            </div>
        );
    },
};

// This component is used to demonstrate the Toaster component
const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <div className="space-x-4">
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: 'Default Toast',
                        description: 'This is a default toast notification.',
                    });
                }}
            >
                Show Default Toast
            </Button>

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: 'destructive',
                        title: 'Error Toast',
                        description: 'Something went wrong!',
                    });
                }}
            >
                Show Error Toast
            </Button>

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: 'Toast with Action',
                        description: 'This toast has an action button.',
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    });
                }}
            >
                Show Toast with Action
            </Button>

            <Toaster />
        </div>
    );
};

export const WithToaster: Story = {
    render: () => <ToastDemo />,
};

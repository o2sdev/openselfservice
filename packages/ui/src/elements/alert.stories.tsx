import type { Meta, StoryObj } from '@storybook/nextjs';
import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from './alert';

const meta = {
    title: 'Elements/Alert',
    component: Alert,
    tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
    },
    render: ({ variant }) => (
        <Alert variant={variant}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
    ),
};

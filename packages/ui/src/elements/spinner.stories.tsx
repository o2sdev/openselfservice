import type { Meta, StoryObj } from '@storybook/nextjs';

import { Spinner } from './spinner';

const meta = {
    title: 'Elements/Spinner',
    component: Spinner,
    tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'medium',
    },
    render: ({ size }) => <Spinner size={size} />,
};
export const WithText: Story = {
    args: {
        size: 'medium',
    },
    render: ({ size }) => (
        <>
            <Spinner size={size}>
                <span className="mt-2 text-sm text-muted-foreground">Loading...</span>
            </Spinner>
        </>
    ),
};

import type { Meta, StoryObj } from '@storybook/nextjs';

import { Card, CardContent } from './card';
import { LoadingOverlay } from './loading-overlay';

const meta = {
    title: 'Elements/LoadingOverlay',
    component: LoadingOverlay,
    tags: ['autodocs'],
} satisfies Meta<typeof LoadingOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isActive: true,
        size: 'large',
        children: (
            <Card className="h-[200px]">
                <CardContent className="flex items-center justify-center h-full">
                    <p>Content underneath the loading overlay</p>
                </CardContent>
            </Card>
        ),
    },
};

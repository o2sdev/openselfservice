import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '@o2s/ui/elements/button';

import { ActionList } from './ActionList';

const meta = {
    title: 'Components/ActionList',
    component: ActionList,
    tags: ['autodocs'],
} satisfies Meta<typeof ActionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        triggerVariant: 'outline',
        actions: [
            <Button key="primary" variant="primary">
                Primary Action
            </Button>,
            <Button key="secondary" variant="secondary">
                Secondary Action
            </Button>,
            <Button key="tertiary1" variant="outline">
                Tertiary Action 1
            </Button>,
            <Button key="tertiary2" variant="ghost">
                Tertiary Action 2
            </Button>,
        ],
    },
};

export const SingleAction: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        actions: [
            <Button key="primary" variant="primary">
                Single Action
            </Button>,
        ],
    },
};

export const TwoActions: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        actions: [
            <Button key="primary" variant="primary">
                Primary Action
            </Button>,
            <Button key="secondary" variant="secondary">
                Secondary Action
            </Button>,
        ],
    },
};

export const WithDifferentVariant: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        triggerVariant: 'destructive',
        actions: [
            <Button key="primary" variant="destructive">
                Primary Action
            </Button>,
            <Button key="secondary" variant="secondary">
                Secondary Action
            </Button>,
            <Button key="tertiary1" variant="outline">
                Tertiary Action 1
            </Button>,
            <Button key="tertiary2" variant="ghost">
                Tertiary Action 2
            </Button>,
        ],
    },
};

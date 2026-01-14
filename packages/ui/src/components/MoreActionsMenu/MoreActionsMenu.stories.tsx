import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Link } from '@o2s/ui/elements/link';

import { MoreActionsMenu } from './MoreActionsMenu';

const meta = {
    title: 'Components/MoreActionsMenu',
    component: MoreActionsMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof MoreActionsMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        triggerVariant: 'ghost',
        triggerIcon: 'MoreVertical',
        actions: [
            <Link key="primary" variant="primary">
                Primary Action
            </Link>,
            <Link key="secondary" variant="secondary">
                Secondary Action
            </Link>,
        ],
    },
};

export const SingleAction: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        triggerVariant: 'outline',
        actions: [
            <Link key="primary" variant="primary">
                Single Action
            </Link>,
        ],
    },
};

export const TwoActions: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        triggerVariant: 'destructive',
        actions: [
            <Link key="primary" variant="primary">
                Primary Action
            </Link>,
            <Link key="secondary" variant="secondary">
                Secondary Action
            </Link>,
        ],
    },
};

export const WithDifferentVariant: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        triggerVariant: 'ghost',
        triggerIcon: 'MoreVertical',
        actions: [
            <Link key="primary" variant="primary">
                Primary Action
            </Link>,
            <Link key="secondary" variant="secondary">
                Secondary Action
            </Link>,
            <Link key="tertiary" variant="tertiary">
                Tertiary Action
            </Link>,
            <Link key="ghost" variant="ghost">
                Ghost Action
            </Link>,
        ],
    },
};

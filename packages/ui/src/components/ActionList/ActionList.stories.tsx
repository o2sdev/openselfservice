import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from '@o2s/ui/elements/button';
import { Link } from '@o2s/ui/elements/link';

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
        visibleActions: [
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
        dropdownActions: [
            <Link key="primary" variant="primary">
                Primary Action
            </Link>,
            <Link key="secondary" variant="secondary">
                Secondary Action
            </Link>,
            <Link key="tertiary1" variant="outline">
                Tertiary Action 1
            </Link>,
            <Link key="tertiary2" variant="ghost">
                Tertiary Action 2
            </Link>,
        ],
    },
};

export const SingleAction: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        visibleActions: [
            <Button key="primary" variant="primary">
                Single Action
            </Button>,
        ],
        dropdownActions: [
            <Link key="primary" variant="primary">
                Single Action
            </Link>,
        ],
    },
};

export const TwoActions: Story = {
    args: {
        showMoreLabel: 'Show more actions',
        visibleActions: [
            <Button key="primary" variant="primary">
                Primary Action
            </Button>,
            <Button key="secondary" variant="secondary">
                Secondary Action
            </Button>,
        ],
        dropdownActions: [
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
        triggerVariant: 'destructive',
        visibleActions: [
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
        dropdownActions: [
            <Link key="primary" variant="primary">
                Primary Action
            </Link>,
            <Link key="secondary" variant="secondary">
                Secondary Action
            </Link>,
            <Link key="tertiary1" variant="outline">
                Tertiary Action 1
            </Link>,
            <Link key="tertiary2" variant="ghost">
                Tertiary Action 2
            </Link>,
        ],
    },
};

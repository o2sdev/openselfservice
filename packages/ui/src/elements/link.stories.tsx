import type { Meta, StoryObj } from '@storybook/nextjs';

import { Link } from './link';

const meta = {
    title: 'Elements/Link',
    component: Link,
    tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: 'https://example.com',
        children: 'Example Link',
        target: '_blank',
        rel: 'noopener noreferrer',
    },
};

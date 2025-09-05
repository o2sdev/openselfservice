import type { Meta, StoryObj } from '@storybook/nextjs';

import { Loading } from './Loading';

const meta = {
    title: 'Components/Loading',
    component: Loading,
    tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        bars: 2,
        variant: 'component',
    },
};

export const Responsive: Story = {
    args: {
        bars: [4, 2], // 4 bars on desktop, 2 on mobile
        variant: 'component',
    },
};

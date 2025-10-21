import type { Meta, StoryObj } from '@storybook/nextjs';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta = {
    title: 'Elements/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'John Doe',
        email: 'john.doe@example.com',
    },
    render: ({ name, email }) => (
        <Avatar name={name} email={email}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback name={name || ''} />
        </Avatar>
    ),
};

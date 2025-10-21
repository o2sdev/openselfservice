import type { Meta, StoryObj } from '@storybook/nextjs';

import { Author } from './Author';

const meta = {
    title: 'Components/Author',
    component: Author,
    tags: ['autodocs'],
} satisfies Meta<typeof Author>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'John Doe',
        avatar: 'https://github.com/shadcn.png',
        position: 'Software Engineer',
    },
};

export const WithoutAvatar: Story = {
    args: {
        name: 'Jane Smith',
        position: 'Product Manager',
    },
};

export const WithoutPosition: Story = {
    args: {
        name: 'Alex Johnson',
        avatar: 'https://github.com/shadcn.png',
    },
};

export const NameOnly: Story = {
    args: {
        name: 'Sam Wilson',
    },
};

export const LongName: Story = {
    args: {
        name: 'Alexandra Johnson-Williams',
        avatar: 'https://github.com/shadcn.png',
        position: 'Senior Software Engineer',
    },
};

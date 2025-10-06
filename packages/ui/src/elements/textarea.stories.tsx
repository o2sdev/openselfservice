import type { Meta, StoryObj } from '@storybook/nextjs';

import { Textarea, TextareaWithLabel } from './textarea';

const meta = {
    title: 'Elements/Textarea',
    component: TextareaWithLabel,
    tags: ['autodocs'],
} satisfies Meta<typeof TextareaWithLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Feedback',
        placeholder: 'Type your message here.',
        disabled: false,
    },
    render: ({ disabled, placeholder }) => <Textarea placeholder={placeholder} disabled={disabled} />,
};

export const WithLabel: Story = {
    args: {
        label: 'Feedback',
        placeholder: 'Type your message here.',
        disabled: false,
    },
    render: ({ disabled, placeholder, label }) => (
        <TextareaWithLabel label={label} placeholder={placeholder} disabled={disabled} />
    ),
};

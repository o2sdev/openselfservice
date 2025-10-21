import type { Meta, StoryObj } from '@storybook/nextjs';

import { Typography } from './typography';

const meta = {
    title: 'Elements/Typography',
    component: Typography,
    tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Typography Example',
        variant: 'p',
    },
    render: ({ variant, children }) => <Typography variant={variant}>{children}</Typography>,
};

export const Headings: Story = {
    render: () => (
        <div className="space-y-4">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
        </div>
    ),
};

export const HighlightedText: Story = {
    render: () => (
        <div className="space-y-4">
            <Typography variant="highlightedBig">Highlighted Big</Typography>
            <Typography variant="highlightedMedium">Highlighted Medium</Typography>
            <Typography variant="highlightedSmall">Highlighted Small</Typography>
        </div>
    ),
};

export const TextStyles: Story = {
    render: () => (
        <div className="space-y-4">
            <Typography variant="subtitle">Subtitle Text</Typography>
            <Typography variant="small">Small Text</Typography>
            <Typography variant="body">Body Text</Typography>
            <Typography variant="large">Large Text</Typography>
            <Typography variant="p">Paragraph Text</Typography>
            <Typography variant="lead">Lead Text</Typography>
        </div>
    ),
};

export const SpecialFormats: Story = {
    render: () => (
        <div className="space-y-4">
            <Typography variant="blockquote">
                This is a blockquote that can be used to highlight important information or quotes.
            </Typography>
            <Typography variant="inlineCode">const example = inline code;</Typography>
            <Typography variant="code">const codeBlock = code block;</Typography>
        </div>
    ),
};

export const Lists: Story = {
    render: () => (
        <div className="space-y-4">
            <Typography variant="list">
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
            </Typography>

            <Typography variant="listOrdered">
                <li>Ordered list item one</li>
                <li>Ordered list item two</li>
                <li>Ordered list item three</li>
            </Typography>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/nextjs';

import { RichText } from './RichText';

const meta = {
    title: 'Components/RichText',
    component: RichText,
    tags: ['autodocs'],
} satisfies Meta<typeof RichText>;

export default meta;

type Story = StoryObj<typeof meta>;

const basicMarkdown = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4

This is a paragraph with **bold text** and *italic text*.

[This is a link](https://example.com)

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3
`;

const comprehensiveMarkdown = `
# Rich Text Component

This component renders Markdown content with custom styling.

## Text Formatting

You can use **bold text** or *italic text* or even ***bold and italic text***.

## Links

[This is a link to example.com](https://example.com)

## Lists

### Unordered Lists

- Item 1
- Item 2
  - Nested item 1
  - Nested item 2
- Item 3

### Ordered Lists

1. First item
2. Second item
3. Third item

## Blockquotes

> This is a blockquote. It can be used to highlight important information or quotes.

## Code

Inline code: \`const example = "Hello World";\`

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

## Horizontal Rule

---

## Images

![Alt text](https://via.placeholder.com/150)
`;

export const Default: Story = {
    args: {
        content: basicMarkdown,
    },
};

export const WithSmallFontSize: Story = {
    args: {
        content: basicMarkdown,
        baseFontSize: 'small',
    },
};

export const WithLargeFontSize: Story = {
    args: {
        content: basicMarkdown,
        baseFontSize: 'large',
    },
};

export const WithCustomStartingHeadingLevel: Story = {
    args: {
        content: basicMarkdown,
        startingHeadingLevel: 2,
    },
};

export const WithCustomClassName: Story = {
    args: {
        content: basicMarkdown,
        className: 'text-blue-500',
    },
};

export const Comprehensive: Story = {
    args: {
        content: comprehensiveMarkdown,
    },
};

export const Empty: Story = {
    args: {
        content: undefined,
    },
};

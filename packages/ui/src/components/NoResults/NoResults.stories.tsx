import type { Meta, StoryObj } from '@storybook/nextjs';

import { NoResults } from './NoResults';

const meta = {
    title: 'Components/NoResults',
    component: NoResults,
    tags: ['autodocs'],
} satisfies Meta<typeof NoResults>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'No results found',
        description:
            "<p>We couldn't find any results matching your search criteria. Please try again with different keywords.</p>",
    },
};

export const WithoutDescription: Story = {
    args: {
        title: 'No results found',
    },
};

export const WithLongTitle: Story = {
    args: {
        title: "We couldn't find any results matching your search criteria",
        description: '<p>Please try again with different keywords or filters.</p>',
    },
};

export const WithRichTextDescription: Story = {
    args: {
        title: 'No results found',
        description:
            "<p>We couldn't find any results matching your search criteria. Please try one of the following:</p><ul><li>Check your spelling</li><li>Use more general keywords</li><li>Try different filters</li></ul>",
    },
};

export const ForFilteredContent: Story = {
    args: {
        title: 'No matching products',
        description: '<p>No products match the selected filters. Please try adjusting your filter criteria.</p>',
    },
};

export const ForEmptyState: Story = {
    args: {
        title: 'Your cart is empty',
        description: "<p>You haven't added any items to your cart yet. Browse our products to get started.</p>",
    },
};

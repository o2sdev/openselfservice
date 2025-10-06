import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useState } from 'react';

import { Pagination } from './Pagination';

// Wrapper component to handle state for the pagination
const PaginationWrapper: React.FC<{
    total: number;
    limit: number;
    initialOffset?: number;
    disabled?: boolean;
}> = ({ total, limit, initialOffset = 0, disabled = false }) => {
    const [offset, setOffset] = useState(initialOffset);

    const handlePageChange = (page: number) => {
        const newOffset = (page - 1) * limit;
        setOffset(newOffset);
    };

    return (
        <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onChange={handlePageChange}
            disabled={disabled}
            prev="Previous page"
            next="Next page"
            legend="Showing {total} results across {totalPages} pages"
            selectPage="Select page"
        />
    );
};

const meta = {
    title: 'Components/Pagination',
    component: PaginationWrapper,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof PaginationWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        total: 100,
        limit: 10,
    },
};

export const FewPages: Story = {
    args: {
        total: 25,
        limit: 10,
    },
};

export const ManyPages: Story = {
    args: {
        total: 500,
        limit: 10,
    },
};

export const LargeLimit: Story = {
    args: {
        total: 100,
        limit: 25,
    },
};

export const WithInitialOffset: Story = {
    args: {
        total: 100,
        limit: 10,
        initialOffset: 30, // Start on page 4
    },
};

export const Disabled: Story = {
    args: {
        total: 100,
        limit: 10,
        disabled: true,
    },
};

export const SinglePage: Story = {
    args: {
        total: 10,
        limit: 10,
    },
    render: ({ total, limit }) => (
        <div>
            <p className="mb-4">When there is only one page, the pagination component does not render:</p>
            <PaginationWrapper total={total} limit={limit} />
        </div>
    ),
};

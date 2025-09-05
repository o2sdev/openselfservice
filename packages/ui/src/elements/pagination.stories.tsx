import type { Meta, StoryObj } from '@storybook/nextjs';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './pagination';

const meta = {
    title: 'Elements/Pagination',
    component: Pagination,
    tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious aria-label="Previous" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext aria-label="Next" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    ),
};

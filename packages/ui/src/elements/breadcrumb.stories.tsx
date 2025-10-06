import type { Meta, StoryObj } from '@storybook/nextjs';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from './breadcrumb';

const meta = {
    title: 'Elements/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Category</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
};

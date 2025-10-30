import type { Meta, StoryObj } from '@storybook/react';

import { DataList } from './DataList';
import type { DataListColumnConfig } from './DataList.types';

const meta: Meta<typeof DataList> = {
    title: 'Components/DataList',
    component: DataList,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataList>;

type Ticket = {
    id: string;
    topic: { label: string; value: string };
    type: { label: string; value: string };
    status: { label: string; value: string };
    updatedAt: string;
    detailsUrl: string;
};

const sampleTickets: Ticket[] = [
    {
        id: '1',
        topic: { label: 'Login Issue', value: 'login-issue' },
        type: { label: 'Technical', value: 'technical' },
        status: { label: 'Open', value: 'open' },
        updatedAt: '2024-01-15',
        detailsUrl: '/tickets/1',
    },
    {
        id: '2',
        topic: { label: 'Billing Question', value: 'billing' },
        type: { label: 'Billing', value: 'billing' },
        status: { label: 'In Progress', value: 'in_progress' },
        updatedAt: '2024-01-14',
        detailsUrl: '/tickets/2',
    },
    {
        id: '3',
        topic: { label: 'Feature Request', value: 'feature' },
        type: { label: 'General', value: 'general' },
        status: { label: 'Closed', value: 'closed' },
        updatedAt: '2024-01-13',
        detailsUrl: '/tickets/3',
    },
];

const ticketColumns: DataListColumnConfig<Ticket>[] = [
    {
        id: 'topic',
        title: 'Topic',
        type: 'text',
        cellClassName: 'truncate max-w-[200px]',
    },
    {
        id: 'type',
        title: 'Type',
        type: 'text',
    },
    {
        id: 'status',
        title: 'Status',
        type: 'badge',
        variant: (value: string) => {
            switch (value) {
                case 'open':
                    return 'default';
                case 'in_progress':
                    return 'secondary';
                case 'closed':
                    return 'outline';
                default:
                    return 'default';
            }
        },
    },
    {
        id: 'updatedAt',
        title: 'Last Updated',
        type: 'date',
    },
];

type Order = {
    id: string;
    date: string;
    status: { label: string; value: string };
    total: { value: number; currency: string };
};

const sampleOrders: Order[] = [
    {
        id: '001',
        date: '2024-01-15',
        status: { label: 'Completed', value: 'completed' },
        total: { value: 299.99, currency: 'USD' },
    },
    {
        id: '002',
        date: '2024-01-14',
        status: { label: 'Pending', value: 'pending' },
        total: { value: 149.5, currency: 'USD' },
    },
];

const orderColumns: DataListColumnConfig<Order>[] = [
    { id: 'id', title: 'Order ID', type: 'text' },
    { id: 'date', title: 'Date', type: 'date' },
    {
        id: 'status',
        title: 'Status',
        type: 'badge',
        variant: (value: string) => (value === 'completed' ? 'default' : 'secondary'),
    },
    {
        id: 'total',
        title: 'Total',
        type: 'price',
        headerClassName: 'text-right',
        cellClassName: 'text-right',
    },
];

export const BasicTextColumns: Story = {
    args: {
        data: sampleTickets,
        columns: [
            { id: 'topic', title: 'Topic', type: 'text' },
            { id: 'type', title: 'Type', type: 'text' },
            { id: 'updatedAt', title: 'Date', type: 'text' },
        ],
    },
};

export const WithBadges: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
    },
};

export const WithActions: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        actions: {
            title: 'Actions',
            render: (_item) => <button className="text-blue-600 hover:underline">View Details →</button>,
        },
    },
};

export const WithPriceColumns: Story = {
    args: {
        data: sampleOrders as Record<string, unknown>[],
        columns: orderColumns as DataListColumnConfig<Record<string, unknown>>[],
    },
};

export const CustomCellRenderer: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: [
            {
                id: 'topic',
                title: 'Topic',
                type: 'custom',
                render: (value: unknown, item: Record<string, unknown>) => {
                    const topicValue = value as { label: string };
                    return (
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">{topicValue.label}</span>
                            <span className="text-xs text-gray-500">#{String(item.id)}</span>
                        </div>
                    );
                },
            },
            { id: 'type', title: 'Type', type: 'text' },
            {
                id: 'status',
                title: 'Status',
                type: 'badge',
                variant: (_value: string) => 'default' as const,
            },
        ] as DataListColumnConfig<Record<string, unknown>>[],
    },
};

export const EmptyState: Story = {
    args: {
        data: [] as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
    },
};

export const WithCustomStyling: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns.map((col) => ({
            ...col,
            headerClassName: 'bg-gray-100 font-bold',
            cellClassName: 'py-4',
        })) as DataListColumnConfig<Record<string, unknown>>[],
        className: 'border-2 border-gray-300',
    },
};

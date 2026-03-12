import type { Meta, StoryObj } from '@storybook/react';
import { Download, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@o2s/ui/elements/button';

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

export const WithRowSelection: Story = {
    render: () => {
        const Component = () => {
            const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

            return (
                <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                        {selectedRows.size} of {sampleTickets.length} row(s) selected.
                    </div>
                    <DataList
                        data={sampleTickets as Record<string, unknown>[]}
                        columns={ticketColumns as DataListColumnConfig<Record<string, unknown>>[]}
                        enableRowSelection={true}
                        selectedRows={selectedRows}
                        onSelectionChange={setSelectedRows}
                    />
                </div>
            );
        };

        return <Component />;
    },
};

export const WithRowSelectionAndBulkActions: Story = {
    render: () => {
        const Component = () => {
            const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

            const selectedItems = sampleTickets.filter((ticket, index) => selectedRows.has(ticket.id || index));

            const handleBulkDelete = () => {
                console.log('Deleting tickets:', selectedItems);
                setSelectedRows(new Set());
            };

            const handleBulkExport = () => {
                console.log('Exporting tickets:', selectedItems);
            };

            return (
                <div className="space-y-4">
                    {selectedRows.size > 0 && (
                        <div className="flex items-center justify-between gap-4 rounded-md border bg-muted/50 p-4">
                            <span className="text-sm text-muted-foreground">
                                {selectedRows.size} {selectedRows.size === 1 ? 'ticket' : 'tickets'} selected
                            </span>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" onClick={handleBulkExport}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Export
                                </Button>
                                <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                </Button>
                            </div>
                        </div>
                    )}
                    <DataList
                        data={sampleTickets as Record<string, unknown>[]}
                        columns={ticketColumns as DataListColumnConfig<Record<string, unknown>>[]}
                        enableRowSelection={true}
                        selectedRows={selectedRows}
                        onSelectionChange={setSelectedRows}
                    />
                </div>
            );
        };

        return <Component />;
    },
};

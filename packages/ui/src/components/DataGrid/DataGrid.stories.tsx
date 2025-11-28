import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Download } from 'lucide-react';

import { Button } from '@o2s/ui/elements/button';

import type { DataListColumnConfig } from '../DataList/DataList.types';

import { DataGrid } from './DataGrid';
import type { DataGridProps } from './DataGrid.types';

const meta: Meta<typeof DataGrid> = {
    title: 'Components/DataGrid',
    component: DataGrid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

type Ticket = {
    id: string;
    topic: { label: string; value: string };
    type: { label: string; value: string };
    status: { label: string; value: string };
    updatedAt: { label: string; value: string };
    serialNumber: { label: string; value: string };
    problemDescription: { label: string; value: string };
    serviceman: { label: string; value: string; avatar?: string };
    location: { label: string; value: string };
    completionDate: { label: string; value: string };
    detailsUrl: string;
};

const sampleTickets: Ticket[] = [
    {
        id: 'SR-12345',
        topic: { label: 'Service Request', value: 'service-request' },
        type: { label: 'Technical', value: 'technical' },
        status: { label: 'Completed', value: 'completed' },
        updatedAt: { label: '29.10.2025', value: '2025-10-29' },
        serialNumber: { label: 'BM-2024-001234', value: 'BM-2024-001234' },
        problemDescription: {
            label: 'Engine loses power during operation. Unusual sounds are heard from the engine compartment.',
            value: 'engine-issue',
        },
        serviceman: { label: 'John Smith', value: 'john-smith', avatar: 'JS' },
        location: { label: 'New York, 123 Main Street', value: 'new-york' },
        completionDate: { label: '29.10.2025', value: '2025-10-29' },
        detailsUrl: '/tickets/SR-12345',
    },
    {
        id: 'SR-12346',
        topic: { label: 'Service Request', value: 'service-request' },
        type: { label: 'Maintenance', value: 'maintenance' },
        status: { label: 'In Progress', value: 'in_progress' },
        updatedAt: { label: '28.10.2025', value: '2025-10-28' },
        serialNumber: { label: 'BM-2024-001235', value: 'BM-2024-001235' },
        problemDescription: {
            label: 'Oil and filter replacement according to the service schedule.',
            value: 'maintenance',
        },
        serviceman: { label: 'Mike Johnson', value: 'mike-johnson', avatar: 'MJ' },
        location: { label: 'Los Angeles, 456 Oak Avenue', value: 'los-angeles' },
        completionDate: { label: '28.10.2025', value: '2025-10-28' },
        detailsUrl: '/tickets/SR-12346',
    },
    {
        id: 'SR-12347',
        topic: { label: 'Service Request', value: 'service-request' },
        type: { label: 'Technical', value: 'technical' },
        status: { label: 'Pending', value: 'pending' },
        updatedAt: { label: '27.10.2025', value: '2025-10-27' },
        serialNumber: { label: 'BM-2024-001236', value: 'BM-2024-001236' },
        problemDescription: {
            label: 'Cooling system issues. Temperature exceeds norms.',
            value: 'cooling-issue',
        },
        serviceman: { label: 'Mike Johnson', value: 'mike-johnson', avatar: 'MJ' },
        location: { label: 'Chicago, 789 Elm Street', value: 'chicago' },
        completionDate: { label: '27.10.2025', value: '2025-10-27' },
        detailsUrl: '/tickets/SR-12347',
    },
];

const ticketColumns: DataListColumnConfig<Ticket>[] = [
    {
        id: 'topic',
        title: 'Topic',
        type: 'text',
    },
    {
        id: 'id',
        title: 'ID',
        type: 'text',
    },
    {
        id: 'status',
        title: 'Status',
        type: 'badge',
        variant: (value: string) => {
            switch (value) {
                case 'completed':
                    return 'default';
                case 'in_progress':
                    return 'secondary';
                case 'pending':
                    return 'outline';
                default:
                    return 'default';
            }
        },
    },
    {
        id: 'serialNumber',
        title: 'Serial Number',
        type: 'text',
    },
    {
        id: 'problemDescription',
        title: 'Problem Description',
        type: 'text',
    },
    {
        id: 'serviceman',
        title: 'Serviceman',
        type: 'text',
    },
    {
        id: 'location',
        title: 'Location',
        type: 'text',
    },
    {
        id: 'completionDate',
        title: 'Completion Date',
        type: 'date',
    },
    {
        id: 'updatedAt',
        title: 'Updated At',
        type: 'date',
    },
];

export const BasicGrid: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        cardHeaderSlots: {
            left: 'id',
            right: 'status',
            bottom: 'updatedAt',
        },
    } as DataGridProps<Record<string, unknown>>,
};

export const WithActions: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        cardHeaderSlots: {
            left: 'id',
            right: 'status',
            bottom: 'updatedAt',
        },
        actions: {
            title: '',
            render: (_item) => (
                <Button variant="link" className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    View Details
                </Button>
            ),
        },
    } as DataGridProps<Record<string, unknown>>,
};

export const CustomColumnCount: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        cardHeaderSlots: {
            left: 'id',
            right: 'status',
            bottom: 'updatedAt',
        },
        columnsCount: {
            mobile: 1,
            tablet: 2,
            desktop: 4,
        },
        actions: {
            title: '',
            render: (_item) => (
                <Button variant="link" className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    View Details
                </Button>
            ),
        },
    } as DataGridProps<Record<string, unknown>>,
};

export const WithTopSlot: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        cardHeaderSlots: {
            top: 'topic',
            left: 'id',
            right: 'status',
            bottom: 'updatedAt',
        },
        actions: {
            title: '',
            render: (_item) => (
                <Button variant="link" className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    View Details
                </Button>
            ),
        },
    } as DataGridProps<Record<string, unknown>>,
};

export const WithoutSlots: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
    } as DataGridProps<Record<string, unknown>>,
};

export const WithMultipleActions: Story = {
    args: {
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        cardHeaderSlots: {
            left: 'id',
            right: 'status',
            bottom: 'updatedAt',
        },
        actions: {
            title: '',
            render: (_item) => (
                <div className="flex gap-2 w-full">
                    <Button variant="tertiary" className="w-full flex items-center gap-2">
                        <ArrowRight className="h-4 w-4" />
                        View Details
                    </Button>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                    </Button>
                </div>
            ),
        },
    } as DataGridProps<Record<string, unknown>>,
};

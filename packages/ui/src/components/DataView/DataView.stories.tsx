import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight } from 'lucide-react';

import type { DataListColumnConfig } from '@o2s/ui/components/DataList/DataList.types';
import { DataView } from '@o2s/ui/components/DataView';

import { Button } from '@o2s/ui/elements/button';

import type { DataViewProps } from './DataView.types';

const meta: Meta<typeof DataView> = {
    title: 'Components/DataView',
    component: DataView,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        viewMode: {
            control: 'radio',
            options: ['list', 'grid'],
            description: 'Switch between list (table) and grid (cards) view',
        },
    },
};

export default meta;
type Story = StoryObj<typeof DataView>;

type Ticket = {
    id: string;
    topic: { label: string; value: string };
    type: { label: string; value: string };
    status: { label: string; value: string };
    updatedAt: { label: string; value: string };
    serialNumber: { label: string; value: string };
    detailsUrl: string;
};

const sampleTickets: Ticket[] = [
    {
        id: 'SR-12345',
        topic: { label: 'Engine Power Loss', value: 'engine-power-loss' },
        type: { label: 'Technical', value: 'technical' },
        status: { label: 'Completed', value: 'completed' },
        updatedAt: { label: '29.10.2025', value: '2025-10-29' },
        serialNumber: { label: 'BM-2024-001234', value: 'BM-2024-001234' },
        detailsUrl: '/tickets/SR-12345',
    },
    {
        id: 'SR-12346',
        topic: { label: 'Oil Replacement', value: 'oil-replacement' },
        type: { label: 'Maintenance', value: 'maintenance' },
        status: { label: 'In Progress', value: 'in_progress' },
        updatedAt: { label: '28.10.2025', value: '2025-10-28' },
        serialNumber: { label: 'BM-2024-001235', value: 'BM-2024-001235' },
        detailsUrl: '/tickets/SR-12346',
    },
    {
        id: 'SR-12347',
        topic: { label: 'Cooling System', value: 'cooling-system' },
        type: { label: 'Technical', value: 'technical' },
        status: { label: 'Pending', value: 'pending' },
        updatedAt: { label: '27.10.2025', value: '2025-10-27' },
        serialNumber: { label: 'BM-2024-001236', value: 'BM-2024-001236' },
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
        id: 'updatedAt',
        title: 'Updated At',
        type: 'date',
    },
];

const actions = {
    title: 'Actions',
    render: (_item: Ticket) => (
        <Button asChild variant="link" className="flex items-center gap-2">
            <span>
                <ArrowRight className="h-4 w-4" />
                View Details
            </span>
        </Button>
    ),
};

export const ListView: Story = {
    args: {
        viewMode: 'list',
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        actions: actions as DataViewProps<Record<string, unknown>>['actions'],
    } as DataViewProps<Record<string, unknown>>,
};

export const GridView: Story = {
    args: {
        viewMode: 'grid',
        data: sampleTickets as Record<string, unknown>[],
        columns: ticketColumns as DataListColumnConfig<Record<string, unknown>>[],
        cardHeaderSlots: {
            left: 'id',
            right: 'status',
            bottom: 'updatedAt',
        },
        actions: actions as DataViewProps<Record<string, unknown>>['actions'],
    } as DataViewProps<Record<string, unknown>>,
};

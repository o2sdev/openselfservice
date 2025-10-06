import type { Meta, StoryObj } from '@storybook/nextjs';
import {
    Bar,
    BarChart as BarChartComponent,
    CartesianGrid,
    Legend,
    Line,
    LineChart as LineChartComponent,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { ChartContainer, ChartLegendContent, ChartTooltipContent } from './chart';

const meta = {
    title: 'Elements/Chart',
    component: ChartContainer,
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data for charts
const data = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
    { name: 'Jun', sales: 2390, revenue: 3800 },
    { name: 'Jul', sales: 3490, revenue: 4300 },
];

// Chart configuration
const chartConfig = {
    sales: {
        label: 'Sales',
        color: '#8884d8',
    },
    revenue: {
        label: 'Revenue',
        color: '#82ca9d',
    },
};

export const LineChart: Story = {
    args: {
        config: chartConfig,
        children: <></>,
    },
    render: ({ config }) => (
        <div className="w-1/2">
            <ChartContainer config={config}>
                <LineChartComponent data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChartComponent>
            </ChartContainer>
        </div>
    ),
};

export const BarChart: Story = {
    args: {
        config: chartConfig,
        children: <></>,
    },
    render: ({ config }) => (
        <div className="w-1/2">
            <ChartContainer config={config}>
                <BarChartComponent data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="sales" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChartComponent>
            </ChartContainer>
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { Bar, BarChart, CartesianGrid, TooltipProps, XAxis, YAxis } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { ChartTooltip } from './ChartTooltip';
import { ChartTooltipProps } from './ChartTooltip.types';

const meta = {
    title: 'Components/Chart/ChartTooltip',
    component: ChartTooltip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ChartTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data for the chart
const sampleChartData = [
    {
        name: 'Jan',
        revenue: 300,
        costs: 200,
        profit: 100,
        unit: 'USD',
    },
    {
        name: 'Feb',
        revenue: 400,
        costs: 300,
        profit: 100,
        unit: 'USD',
    },
    {
        name: 'Mar',
        revenue: 500,
        costs: 400,
        profit: 100,
        unit: 'USD',
    },
];

// Since ChartTooltip is used within a chart, we need to wrap it in a chart
const ChartTooltipExample = ({ type }: { type?: ChartTooltipProps['type'] }) => {
    return (
        <BarChart width={500} height={300} data={sampleChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="revenue" fill="var(--chart-1)" />
            <Bar dataKey="costs" fill="var(--chart-2)" />
            <Bar dataKey="profit" fill="var(--chart-3)" />
            {/* Use the ChartTooltip component */}
            <ChartTooltip
                type={type}
                content={(props: TooltipProps<ValueType, NameType>) => <ChartTooltip type={type} {...props} />}
            />
        </BarChart>
    );
};

export const Default: Story = {
    render: () => <ChartTooltipExample />,
};

export const WithPriceType: Story = {
    render: () => <ChartTooltipExample type="price" />,
};

export const WithNumberType: Story = {
    render: () => <ChartTooltipExample type="number" />,
};

// Example with Euro currency
const sampleEuroChartData = [
    {
        name: 'Jan',
        revenue: 300,
        costs: 200,
        profit: 100,
        unit: 'EUR',
    },
    {
        name: 'Feb',
        revenue: 400,
        costs: 300,
        profit: 100,
        unit: 'EUR',
    },
    {
        name: 'Mar',
        revenue: 500,
        costs: 400,
        profit: 100,
        unit: 'EUR',
    },
];

const ChartTooltipEuroExample = ({ type }: { type?: ChartTooltipProps['type'] }) => {
    return (
        <BarChart
            width={500}
            height={300}
            data={sampleEuroChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="revenue" fill="var(--chart-1)" />
            <Bar dataKey="costs" fill="var(--chart-2)" />
            <Bar dataKey="profit" fill="var(--chart-3)" />
            {/* Use the ChartTooltip component */}
            <ChartTooltip
                type={type}
                content={(props: TooltipProps<ValueType, NameType>) => <ChartTooltip type={type} {...props} />}
            />
        </BarChart>
    );
};

export const WithEuroCurrency: Story = {
    render: () => <ChartTooltipEuroExample type="price" />,
};

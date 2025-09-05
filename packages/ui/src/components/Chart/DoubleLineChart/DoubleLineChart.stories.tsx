import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { DoubleLineChart } from './DoubleLineChart';
import { LineChartData } from './DoubleLineChart.types';

const meta = {
    title: 'Components/Chart/DoubleLineChart',
    component: DoubleLineChart,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DoubleLineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data for the chart
const sampleChartData: LineChartData[] = [
    {
        label: 'Jan',
        prev: 100,
        current: 150,
    },
    {
        label: 'Feb',
        prev: 200,
        current: 250,
    },
    {
        label: 'Mar',
        prev: 150,
        current: 300,
    },
    {
        label: 'Apr',
        prev: 300,
        current: 350,
    },
    {
        label: 'May',
        prev: 250,
        current: 400,
    },
    {
        label: 'Jun',
        prev: 400,
        current: 450,
    },
];

export const Default: Story = {
    args: {
        chartData: sampleChartData,
        legend: {
            prev: 'Previous Year',
            current: 'Current Year',
        },
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

export const WithPriceTooltip: Story = {
    args: {
        ...Default.args,
        tooltipType: 'price',
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

export const WithNumberTooltip: Story = {
    args: {
        ...Default.args,
        tooltipType: 'number',
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

// Sample data with some zero values
const zeroValuesChartData: LineChartData[] = [
    {
        label: 'Jan',
        prev: 0,
        current: 150,
    },
    {
        label: 'Feb',
        prev: 200,
        current: 0,
    },
    {
        label: 'Mar',
        prev: 150,
        current: 300,
    },
    {
        label: 'Apr',
        prev: 0,
        current: 350,
    },
    {
        label: 'May',
        prev: 250,
        current: 0,
    },
];

export const WithZeroValues: Story = {
    args: {
        chartData: zeroValuesChartData,
        legend: {
            prev: 'Previous Year',
            current: 'Current Year',
        },
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

// Sample data with different labels
const differentLabelsChartData: LineChartData[] = [
    {
        label: 'Q1',
        prev: 300,
        current: 450,
    },
    {
        label: 'Q2',
        prev: 500,
        current: 650,
    },
    {
        label: 'Q3',
        prev: 400,
        current: 700,
    },
    {
        label: 'Q4',
        prev: 600,
        current: 800,
    },
];

export const WithQuarterlyData: Story = {
    args: {
        chartData: differentLabelsChartData,
        legend: {
            prev: 'Previous Year',
            current: 'Current Year',
        },
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

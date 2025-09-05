import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { ChartRoundedBarProps } from '../ChartRoundedBar';

import { StackedBarChart } from './StackedBarChart';

const meta = {
    title: 'Components/Chart/StackedBarChart',
    component: StackedBarChart,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof StackedBarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample data for the chart
const sampleChartData: ChartRoundedBarProps[] = [
    {
        month: 'Jan',
        topSegment: '300',
        middleSegment: '200',
        bottomSegment: '100',
        total: '600',
    },
    {
        month: 'Feb',
        topSegment: '400',
        middleSegment: '300',
        bottomSegment: '200',
        total: '900',
    },
    {
        month: 'Mar',
        topSegment: '200',
        middleSegment: '400',
        bottomSegment: '300',
        total: '900',
    },
    {
        month: 'Apr',
        topSegment: '500',
        middleSegment: '300',
        bottomSegment: '100',
        total: '900',
    },
    {
        month: 'May',
        topSegment: '300',
        middleSegment: '200',
        bottomSegment: '400',
        total: '900',
    },
    {
        month: 'Jun',
        topSegment: '200',
        middleSegment: '500',
        bottomSegment: '200',
        total: '900',
    },
];

export const Default: Story = {
    args: {
        chartData: sampleChartData,
        labels: {
            topSegment: 'Revenue',
            middleSegment: 'Costs',
            bottomSegment: 'Profit',
        },
        unit: 'USD',
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

export const WithEuroUnit: Story = {
    args: {
        ...Default.args,
        unit: 'EUR',
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

export const WithCustomMaxBarSize: Story = {
    args: {
        ...Default.args,
        maxBarSize: 40,
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

export const WithZeroValues: Story = {
    args: {
        ...Default.args,
        chartData: [
            {
                month: 'Jan',
                topSegment: '300',
                middleSegment: '0',
                bottomSegment: '100',
                total: '400',
            },
            {
                month: 'Feb',
                topSegment: '0',
                middleSegment: '300',
                bottomSegment: '200',
                total: '500',
            },
            {
                month: 'Mar',
                topSegment: '200',
                middleSegment: '400',
                bottomSegment: '0',
                total: '600',
            },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

export const WithSingleSegment: Story = {
    args: {
        ...Default.args,
        chartData: [
            {
                month: 'Jan',
                topSegment: '300',
                middleSegment: '0',
                bottomSegment: '0',
                total: '300',
            },
            {
                month: 'Feb',
                topSegment: '0',
                middleSegment: '300',
                bottomSegment: '0',
                total: '300',
            },
            {
                month: 'Mar',
                topSegment: '0',
                middleSegment: '0',
                bottomSegment: '300',
                total: '300',
            },
        ],
    },
    decorators: [
        (Story) => (
            <div className="w-lg h-lg">
                <Story />
            </div>
        ),
    ],
};

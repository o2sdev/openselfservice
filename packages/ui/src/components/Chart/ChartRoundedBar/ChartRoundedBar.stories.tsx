import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Props as BarProps } from 'recharts/types/cartesian/Bar';

import { ChartRoundedBar } from './ChartRoundedBar';
import { ChartRoundedBarProps } from './ChartRoundedBar.types';

const meta = {
    title: 'Components/Chart/ChartRoundedBar',
    component: ChartRoundedBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ChartRoundedBar>;

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
];

// Since ChartRoundedBar is a shape component used within a chart, we need to wrap it in a chart
const ChartRoundedBarExample = ({ data }: { data: ChartRoundedBarProps[] }) => {
    return (
        <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Bar
                dataKey="topSegment"
                fill="var(--chart-1)"
                shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & ChartRoundedBarProps)} />}
            />
            <Bar
                dataKey="middleSegment"
                fill="var(--chart-2)"
                shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & ChartRoundedBarProps)} />}
            />
            <Bar
                dataKey="bottomSegment"
                fill="var(--chart-3)"
                shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & ChartRoundedBarProps)} />}
            />
        </BarChart>
    );
};

export const Default: Story = {
    // @ts-expect-error args are not needed as there is a render function
    args: {},
    render: () => <ChartRoundedBarExample data={sampleChartData} />,
};

export const WithSingleSegment: Story = {
    // @ts-expect-error args are not needed as there is a render function
    args: {},
    render: () => (
        <ChartRoundedBarExample
            data={[
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
            ]}
        />
    ),
};

export const WithZeroValues: Story = {
    // @ts-expect-error args are not needed as there is a render function
    args: {},
    render: () => (
        <ChartRoundedBarExample
            data={[
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
            ]}
        />
    ),
};

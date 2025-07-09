import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, TooltipProps, XAxis, YAxis } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { ChartConfig, ChartContainer, ChartTooltip } from '@o2s/ui/elements/chart';

import { ChartTooltip as CustomTooltip } from '../ChartTooltip';

import { DoubleLineChartProps } from './DoubleLineChart.types';

export const DoubleLineChart: React.FC<DoubleLineChartProps> = ({ chartData, legend, tooltipType }) => {
    const chartConfig = {
        prev: {
            stroke: 'var(--chart-2)',
        },
        current: {
            stroke: 'var(--chart-1)',
        },
    } satisfies ChartConfig;

    return (
        <div className="w-full h-full">
            <ChartContainer config={chartConfig} className="h-[250px] aspect-auto w-full">
                <LineChart data={chartData} margin={{ top: 20, right: 20, bottom: 0, left: 20 }} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="label"
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                        tickMargin={8}
                        interval="equidistantPreserveStart"
                    />
                    <YAxis scale="linear" axisLine={false} tickLine={false} tick={false} tickMargin={0} width={0} />

                    <ChartTooltip
                        cursor={false}
                        content={(props: TooltipProps<ValueType, NameType>) => (
                            <CustomTooltip type={tooltipType} {...props} />
                        )}
                    />
                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="square"
                        iconSize={8}
                        formatter={(value: string) => {
                            return <span style={{ color: 'var(--foreground)', verticalAlign: 'middle' }}>{value}</span>;
                        }}
                    />

                    <Line
                        name={legend.prev}
                        type="monotone"
                        dataKey="prev"
                        stroke={chartConfig.prev.stroke}
                        strokeWidth={2}
                        dot={{
                            stroke: chartConfig.prev.stroke,
                            fill: chartConfig.prev.stroke,
                            strokeWidth: 1,
                            r: 4,
                        }}
                        label={{
                            fontSize: 'var(--typography-base-sizes-extra-small-font-size)',
                            fill: 'var(--foreground)',
                            position: 'top',
                            offset: 7,
                        }}
                    />
                    <Line
                        name={legend.current}
                        type="monotone"
                        dataKey="current"
                        stroke={chartConfig.current.stroke}
                        strokeWidth={2}
                        dot={{
                            stroke: chartConfig.current.stroke,
                            fill: chartConfig.current.stroke,
                            strokeWidth: 1,
                            r: 4,
                        }}
                        label={{
                            fontSize: 'var(--typography-base-sizes-extra-small-font-size)',
                            fill: 'var(--foreground)',
                            position: 'top',
                            offset: 7,
                        }}
                    />
                </LineChart>
            </ChartContainer>
        </div>
    );
};

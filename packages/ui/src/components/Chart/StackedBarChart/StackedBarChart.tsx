import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, TooltipProps, XAxis } from 'recharts';
import { Props as BarProps } from 'recharts/types/cartesian/Bar';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { Props } from 'recharts/types/component/Label';

import { Price } from '@o2s/ui/components/Price';

import { ChartConfig, ChartContainer, ChartTooltip } from '@o2s/ui/elements/chart';

import { ChartRoundedBar, ChartRoundedBarProps } from '../ChartRoundedBar';
import { ChartTooltip as CustomTooltip } from '../ChartTooltip';

import { StackedBarChartProps } from './StackedBarChart.types';

export const StackedBarChart: React.FC<StackedBarChartProps> = ({
    chartData,
    labels,
    unit,
    tooltipType,
    maxBarSize = 80,
}) => {
    const chartConfig = {
        topSegment: {
            color: 'var(--destructive)',
            stroke: undefined,
        },
        middleSegment: {
            color: 'var(--primary)',
            stroke: undefined,
        },
        bottomSegment: {
            color: 'var(--secondary)',
            stroke: undefined,
        },
    } satisfies ChartConfig;

    return (
        <div className="w-full h-full">
            <ChartContainer config={chartConfig} className="h-[250px] aspect-auto w-full">
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
                    maxBarSize={maxBarSize}
                    accessibilityLayer
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        fontSize={12}
                        tickMargin={8}
                        interval={0}
                    />

                    <ChartTooltip
                        cursor={false}
                        content={(props: TooltipProps<ValueType, NameType>) => (
                            <CustomTooltip type={tooltipType} {...props} />
                        )}
                    />

                    <Bar
                        dataKey="bottomSegment"
                        stackId="a"
                        name={labels.bottomSegment}
                        fill={chartConfig.bottomSegment.color}
                        stroke={chartConfig.bottomSegment.stroke}
                        shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & ChartRoundedBarProps)} />}
                        unit={unit}
                    />
                    <Bar
                        stackId="a"
                        dataKey="middleSegment"
                        name={labels.middleSegment}
                        fill={chartConfig.middleSegment.color}
                        stroke={chartConfig.middleSegment.stroke}
                        shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & ChartRoundedBarProps)} />}
                        unit={unit}
                    />
                    <Bar
                        stackId="a"
                        dataKey="topSegment"
                        name={labels.topSegment}
                        fill={chartConfig.topSegment.color}
                        stroke={chartConfig.topSegment.stroke}
                        shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & ChartRoundedBarProps)} />}
                        unit={unit}
                    >
                        <LabelList
                            dataKey="total"
                            position="top"
                            fill="var(--foreground)"
                            fontSize={12}
                            content={(props: Props) => {
                                const { x: xString, y: yString, width: widthString, value: valueString, fill } = props;
                                const x = Number(xString);
                                const y = Number(yString);
                                const width = Number(widthString);
                                const value = Number(valueString);
                                return (
                                    <text x={x + width / 2} y={y} fill={fill} fontSize={12} textAnchor="middle" dy={-8}>
                                        <Price price={{ value, currency: unit }} />
                                    </text>
                                );
                            }}
                        />
                    </Bar>
                </BarChart>
            </ChartContainer>
        </div>
    );
};

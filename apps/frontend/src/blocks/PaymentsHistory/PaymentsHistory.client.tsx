'use client';

import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, TooltipProps, XAxis } from 'recharts';
import { Props as BarProps } from 'recharts/types/cartesian/Bar';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { Props } from 'recharts/types/component/Label';

import { Card } from '@o2s/ui/components/card';
import { ChartConfig, ChartContainer, ChartTooltip } from '@o2s/ui/components/chart';
import { Typography } from '@o2s/ui/components/typography';

import { ChartRoundedBar } from '@/components/Chart/ChartRoundedBar/ChartRoundedBar';
import { BarData } from '@/components/Chart/ChartRoundedBar/ChartRoundedBar.types';
import { ChartTooltip as CustomTooltip } from '@/components/Chart/ChartTooltip/ChartTooltip';
import { Price } from '@/components/Price/Price';

import { PaymentsHistoryPureProps } from './PaymentsHistory.types';

export const PaymentsHistoryPure: React.FC<PaymentsHistoryPureProps> = ({ ...component }) => {
    const { chartData, labels, title, currency } = component;

    const chartConfig = {
        topSegment: {
            color: 'hsl(var(--destructive))',
            stroke: undefined,
        },
        middleSegment: {
            color: 'hsl(var(--primary))',
            stroke: undefined,
        },
        bottomSegment: {
            color: 'hsl(var(--secondary))',
            stroke: undefined,
        },
    } satisfies ChartConfig;

    return (
        <Card className="h-full w-full">
            <div className="p-6 flex flex-col gap-6">
                {title && <Typography variant="subtitle">{title}</Typography>}

                <div className="w-full h-full">
                    <ChartContainer config={chartConfig} className="h-[250px] aspect-auto w-full">
                        <BarChart
                            data={chartData}
                            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
                            maxBarSize={80}
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
                                content={(props: TooltipProps<ValueType, NameType>) => <CustomTooltip {...props} />}
                            />

                            <Bar
                                dataKey="bottomSegment"
                                name={labels.bottomSegment}
                                stackId="a"
                                fill={chartConfig.bottomSegment.color}
                                stroke={chartConfig.bottomSegment.stroke}
                                shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & BarData)} />}
                                unit={currency}
                            />
                            <Bar
                                stackId="a"
                                dataKey="middleSegment"
                                name={labels.middleSegment}
                                fill={chartConfig.middleSegment.color}
                                stroke={chartConfig.middleSegment.stroke}
                                shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & BarData)} />}
                                unit={currency}
                            />
                            <Bar
                                dataKey="topSegment"
                                name={labels.topSegment}
                                stackId="a"
                                fill={chartConfig.topSegment.color}
                                stroke={chartConfig.topSegment.stroke}
                                shape={(props: BarProps) => <ChartRoundedBar {...(props as BarProps & BarData)} />}
                                unit={currency}
                            >
                                <LabelList
                                    dataKey="total"
                                    position="top"
                                    fill="var(--primary-foreground)"
                                    fontSize={12}
                                    content={(props: Props) => {
                                        const {
                                            x: xString,
                                            y: yString,
                                            width: widthString,
                                            value: valueString,
                                            fill,
                                        } = props;
                                        const x = Number(xString);
                                        const y = Number(yString);
                                        const width = Number(widthString);
                                        const value = Number(valueString);
                                        return (
                                            <text
                                                x={x + width / 2}
                                                y={y}
                                                fill={fill}
                                                fontSize={12}
                                                textAnchor="middle"
                                                dy={-8}
                                            >
                                                <Price price={{ value, currency }} />
                                            </text>
                                        );
                                    }}
                                />
                            </Bar>
                        </BarChart>
                    </ChartContainer>
                </div>
            </div>
        </Card>
    );
};

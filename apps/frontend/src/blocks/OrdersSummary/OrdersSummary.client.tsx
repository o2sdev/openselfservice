'use client';

import React from 'react';

import { Card } from '@o2s/ui/components/card';
import { Typography } from '@o2s/ui/components/typography';

import { DoubleLineChart } from '@/components/Chart/DoubleLineChart/DoubleLineChart';

import { OrdersSummaryPureProps } from './OrdersSummary.types';

export const OrdersSummaryPure: React.FC<OrdersSummaryPureProps> = ({ ...component }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            OrdersSummary
            <Card className="h-full w-full">
                <div className="p-6 flex flex-col gap-6">
                    <Typography variant="subtitle">{component.chart.title}</Typography>

                    <DoubleLineChart
                        chartData={component.chart.data}
                        legend={component.chart.legend}
                        maxBarSize={80}
                        tooltipType="number"
                    />
                </div>
            </Card>
        </div>
    );
};

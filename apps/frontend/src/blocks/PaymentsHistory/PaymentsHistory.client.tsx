'use client';

import React from 'react';

import { Card } from '@o2s/ui/components/card';
import { Typography } from '@o2s/ui/components/typography';

import { StackedBarChart } from '@/components/Chart/StackedBarChart/StackedBarChart';

import { PaymentsHistoryPureProps } from './PaymentsHistory.types';

export const PaymentsHistoryPure: React.FC<PaymentsHistoryPureProps> = ({ ...component }) => {
    const { chartData, labels, title, currency } = component;

    return (
        <Card className="h-full w-full">
            <div className="p-6 flex flex-col gap-6">
                {title && <Typography variant="subtitle">{title}</Typography>}

                <StackedBarChart chartData={chartData} labels={labels} unit={currency} />
            </div>
        </Card>
    );
};

'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import { Card } from '@o2s/ui/elements/card';
import { Typography } from '@o2s/ui/elements/typography';

import { PaymentsHistoryPureProps } from './PaymentsHistory.types';

const StackedBarChart = dynamic(() =>
    import('@o2s/ui/components/Chart/StackedBarChart').then((module) => module.StackedBarChart),
);

export const PaymentsHistoryPure = ({ ...component }: PaymentsHistoryPureProps) => {
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

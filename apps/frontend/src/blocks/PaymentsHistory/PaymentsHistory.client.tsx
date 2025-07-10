'use client';

import React from 'react';

import { StackedBarChart } from '@o2s/ui/components/Chart/StackedBarChart';

import { Card } from '@o2s/ui/elements/card';
import { Typography } from '@o2s/ui/elements/typography';

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

'use client';

import React from 'react';

import { PaymentCard } from './PaymentCard/PaymentCard';
import { PaymentsSummaryPureProps } from './PaymentsSummary.types';

export const PaymentsSummaryPure: React.FC<PaymentsSummaryPureProps> = ({ ...component }) => {
    const { overdue, toBePaid, currency, locale } = component;

    return (
        <div className="w-full flex flex-col gap-6">
            {overdue.title && <PaymentCard data={{ ...overdue, locale, currency }} variant={'destructive'} />}

            {toBePaid.title && <PaymentCard data={{ ...toBePaid, locale, currency }} variant={'default'} />}
        </div>
    );
};

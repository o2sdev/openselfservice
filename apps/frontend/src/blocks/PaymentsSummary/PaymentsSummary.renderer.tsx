import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { PaymentsSummary } from './PaymentsSummary.server';

export interface PaymentsSummaryRendererProps {
    id: string;
    accessToken: string;
}

export const PaymentsSummaryRenderer: React.FC<PaymentsSummaryRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={10} />}>
            <PaymentsSummary id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { PaymentsHistory } from './PaymentsHistory.server';

export interface PaymentsHistoryRendererProps {
    id: string;
    accessToken: string;
}

export const PaymentsHistoryRenderer: React.FC<PaymentsHistoryRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={10} />}>
            <PaymentsHistory id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

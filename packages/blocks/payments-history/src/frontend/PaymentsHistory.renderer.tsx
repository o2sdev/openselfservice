import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { PaymentsHistory } from './PaymentsHistory.server';

export interface PaymentsHistoryRendererProps {
    id: string;
    accessToken?: string;
    hasPriority?: boolean;
}

export const PaymentsHistoryRenderer = ({ id, accessToken, hasPriority }: PaymentsHistoryRendererProps) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={10} />}>
            <PaymentsHistory id={id} accessToken={accessToken} locale={locale} hasPriority={hasPriority} />
        </Suspense>
    );
};

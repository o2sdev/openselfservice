import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { PaymentsSummary } from './PaymentsSummary.server';
import { PaymentsSummaryRendererProps } from './PaymentsSummary.types';

export const PaymentsSummaryRenderer: React.FC<PaymentsSummaryRendererProps> = ({
    id,
    accessToken,
    routing,
    hasPriority,
}) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={10} />}>
            <PaymentsSummary
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

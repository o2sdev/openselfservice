import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { PaymentsHistory } from './PaymentsHistory.server';

export interface PaymentsHistoryRendererProps {
    isDraftModeEnabled?: boolean;
    id: string;
    accessToken?: string;
    hasPriority?: boolean;
}

export const PaymentsHistoryRenderer: React.FC<PaymentsHistoryRendererProps> = ({
    isDraftModeEnabled,
    id,
    accessToken,
    hasPriority,
}) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={10} />}>
            <PaymentsHistory
                id={id}
                isDraftModeEnabled={isDraftModeEnabled}
                accessToken={accessToken}
                locale={locale}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

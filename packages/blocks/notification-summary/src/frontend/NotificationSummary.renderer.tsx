import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { NotificationSummary } from './NotificationSummary.server';
import { NotificationSummaryRendererProps } from './NotificationSummary.types';

export const NotificationSummaryRenderer: React.FC<NotificationSummaryRendererProps> = ({
    id,
    accessToken,
    routing,
}) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <div className="w-full flex gap-6">
                        <Loading bars={0} />
                        <Loading bars={0} />
                    </div>
                </>
            }
        >
            <NotificationSummary id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

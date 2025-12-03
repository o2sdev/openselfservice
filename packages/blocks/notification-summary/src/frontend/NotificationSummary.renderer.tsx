import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { NotificationSummary } from './NotificationSummary.server';
import { NotificationSummaryRendererProps } from './NotificationSummary.types';

export const NotificationSummaryRenderer = ({ id, accessToken, routing }: NotificationSummaryRendererProps) => {
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

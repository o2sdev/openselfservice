import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { TicketSummary } from './TicketSummary.server';
import { TicketSummaryRendererProps } from './TicketSummary.types';

export const TicketSummaryRenderer: React.FC<TicketSummaryRendererProps> = ({ id, accessToken, routing }) => {
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
            <TicketSummary id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

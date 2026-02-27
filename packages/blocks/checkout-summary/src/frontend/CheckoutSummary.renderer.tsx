import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { CheckoutSummary } from './CheckoutSummary.server';
import { CheckoutSummaryRendererProps } from './CheckoutSummary.types';

export const CheckoutSummaryRenderer: React.FC<CheckoutSummaryRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-8">
                    <Loading bars={0} />
                    <Loading bars={8} />
                </div>
            }
        >
            <CheckoutSummary id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

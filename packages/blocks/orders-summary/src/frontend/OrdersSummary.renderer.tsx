import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { Model, Request } from '../api-harmonization/orders-summary.client';

import { OrdersSummary } from './OrdersSummary.server';
import { OrdersSummaryRendererProps } from './OrdersSummary.types';

export const OrdersSummaryRenderer: React.FC<OrdersSummaryRendererProps> = ({ id, accessToken, routing, slug }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={0} />
                    <div className="w-full flex gap-6">
                        <div className="w-full flex flex-col gap-6">
                            <Loading bars={1} />

                            <div className="w-full flex gap-6">
                                <Loading bars={1} />

                                <Loading bars={1} />
                            </div>
                        </div>

                        <Loading bars={7} />
                    </div>
                </>
            }
        >
            <OrdersSummary id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

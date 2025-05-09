import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { OrdersSummary } from './OrdersSummary.server';

export interface OrdersSummaryRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const OrdersSummaryRenderer: React.FC<OrdersSummaryRendererProps> = ({ id, accessToken }) => {
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
            <OrdersSummary id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

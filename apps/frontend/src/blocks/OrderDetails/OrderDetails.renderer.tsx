import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { OrderDetails } from './OrderDetails.server';

export interface OrderDetailsRendererProps {
    slug: string[];
    id: string;
    accessToken?: string;
}

export const OrderDetailsRenderer: React.FC<OrderDetailsRendererProps> = ({ slug, id, accessToken }) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        <Loading bars={8} />
                        <Loading bars={8} />
                    </div>
                    <Loading bars={8} />
                </>
            }
        >
            <OrderDetails id={id} orderId={slug[1]} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

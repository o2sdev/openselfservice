import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { OrderList } from './OrderList.server';

export interface OrderListRendererProps {
    slug: string[];
    id: string;
    accessToken?: string;
}

export const OrderListRenderer: React.FC<OrderListRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={[15, 17]} />}>
            <OrderList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

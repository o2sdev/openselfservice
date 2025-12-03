import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { OrderList } from './OrderList.server';
import { OrderListRendererProps } from './OrderList.types';

export const Renderer = ({ id, accessToken, routing, hasPriority }: OrderListRendererProps) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={[15, 17]} />}>
            <OrderList id={id} accessToken={accessToken} locale={locale} routing={routing} hasPriority={hasPriority} />
        </Suspense>
    );
};

export { Renderer as default };

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { OrderList } from './OrderList.server';
import { OrderListRendererProps } from './OrderList.types';

export const Renderer: React.FC<OrderListRendererProps> = ({ id, accessToken, routing, hasPriority }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex gap-6">
                    <div className="w-full flex flex-col gap-6">
                        <Loading bars={2} />
                        <div className="w-full flex gap-6">
                            <Loading bars={1} />
                            <Loading bars={1} />
                        </div>
                    </div>
                    <Loading bars={4} />
                </div>
            }
        >
            <OrderList id={id} accessToken={accessToken} locale={locale} routing={routing} hasPriority={hasPriority} />
        </Suspense>
    );
};

export { Renderer as default };

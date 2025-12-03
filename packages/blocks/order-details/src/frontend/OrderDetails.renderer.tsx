import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { OrderDetails } from './OrderDetails.server';
import { OrderDetailsRendererProps } from './OrderDetails.types';

export const OrderDetailsRenderer = ({ slug, id, accessToken, routing, hasPriority }: OrderDetailsRendererProps) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-6">
                    <Loading bars={0} />
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        <div className="w-full flex flex-col gap-6">
                            <div className="w-full flex flex-col md:flex-row gap-6">
                                <Loading bars={2} />
                                <Loading bars={2} />
                            </div>
                            <Loading bars={2} />
                        </div>
                        <div className="w-full flex flex-col gap-6">
                            <div className="w-full flex flex-col md:flex-row gap-6">
                                <Loading bars={2} />
                                <Loading bars={2} />
                            </div>
                            <Loading bars={2} />
                        </div>
                    </div>
                    <Loading bars={8} />
                </div>
            }
        >
            <OrderDetails
                id={id}
                orderId={slug[1]}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

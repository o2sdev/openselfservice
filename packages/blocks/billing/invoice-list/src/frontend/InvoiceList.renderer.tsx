import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { InvoiceListServer } from './InvoiceList.server';
import { InvoiceListRendererProps } from './InvoiceList.types';

export const InvoiceListRenderer: React.FC<InvoiceListRendererProps> = ({ id, accessToken, routing, hasPriority }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-6">
                    <Loading bars={1} />
                    <Loading bars={[10, 23]} />
                </div>
            }
        >
            <InvoiceListServer
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

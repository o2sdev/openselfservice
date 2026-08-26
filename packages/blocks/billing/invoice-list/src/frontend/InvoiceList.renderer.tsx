import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { searchParamsKey } from '@o2s/ui/hooks/use-url-filters.utils';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { InvoiceListServer } from './InvoiceList.server';
import { InvoiceListRendererProps } from './InvoiceList.types';

export const InvoiceListRenderer: React.FC<InvoiceListRendererProps> = ({
    id,
    accessToken,
    routing,
    hasPriority,
    searchParams,
}) => {
    const locale = useLocale();

    // Keyed on the params, so arriving with different filters rebuilds the block from the server data
    // for them instead of leaving the client showing the previous result set.
    const filterKey = searchParamsKey(searchParams);

    return (
        <Suspense
            key={`${id}?${filterKey}`}
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
                searchParams={searchParams}
            />
        </Suspense>
    );
};

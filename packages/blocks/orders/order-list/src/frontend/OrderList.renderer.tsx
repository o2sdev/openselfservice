import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { searchParamsKey } from '@o2s/ui/hooks/use-url-filters.utils';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { OrderList } from './OrderList.server';
import { OrderListRendererProps } from './OrderList.types';

export const Renderer: React.FC<OrderListRendererProps> = ({ id, accessToken, routing, hasPriority, searchParams }) => {
    const locale = useLocale();

    // Keyed on the params, so arriving with different filters rebuilds the block from the server data
    // for them instead of leaving the client showing the previous result set.
    const filterKey = searchParamsKey(searchParams);

    return (
        <Suspense key={`${id}?${filterKey}`} fallback={<Loading bars={[15, 17]} />}>
            <OrderList
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

export { Renderer as default };

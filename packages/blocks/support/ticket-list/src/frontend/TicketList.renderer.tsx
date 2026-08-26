import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { searchParamsKey } from '@o2s/ui/hooks/use-url-filters.utils';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { TicketListServer } from './TicketList.server';
import { TicketListRendererProps } from './TicketList.types';

export const TicketListRenderer: React.FC<TicketListRendererProps> = ({
    id,
    accessToken,
    routing,
    hasPriority,
    isDraftModeEnabled,
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
                <div className="w-full flex">
                    <Loading bars={1} />
                </div>
            }
        >
            <TicketListServer
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
                isDraftModeEnabled={isDraftModeEnabled}
                searchParams={searchParams}
            />
        </Suspense>
    );
};

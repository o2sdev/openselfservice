import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { searchParamsKey } from '@o2s/ui/hooks/use-url-filters.utils';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { NotificationListServer } from './NotificationList.server';
import { NotificationListRendererProps } from './NotificationList.types';

export const NotificationListRenderer: React.FC<NotificationListRendererProps> = ({
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
                    <Loading bars={[15, 17]} />
                </div>
            }
        >
            <NotificationListServer
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

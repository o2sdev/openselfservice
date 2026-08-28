import dynamic from 'next/dynamic';
import React from 'react';

import { parseFiltersFromSearchParams } from '@o2s/ui/hooks/use-url-filters.utils';

import type { Model, Request } from '../api-harmonization/notification-list.client';
import { sdk } from '../sdk';

import { NotificationListProps } from './NotificationList.types';

/** Filter keys the block query understands, as the client writes them (`?notification_sort=…`). */
const FILTER_KEYS = ['sort', 'type', 'status', 'priority', 'dateFrom', 'dateTo'] as const;

const NAMESPACE = 'notification';

export const NotificationListDynamic = dynamic(() =>
    import('./NotificationList.client').then((module) => module.NotificationListPure),
);

export const NotificationListServer: React.FC<NotificationListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    searchParams,
}) => {
    let data: Model.NotificationListBlock;
    try {
        data = await sdk.blocks.getNotificationList(
            {
                id,
                ...parseFiltersFromSearchParams<Request.GetNotificationListBlockQuery>(searchParams, {
                    namespace: NAMESPACE,
                    keys: FILTER_KEYS,
                }),
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
        return null;
    }

    return (
        <NotificationListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};

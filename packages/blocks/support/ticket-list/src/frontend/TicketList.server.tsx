import dynamic from 'next/dynamic';
import React from 'react';

import { parseFiltersFromSearchParams } from '@o2s/ui/hooks/use-url-filters.utils';

import type { Model, Request } from '../api-harmonization/ticket-list.client';
import { sdk } from '../sdk';

import { TicketListProps } from './TicketList.types';

/** Filter keys the block query understands, as the client writes them (`?ticket_status=OPEN`). */
const FILTER_KEYS = ['status', 'topic', 'type', 'sort', 'search', 'priority'] as const;

/** Keys the tickets module takes more than one value for. */
const MULTI_VALUE_KEYS = ['status'] as const;

const NAMESPACE = 'ticket';

export const TicketListDynamic = dynamic(() => import('./TicketList.client').then((module) => module.TicketListPure));

export const TicketListServer: React.FC<TicketListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
    searchParams,
}) => {
    let data: Model.TicketListBlock;
    try {
        data = await sdk.blocks.getTicketList(
            {
                id,
                preview: isDraftModeEnabled,
                ...(parseFiltersFromSearchParams(searchParams, {
                    namespace: NAMESPACE,
                    keys: FILTER_KEYS,
                    multiValueKeys: MULTI_VALUE_KEYS,
                }) as Partial<Request.GetTicketListBlockQuery>),
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
        <TicketListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};

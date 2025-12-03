import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { TicketListProps } from './TicketList.types';

export const TicketListDynamic = dynamic(() => import('./TicketList.client').then((module) => module.TicketListPure));

export const TicketListServer = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
}: TicketListProps) => {
    let data;
    try {
        data = await sdk.blocks.getTicketList(
            {
                id,
                preview: isDraftModeEnabled,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
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

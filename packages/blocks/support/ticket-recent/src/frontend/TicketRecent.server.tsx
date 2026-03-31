import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/ticket-recent.client';
import { sdk } from '../sdk';

import { TicketRecentProps } from './TicketRecent.types';

export const TicketRecentDynamic = dynamic(() =>
    import('./TicketRecent.client').then((module) => module.TicketRecentPure),
);

export const TicketRecent: React.FC<TicketRecentProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    let data: Model.TicketRecentBlock;
    try {
        data = await sdk.blocks.getTicketRecent(
            {
                id,
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
        <TicketRecentDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};

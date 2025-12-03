import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { TicketRecentProps } from './TicketRecent.types';

export const TicketRecentDynamic = dynamic(() =>
    import('./TicketRecent.client').then((module) => module.TicketRecentPure),
);

export const TicketRecent = async ({ id, accessToken, locale, routing, hasPriority }: TicketRecentProps) => {
    try {
        const data = await sdk.blocks.getTicketRecent(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

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
    } catch (_error) {
        return null;
    }
};

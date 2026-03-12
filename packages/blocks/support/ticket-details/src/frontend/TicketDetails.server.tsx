import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/ticket-details.client';
import { sdk } from '../sdk';

import { TicketDetailsProps } from './TicketDetails.types';

export const TicketDetailsDynamic = dynamic(() =>
    import('./TicketDetails.client').then((module) => module.TicketDetailsPure),
);

export const TicketDetails: React.FC<TicketDetailsProps> = async ({
    id,
    ticketId,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data: Model.TicketDetailsBlock;
    try {
        data = await sdk.blocks.getTicketDetails(
            {
                id: ticketId,
            },
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
        <TicketDetailsDynamic
            {...data}
            id={id}
            ticketId={ticketId}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};

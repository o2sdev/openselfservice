import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { TicketDetailsProps } from './TicketDetails.types';

export const TicketDetailsDynamic = dynamic(() =>
    import('./TicketDetails.client').then((module) => module.TicketDetailsPure),
);

export const TicketDetails: React.FC<TicketDetailsProps> = async ({ id, ticketId, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getTicketDetails(
            {
                id: ticketId,
            },
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <TicketDetailsDynamic {...data} id={id} ticketId={ticketId} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};

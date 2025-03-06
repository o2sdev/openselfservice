import React from 'react';

import { sdk } from '@/api/sdk';

import { TicketDetailsDynamic } from './TicketDetails.dynamic';
import { TicketDetailsProps } from './TicketDetails.types';

export const TicketDetails: React.FC<TicketDetailsProps> = async ({ id, ticketId, accessToken, locale }) => {
    const data = await sdk.components.getTicketDetails(
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
};

import React from 'react';

import { sdk } from '@/api/sdk';

import { TicketRecentPure } from './TicketRecent.client';
import { TicketRecentProps } from './TicketRecent.types';

export const TicketRecent: React.FC<TicketRecentProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getTicketRecent(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <TicketRecentPure {...data} id={id} accessToken={accessToken} locale={locale} />;
};

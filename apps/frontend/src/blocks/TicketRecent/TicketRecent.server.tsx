import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { TicketRecentProps } from './TicketRecent.types';

// an intermediary component is required for the dynamic import to work propertly with server components
// @see https://github.com/vercel/next.js/issues/61066
export const TicketRecentDynamic = dynamic(() =>
    import('./TicketRecent.client').then((module) => module.TicketRecentPure),
);

export const TicketRecent: React.FC<TicketRecentProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.blocks.getTicketRecent(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <TicketRecentDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};

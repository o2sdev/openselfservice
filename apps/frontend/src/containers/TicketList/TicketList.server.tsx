import React from 'react';

import { sdk } from '@/api/sdk';

import { TicketListDynamic } from './TicketList.dynamic';
import { TicketListProps } from './TicketList.types';

export const TicketListServer: React.FC<TicketListProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getTicketList(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <TicketListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};

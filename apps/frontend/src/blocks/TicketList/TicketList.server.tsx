import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { TicketListProps } from './TicketList.types';

export const TicketListDynamic = dynamic(() => import('./TicketList.client').then((module) => module.TicketListPure));

export const TicketListServer: React.FC<TicketListProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getTicketList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <TicketListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};

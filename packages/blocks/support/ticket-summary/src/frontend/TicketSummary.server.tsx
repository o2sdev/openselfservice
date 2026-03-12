import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/ticket-summary.client';
import { sdk } from '../sdk';

import { TicketSummaryProps } from './TicketSummary.types';

export const TicketSummaryDynamic = dynamic(() =>
    import('./TicketSummary.client').then((module) => module.TicketSummaryPure),
);

export const TicketSummary: React.FC<TicketSummaryProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.TicketSummaryBlock;
    try {
        data = await sdk.blocks.getTicketSummary(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching TicketSummary block', error);
        return null;
    }

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
        return null;
    }

    return <TicketSummaryDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};

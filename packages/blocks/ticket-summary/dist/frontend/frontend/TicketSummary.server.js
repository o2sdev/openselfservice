import dynamic from 'next/dynamic';
import React from 'react';
import { sdk } from '../sdk';
export const TicketSummaryDynamic = dynamic(() => import('./TicketSummary.client').then((module) => module.TicketSummaryPure));
export const TicketSummary = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getTicketSummary({
            id,
        }, { 'x-locale': locale }, accessToken);
        return React.createElement(TicketSummaryDynamic, { ...data, id: id, accessToken: accessToken, locale: locale, routing: routing });
    }
    catch (error) {
        console.error('Error fetching TicketSummary block', error);
        return null;
    }
};

import dynamic from 'next/dynamic';
import React from 'react';
import { sdk } from '../sdk';
export const NotificationSummaryDynamic = dynamic(() => import('./NotificationSummary.client').then((module) => module.NotificationSummaryPure));
export const NotificationSummary = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getNotificationSummary({
            id,
        }, { 'x-locale': locale }, accessToken);
        return (React.createElement(NotificationSummaryDynamic, { ...data, id: id, accessToken: accessToken, locale: locale, routing: routing }));
    }
    catch (error) {
        console.error('Error fetching NotificationSummary block', error);
        return null;
    }
};

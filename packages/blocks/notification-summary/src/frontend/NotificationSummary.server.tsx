import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { NotificationSummaryProps } from './NotificationSummary.types';

export const NotificationSummaryDynamic = dynamic(() =>
    import('./NotificationSummary.client').then((module) => module.NotificationSummaryPure),
);

export const NotificationSummary: React.FC<NotificationSummaryProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getNotificationSummary(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <NotificationSummaryDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />
        );
    } catch (error) {
        console.error('Error fetching NotificationSummary block', error);
        return null;
    }
};

import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/notification-summary.client';
import { sdk } from '../sdk';

import { NotificationSummaryProps } from './NotificationSummary.types';

export const NotificationSummaryDynamic = dynamic(() =>
    import('./NotificationSummary.client').then((module) => module.NotificationSummaryPure),
);

export const NotificationSummary: React.FC<NotificationSummaryProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.NotificationSummaryBlock;
    try {
        data = await sdk.blocks.getNotificationSummary(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching NotificationSummary block', error);
        return null;
    }

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
        return null;
    }

    return <NotificationSummaryDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};

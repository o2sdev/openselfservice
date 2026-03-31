import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/notification-details.client';
import { sdk } from '../sdk';

import { NotificationDetailsProps } from './NotificationDetails.types';

export const NotificationDetailsDynamic = dynamic(() =>
    import('./NotificationDetails.client').then((module) => module.NotificationDetailsPure),
);

export const NotificationDetails: React.FC<NotificationDetailsProps> = async ({
    id,
    notificationId,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data: Model.NotificationDetailsBlock;
    try {
        data = await sdk.blocks.getNotificationDetails(
            {
                id: notificationId,
            },
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
        return null;
    }

    return (
        <NotificationDetailsDynamic
            notificationId={notificationId}
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};

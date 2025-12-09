import dynamic from 'next/dynamic';
import React from 'react';

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
    let data;
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

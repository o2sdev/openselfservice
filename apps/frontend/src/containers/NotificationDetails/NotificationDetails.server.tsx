import React from 'react';

import { sdk } from '@/api/sdk';

import { NotificationDetailsDynamic } from './NotificationDetails.dynamic';
import { NotificationDetailsProps } from './NotificationDetails.types';

export const NotificationDetails: React.FC<NotificationDetailsProps> = async ({
    id,
    notificationId,
    accessToken,
    locale,
}) => {
    const data = await sdk.components.getNotificationDetails(
        {
            id: notificationId,
        },
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return (
        <NotificationDetailsDynamic
            notificationId={notificationId}
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
        />
    );
};

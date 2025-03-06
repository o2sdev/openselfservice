import React from 'react';

import { sdk } from '@/api/sdk';

import { NotificationListDynamic } from './NotificationList.dynamic';
import { NotificationListProps } from './NotificationList.types';

export const NotificationListServer: React.FC<NotificationListProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getNotificationList(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <NotificationListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};

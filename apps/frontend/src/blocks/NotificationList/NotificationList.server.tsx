import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { NotificationListProps } from './NotificationList.types';

export const NotificationListDynamic = dynamic(() =>
    import('./NotificationList.client').then((module) => module.NotificationListPure),
);

export const NotificationListServer: React.FC<NotificationListProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getNotificationList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <NotificationListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};

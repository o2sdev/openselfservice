import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { NotificationListProps } from './NotificationList.types';

export const NotificationListDynamic = dynamic(() =>
    import('./NotificationList.client').then((module) => module.NotificationListPure),
);

export const NotificationListServer: React.FC<NotificationListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    try {
        const data = await sdk.blocks.getNotificationList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <NotificationListDynamic
                {...data}
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        );
    } catch (_error) {
        return null;
    }
};

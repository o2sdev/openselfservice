import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { NotificationListServer } from './NotificationList.server';
import { NotificationListRendererProps } from './NotificationList.types';

export const NotificationListRenderer: React.FC<NotificationListRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={[15, 17]} />}>
            <NotificationListServer id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

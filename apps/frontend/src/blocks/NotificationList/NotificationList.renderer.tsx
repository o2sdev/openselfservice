import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { NotificationListServer } from './NotificationList.server';

export interface NotificationListRendererProps {
    id: string;
    accessToken?: string;
}

export const NotificationListRenderer: React.FC<NotificationListRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={[15, 17]} />}>
            <NotificationListServer id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

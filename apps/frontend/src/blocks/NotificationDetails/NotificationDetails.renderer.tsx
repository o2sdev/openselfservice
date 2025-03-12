import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { NotificationDetails } from './NotificationDetails.server';

export interface NotificationDetailsRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const NotificationDetailsRenderer: React.FC<NotificationDetailsRendererProps> = ({ slug, id, accessToken }) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense key={id} fallback={<Loading bars={5} />}>
            <NotificationDetails id={id} notificationId={slug[1]} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

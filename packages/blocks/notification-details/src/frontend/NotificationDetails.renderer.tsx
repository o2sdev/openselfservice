import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { NotificationDetails } from './NotificationDetails.server';
import { FaqRendererProps } from './NotificationDetails.types';

export const NotificationDetailsRenderer: React.FC<FaqRendererProps> = ({ slug, id, accessToken, routing }) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense key={id} fallback={<Loading bars={5} />}>
            <NotificationDetails
                id={id}
                notificationId={slug[1]}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
            />
        </Suspense>
    );
};

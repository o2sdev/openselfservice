import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Feedback/Loading';
import { Container } from '@o2s/ui/components/Layout/Container';

import { NotificationDetails } from './NotificationDetails.server';
import { NotificationDetailsRendererProps } from './NotificationDetails.types';

export const NotificationDetailsRenderer: React.FC<NotificationDetailsRendererProps> = ({
    isDraftModeEnabled,
    slug,
    id,
    accessToken,
    routing,
    hasPriority,
}) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-6">
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={4} />
                    </Container>
                </div>
            }
        >
            <NotificationDetails
                id={id}
                isDraftModeEnabled={isDraftModeEnabled}
                notificationId={slug[1]}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

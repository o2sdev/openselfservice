import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { NotificationSummary } from './NotificationSummary.server';
import { NotificationSummaryRendererProps } from './NotificationSummary.types';

export const NotificationSummaryRenderer: React.FC<NotificationSummaryRendererProps> = ({
    id,
    accessToken,
    routing,
}) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={8} />
                    </Container>
                </>
            }
        >
            <NotificationSummary id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

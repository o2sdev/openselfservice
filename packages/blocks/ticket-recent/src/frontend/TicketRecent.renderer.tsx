import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { TicketRecent } from './TicketRecent.server';
import { TicketRecentRendererProps } from './TicketRecent.types';

export const TicketRecentRenderer: React.FC<TicketRecentRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={4} />
                    </Container>
                </>
            }
        >
            <TicketRecent id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

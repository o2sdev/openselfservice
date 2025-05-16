import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { TicketRecent } from './TicketRecent.server';

export interface TicketRecentRendererProps {
    id: string;
    accessToken?: string;
}

export const TicketRecentRenderer: React.FC<TicketRecentRendererProps> = ({ id, accessToken }) => {
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
            <TicketRecent id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

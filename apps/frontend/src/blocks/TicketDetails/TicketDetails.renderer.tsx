import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { TicketDetails } from './TicketDetails.server';

export interface TicketDetailsRendererProps {
    slug: string[];
    id: string;
    accessToken?: string;
}

export const TicketDetailsRenderer: React.FC<TicketDetailsRendererProps> = ({ slug, id, accessToken }) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={[10, 23]} />
                    </Container>
                </>
            }
        >
            <TicketDetails id={id} ticketId={slug[1]} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

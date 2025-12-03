import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { TicketDetails } from './TicketDetails.server';
import { TicketDetailsRendererProps } from './TicketDetails.types';

export const TicketDetailsRenderer = ({ slug, id, accessToken, routing, hasPriority }: TicketDetailsRendererProps) => {
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
                        <Loading bars={[10, 23]} />
                    </Container>
                </div>
            }
        >
            <TicketDetails
                id={id}
                ticketId={slug[1]}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

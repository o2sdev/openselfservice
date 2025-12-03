import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { TicketRecent } from './TicketRecent.server';
import { TicketRecentRendererProps } from './TicketRecent.types';

export const TicketRecentRenderer = ({ id, accessToken, routing, hasPriority }: TicketRecentRendererProps) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-4">
                    <Loading bars={1} />
                    <Loading bars={4} />
                </div>
            }
        >
            <TicketRecent
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

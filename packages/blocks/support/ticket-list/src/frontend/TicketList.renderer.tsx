import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { TicketListServer } from './TicketList.server';
import { TicketListRendererProps } from './TicketList.types';

export const TicketListRenderer: React.FC<TicketListRendererProps> = ({
    id,
    accessToken,
    routing,
    hasPriority,
    isDraftModeEnabled,
}) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex">
                    <Loading bars={1} />
                </div>
            }
        >
            <TicketListServer
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
                isDraftModeEnabled={isDraftModeEnabled}
            />
        </Suspense>
    );
};

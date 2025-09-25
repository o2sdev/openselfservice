import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { TicketListServer } from './TicketList.server';
import { TicketListRendererProps } from './TicketList.types';

export const TicketListRenderer: React.FC<TicketListRendererProps> = ({ id, accessToken, routing, hasPriority }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-6">
                    <Loading bars={1} />
                    <Loading bars={[15, 17]} />
                </div>
            }
        >
            <TicketListServer
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { TicketListServer } from './TicketList.server';
import { TicketListProps } from './TicketList.types';

export const TicketListRenderer: React.FC<TicketListProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={[15, 17]} />}>
            <TicketListServer id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

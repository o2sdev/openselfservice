import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { TicketListServer } from './TicketList.server';

export interface TicketListRendererProps {
    id: string;
    accessToken?: string;
}

export const TicketListRenderer: React.FC<TicketListRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={[15, 17]} />}>
            <TicketListServer id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

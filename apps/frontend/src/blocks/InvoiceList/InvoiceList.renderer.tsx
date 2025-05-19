import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { InvoiceList } from './InvoiceList.server';

export interface InvoiceListRendererProps {
    id: string;
    accessToken?: string;
}

export const InvoiceListRenderer: React.FC<InvoiceListRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={20} />}>
            <InvoiceList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

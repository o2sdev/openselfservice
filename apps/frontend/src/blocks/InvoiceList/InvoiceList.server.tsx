import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { InvoiceListProps } from './InvoiceList.types';

export const InvoiceListDynamic = dynamic(() =>
    import('./InvoiceList.client').then((module) => module.InvoiceListPure),
);

export const InvoiceList: React.FC<InvoiceListProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.blocks.getInvoiceList(
        {
            id,
            limit: 5,
            offset: 0,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <InvoiceListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};

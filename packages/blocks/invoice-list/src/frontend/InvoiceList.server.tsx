import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { InvoiceListProps } from './InvoiceList.types';

export const InvoiceListDynamic = dynamic(() =>
    import('./InvoiceList.client').then((module) => module.InvoiceListPure),
);

export const InvoiceListServer: React.FC<InvoiceListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data;
    try {
        data = await sdk.blocks.getInvoiceList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <InvoiceListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};

import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/invoice-list.client';
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
    let data: Model.InvoiceListBlock;
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

    // Check view permission - if not allowed, don't render
    if (!data.permissions?.view) {
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

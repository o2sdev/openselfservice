import dynamic from 'next/dynamic';
import React from 'react';

import { parseFiltersFromSearchParams } from '@o2s/ui/hooks/use-url-filters.utils';

import type { Model, Request } from '../api-harmonization/invoice-list.client';
import { sdk } from '../sdk';

import { InvoiceListProps } from './InvoiceList.types';

/** Filter keys the block query understands, as the client writes them (`?invoice_sort=…`). */
const FILTER_KEYS = ['search', 'sort', 'type', 'paymentStatus', 'dateFrom', 'dateTo'] as const;

const NAMESPACE = 'invoice';

export const InvoiceListDynamic = dynamic(() =>
    import('./InvoiceList.client').then((module) => module.InvoiceListPure),
);

export const InvoiceListServer: React.FC<InvoiceListProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    searchParams,
}) => {
    let data: Model.InvoiceListBlock;
    try {
        data = await sdk.blocks.getInvoiceList(
            {
                id,
                ...(parseFiltersFromSearchParams(searchParams, {
                    namespace: NAMESPACE,
                    keys: FILTER_KEYS,
                }) as Partial<Request.GetInvoiceListBlockQuery>),
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

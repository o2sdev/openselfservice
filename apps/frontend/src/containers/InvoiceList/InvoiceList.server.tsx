import React from 'react';

import { sdk } from '@/api/sdk';

import { InvoiceListDynamic } from './InvoiceList.dynamic';
import { InvoiceListProps } from './InvoiceList.types';

export const InvoiceList: React.FC<InvoiceListProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getInvoiceList(
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

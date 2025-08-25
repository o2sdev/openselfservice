import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/invoice-list.client';

export interface InvoiceListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type InvoiceListPureProps = InvoiceListProps & Model.InvoiceListBlock;

export type InvoiceListRendererProps = Omit<InvoiceListProps, ''> & {
    slug: string[];
};

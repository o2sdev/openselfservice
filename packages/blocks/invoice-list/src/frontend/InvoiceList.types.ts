import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/invoice-list.client';

export type InvoiceListProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type InvoiceListPureProps = InvoiceListProps & Model.InvoiceListBlock;

export type InvoiceListRendererProps = Omit<InvoiceListProps, ''> & {
    slug: string[];
};

import { Blocks } from '@o2s/api-harmonization';

export interface InvoiceListProps {
    id: string;
    accessToken?: string;
    locale: string;
}

export type InvoiceListPureProps = InvoiceListProps & Blocks.InvoiceList.Model.InvoiceListBlock;

import { Components } from '@o2s/api-harmonization';

export interface InvoiceListProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type InvoiceListPureProps = InvoiceListProps & Components.InvoiceList.Model.InvoiceListComponent;

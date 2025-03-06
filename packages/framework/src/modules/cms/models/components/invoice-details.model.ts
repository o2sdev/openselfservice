import { Invoice } from '@/modules/invoices/invoices.model';
import { Component, Mapping } from '@/utils/models';

export class InvoiceDetailsComponent extends Component.Component {
    properties!: {
        [key: string]: string;
    };
    fieldMapping!: Mapping.Mapping<Invoice>;
    labels!: {
        today: string;
        yesterday: string;
    };
}

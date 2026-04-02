import { Invoice } from '@/modules/invoices/invoices.model';

import { Block, Mapping } from '@/utils/models';

/** CMS block configuration for invoice details view. */
export class InvoiceDetailsBlock extends Block.Block {
    properties!: {
        [key: string]: string;
    };
    fieldMapping!: Mapping.Mapping<Invoice>;
    labels!: {
        today: string;
        yesterday: string;
    };
}

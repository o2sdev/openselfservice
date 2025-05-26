import { Block, Mapping } from '@/utils/models';

import { Invoice } from '@/modules/invoices/invoices.model';

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

import { Invoice } from '@/modules/invoices/invoices.model';
import { Block, Mapping } from '@/utils/models';

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

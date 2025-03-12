import { Invoices } from '../../models';
import { Block } from '../../utils';

export class PaymentsSummaryBlock extends Block.Block {
    __typename!: 'PaymentsSummaryBlock';
    currency!: Invoices.Model.Invoice['currency'];
    overdue!: {
        title?: string;
        message?: string;
        noPaymentsMessage?: string;
        buttonLabel?: string;
        amount: {
            value: number;
        };
        overdueDays: number;
    };
    toBePaid!: {
        title?: string;
        message?: string;
        noPaymentsMessage?: string;
        buttonLabel?: string;
        amount: {
            value: number;
        };
    };
}

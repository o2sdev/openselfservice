import { Block } from '@/utils/models';

export class PaymentsSummaryBlock extends Block.Block {
    overdue!: {
        title?: string;
        message?: string;
        noPaymentsMessage?: string;
        buttonLabel?: string;
    };
    toBePaid!: {
        title?: string;
        message?: string;
        noPaymentsMessage?: string;
        buttonLabel?: string;
    };
}

// export class PaymentsSummaryBlock extends Block.Block {
//     overdue!: InfoCard;
//     toBePaid!: InfoCard;
// }

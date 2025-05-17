import { Block, InfoCard } from '@/utils/models';

export class PaymentsSummaryBlock extends Block.Block {
    overdue!: InfoCard.InfoCard;
    toBePaid!: InfoCard.InfoCard;
}

import { Block } from '@/utils/models';

/** CMS block configuration for payments history chart. */
export class PaymentsHistoryBlock extends Block.Block {
    title?: string;
    topSegment!: string;
    middleSegment!: string;
    bottomSegment!: string;
    total!: string;
    monthsToShow?: number;
}

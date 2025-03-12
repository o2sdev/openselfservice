import { Block } from '@/utils/models';

export class PaymentsHistoryBlock extends Block.Block {
    title?: string;
    topSegment?: string;
    middleSegment?: string;
    bottomSegment?: string;
    total?: string;
    monthsToShow?: number;
}

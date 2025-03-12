import { Block } from '../../utils';

export class PaymentsHistoryBlock extends Block.Block {
    __typename!: 'PaymentsHistoryBlock';
    title?: string;
    labels!: {
        topSegment?: string;
        middleSegment?: string;
        bottomSegment?: string;
        total?: string;
    };
    currency!: string;
    chartData!: BarData[];
}

export class BarData {
    month!: string;
    topSegment!: string;
    middleSegment!: string;
    bottomSegment!: string;
    total!: string;
}

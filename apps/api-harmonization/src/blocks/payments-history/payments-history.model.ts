import { Component } from '../../utils';

export class PaymentsHistoryComponent extends Component.Component {
    __typename!: 'PaymentsHistoryComponent';
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

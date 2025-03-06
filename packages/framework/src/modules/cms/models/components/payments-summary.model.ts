import { Component } from '@/utils/models';

export class PaymentsSummaryComponent extends Component.Component {
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

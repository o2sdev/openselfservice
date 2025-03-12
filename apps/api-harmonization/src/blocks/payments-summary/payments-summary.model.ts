import { Invoices } from '../../models';
import { Component } from '../../utils';

export class PaymentsSummaryComponent extends Component.Component {
    __typename!: 'PaymentsSummaryComponent';
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

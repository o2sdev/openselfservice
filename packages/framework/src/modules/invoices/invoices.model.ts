import { Currency, Pagination } from '@/utils/models';

export type PaymentStatusType = 'PAYMENT_COMPLETE' | 'PAYMENT_DECLINED' | 'PAYMENT_DUE' | 'PAYMENT_PAST_DUE';

export type InvoiceType = 'STANDARD' | 'PROFORMA' | 'CREDIT_NOTE' | 'DEBIT_NOTE';

export class Invoice {
    id!: string;
    externalId!: string;
    billingAccountId!: string;
    billingPeriod!: string;
    paymentMethodId!: string;
    type!: InvoiceType;
    paymentStatus!: PaymentStatusType;
    issuedDate!: string;
    paymentDueDate!: string;
    currency!: Currency.Currency;
    totalAmountDue!: Money;
    totalNetAmountDue!: Money;
    totalAmountPaid!: Money;
    totalToBePaid!: Money;
}

export type Money = {
    value: number;
};

export type Invoices = Pagination.Paginated<Invoice>;

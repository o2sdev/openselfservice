import { Pagination, Price } from '@/utils/models';

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
    currency!: Price.Currency;
    paymentDueDate!: string;
    totalAmountDue!: Price.Price;
    totalNetAmountDue!: Price.Price;
    totalAmountPaid!: Price.Price;
    totalToBePaid!: Price.Price;
}

export type Invoices = Pagination.Paginated<Invoice>;

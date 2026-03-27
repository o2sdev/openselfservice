import { ApiProperty } from '@nestjs/swagger';

import { Pagination, Price } from '@/utils/models';

/** Allowed invoice type values (OpenAPI + TS union). */
export const INVOICE_TYPE_VALUES = ['STANDARD', 'PROFORMA', 'CREDIT_NOTE', 'DEBIT_NOTE'] as const;
export type InvoiceType = (typeof INVOICE_TYPE_VALUES)[number];

/** Allowed invoice payment status values (OpenAPI + TS union). */
export const PAYMENT_STATUS_TYPE_VALUES = [
    'PAYMENT_COMPLETE',
    'PAYMENT_DECLINED',
    'PAYMENT_DUE',
    'PAYMENT_PAST_DUE',
] as const;
export type PaymentStatusType = (typeof PAYMENT_STATUS_TYPE_VALUES)[number];

/** Invoice: id, billingAccountId, type, paymentStatus, amounts, dates, currency. */
export class Invoice {
    @ApiProperty({ description: 'Unique invoice identifier' })
    id!: string;

    @ApiProperty({ description: 'External system invoice identifier' })
    externalId!: string;

    @ApiProperty({ description: 'Associated billing account identifier' })
    billingAccountId!: string;

    @ApiProperty({ description: 'Billing period (e.g., "2024-01")' })
    billingPeriod!: string;

    @ApiProperty({ description: 'Payment method identifier' })
    paymentMethodId!: string;

    @ApiProperty({ description: 'Invoice type', enum: INVOICE_TYPE_VALUES })
    type!: InvoiceType;

    @ApiProperty({ description: 'Payment status', enum: PAYMENT_STATUS_TYPE_VALUES })
    paymentStatus!: PaymentStatusType;

    @ApiProperty({ description: 'Invoice issue date in ISO 8601 format' })
    issuedDate!: string;

    @ApiProperty({ description: 'Invoice currency code' })
    currency!: Price.Currency;

    @ApiProperty({ description: 'Payment due date in ISO 8601 format' })
    paymentDueDate!: string;

    @ApiProperty({ description: 'Total amount due including tax' })
    totalAmountDue!: Price.Price;

    @ApiProperty({ description: 'Net amount due before tax' })
    totalNetAmountDue!: Price.Price;

    @ApiProperty({ description: 'Amount already paid' })
    totalAmountPaid!: Price.Price;

    @ApiProperty({ description: 'Remaining amount to be paid' })
    totalToBePaid!: Price.Price;
}

/** Paginated invoice list for OpenAPI schema. */
export class PaginatedInvoices extends Pagination.Paginated<Invoice> {
    @ApiProperty({ description: 'Array of invoices', type: () => [Invoice] })
    declare data: Invoice[];

    @ApiProperty({ description: 'Total number of invoices matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedInvoices class for OpenAPI compatibility. */
export type Invoices = Pagination.Paginated<Invoice>;

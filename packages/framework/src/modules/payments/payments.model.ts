import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Pagination } from '@/utils/models';

/** Allowed payment session status values (OpenAPI + TS union). */
export const PAYMENT_SESSION_STATUS_VALUES = ['PENDING', 'AUTHORIZED', 'CAPTURED', 'FAILED', 'CANCELLED'] as const;
export type PaymentSessionStatus = (typeof PAYMENT_SESSION_STATUS_VALUES)[number];

/** Supported payment provider returned by integration. */
export class PaymentProvider {
    @ApiProperty({ description: 'Unique payment provider identifier' })
    id!: string;

    @ApiProperty({ description: 'Payment provider display name' })
    name!: string;

    @ApiProperty({ description: 'Payment provider type (e.g., card, bank_transfer)' })
    type!: string;

    @ApiProperty({ description: 'Whether this provider is currently enabled' })
    isEnabled!: boolean;

    @ApiProperty({ description: 'True when provider requires redirect flow (e.g., hosted checkout)' })
    requiresRedirect!: boolean;

    @ApiPropertyOptional({ description: 'Provider-specific configuration payload', additionalProperties: true })
    config?: Record<string, unknown>;
}

/** Payment session linked to a cart checkout flow. */
export class PaymentSession {
    @ApiProperty({ description: 'Unique payment session identifier' })
    id!: string;

    @ApiProperty({ description: 'Associated cart identifier' })
    cartId!: string;

    @ApiProperty({ description: 'Payment provider identifier' })
    providerId!: string;

    @ApiProperty({ description: 'Current payment session status', enum: PAYMENT_SESSION_STATUS_VALUES })
    status!: PaymentSessionStatus;

    @ApiPropertyOptional({ description: 'Redirect target URL for redirect-based providers' })
    redirectUrl?: string;

    @ApiPropertyOptional({ description: 'Client secret/token for embedded payment forms' })
    clientSecret?: string;

    @ApiPropertyOptional({ description: 'Session expiration timestamp in ISO 8601 format' })
    expiresAt?: string;

    @ApiPropertyOptional({ description: 'Provider-specific metadata payload', additionalProperties: true })
    metadata?: Record<string, unknown>;
}

/** Paginated payment provider list for OpenAPI schema. */
export class PaginatedPaymentProviders extends Pagination.Paginated<PaymentProvider> {
    @ApiProperty({ description: 'Array of payment providers', type: () => [PaymentProvider] })
    declare data: PaymentProvider[];

    @ApiProperty({ description: 'Total number of payment providers' })
    declare total: number;
}

/** Paginated payment session list for OpenAPI schema. */
export class PaginatedPaymentSessions extends Pagination.Paginated<PaymentSession> {
    @ApiProperty({ description: 'Array of payment sessions', type: () => [PaymentSession] })
    declare data: PaymentSession[];

    @ApiProperty({ description: 'Total number of payment sessions' })
    declare total: number;
}

/** @deprecated Use PaginatedPaymentProviders class for OpenAPI compatibility. */
export type PaymentProviders = Pagination.Paginated<PaymentProvider>;
/** @deprecated Use PaginatedPaymentSessions class for OpenAPI compatibility. */
export type PaymentSessions = Pagination.Paginated<PaymentSession>;

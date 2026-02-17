import { Pagination } from '@/utils/models';

export class PaymentProvider {
    id!: string;
    name!: string;
    type!: string;
    isEnabled!: boolean;
    requiresRedirect!: boolean; // true for redirect-based providers (Stripe Checkout)
    config?: Record<string, unknown>; // Provider-specific config
}

export type PaymentSessionStatus = 'PENDING' | 'AUTHORIZED' | 'CAPTURED' | 'FAILED' | 'CANCELLED';

export class PaymentSession {
    id!: string;
    cartId!: string;
    providerId!: string;
    status!: PaymentSessionStatus;
    redirectUrl?: string; // For redirect-based providers
    clientSecret?: string; // For embedded payment forms
    expiresAt?: string;
    metadata?: Record<string, unknown>;
}

export type PaymentProviders = Pagination.Paginated<PaymentProvider>;
export type PaymentSessions = Pagination.Paginated<PaymentSession>;

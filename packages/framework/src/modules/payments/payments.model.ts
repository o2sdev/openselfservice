import { Pagination } from '@/utils/models';

/** Supported payment provider returned by integration. */
export class PaymentProvider {
    id!: string;
    name!: string;
    type!: string;
    isEnabled!: boolean;
    /** True when provider requires redirect flow (for example hosted checkout). */
    requiresRedirect!: boolean;
    /** Provider-specific configuration payload. */
    config?: Record<string, unknown>;
}

/** Payment session lifecycle status. */
export type PaymentSessionStatus = 'PENDING' | 'AUTHORIZED' | 'CAPTURED' | 'FAILED' | 'CANCELLED';

/** Payment session linked to a cart checkout flow. */
export class PaymentSession {
    id!: string;
    cartId!: string;
    providerId!: string;
    status!: PaymentSessionStatus;
    /** Redirect target for redirect-based providers. */
    redirectUrl?: string;
    /** Client secret/token for embedded payment forms. */
    clientSecret?: string;
    expiresAt?: string;
    /** Provider-specific metadata payload. */
    metadata?: Record<string, unknown>;
}

/** Paginated payment provider list. */
export type PaymentProviders = Pagination.Paginated<PaymentProvider>;
/** Paginated payment session list. */
export type PaymentSessions = Pagination.Paginated<PaymentSession>;

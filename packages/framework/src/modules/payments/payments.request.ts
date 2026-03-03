/** Query params for fetching available payment providers. */
export class GetProvidersParams {
    /** Region identifier used to resolve provider availability. */
    regionId!: string;
    /** Optional locale passed via query string/header (kept as string). */
    locale?: string;
}

/** Request body for creating a payment session. */
export class CreateSessionBody {
    /** Cart identifier to bind the payment session to. */
    cartId!: string;
    /** Payment provider identifier. */
    providerId!: string;
    /** URL used for redirect after successful/finished payment flow. */
    returnUrl!: string;
    /** Optional URL used for redirect when payment flow is canceled. */
    cancelUrl?: string;
    /** Provider-specific metadata payload. */
    metadata?: Record<string, unknown>;
}

/** Route params for fetching a single payment session. */
export class GetSessionParams {
    /** Payment session identifier. */
    id!: string;
}

/** Route params for updating a single payment session. */
export class UpdateSessionParams {
    /** Payment session identifier. */
    id!: string;
}

/** Request body for updating a payment session. */
export class UpdateSessionBody {
    /** Updated success return URL. */
    returnUrl?: string;
    /** Updated cancel return URL. */
    cancelUrl?: string;
    /** Provider-specific metadata payload. */
    metadata?: Record<string, unknown>;
}

/** Route params for canceling a payment session. */
export class CancelSessionParams {
    /** Payment session identifier. */
    id!: string;
}

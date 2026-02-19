export class GetProvidersParams {
    regionId!: string;
    locale?: string; // From x-locale header
}

export class CreateSessionBody {
    cartId!: string;
    providerId!: string;
    returnUrl!: string; // Where to redirect after payment
    cancelUrl?: string; // Where to redirect if payment cancelled
    metadata?: Record<string, unknown>;
}

export class GetSessionParams {
    id!: string;
}

export class UpdateSessionParams {
    id!: string;
}

export class UpdateSessionBody {
    returnUrl?: string;
    cancelUrl?: string;
    metadata?: Record<string, unknown>;
}

export class CancelSessionParams {
    id!: string;
}

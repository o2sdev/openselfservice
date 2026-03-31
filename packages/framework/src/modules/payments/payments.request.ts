import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/** Query params for fetching available payment providers. */
export class GetProvidersParams {
    /** Region identifier used to resolve provider availability. */
    @ApiProperty({ description: 'Region identifier used to resolve available payment providers.' })
    regionId!: string;
    /** Optional locale passed via query string/header (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Request body for creating a payment session. */
export class CreateSessionBody {
    /** Cart identifier to bind the payment session to. */
    @ApiProperty({ description: 'Cart identifier used to create payment session context.' })
    cartId!: string;
    /** Payment provider identifier. */
    @ApiProperty({ description: 'Payment provider identifier selected by user.' })
    providerId!: string;
    /** URL used for redirect after successful/finished payment flow. */
    @ApiProperty({ description: 'Return URL for successful/finished payment flow.' })
    returnUrl!: string;
    /** Optional URL used for redirect when payment flow is canceled. */
    @ApiPropertyOptional({ description: 'Optional return URL for canceled payment flow.' })
    cancelUrl?: string;
    /** Provider-specific metadata payload. */
    @ApiPropertyOptional({ description: 'Provider-specific metadata payload.', additionalProperties: true })
    metadata?: Record<string, unknown>;
}

/** Route params for fetching a single payment session. */
export class GetSessionParams {
    /** Payment session identifier. */
    @ApiProperty({ description: 'Payment session identifier.' })
    id!: string;
}

/** Route params for updating a single payment session. */
export class UpdateSessionParams {
    /** Payment session identifier. */
    @ApiProperty({ description: 'Payment session identifier.' })
    id!: string;
}

/** Request body for updating a payment session. */
export class UpdateSessionBody {
    /** Updated success return URL. */
    @ApiPropertyOptional({ description: 'Updated return URL for successful/finished payment flow.' })
    returnUrl?: string;
    /** Updated cancel return URL. */
    @ApiPropertyOptional({ description: 'Updated return URL for canceled payment flow.' })
    cancelUrl?: string;
    /** Provider-specific metadata payload. */
    @ApiPropertyOptional({ description: 'Provider-specific metadata payload.', additionalProperties: true })
    metadata?: Record<string, unknown>;
}

/** Route params for canceling a payment session. */
export class CancelSessionParams {
    /** Payment session identifier. */
    @ApiProperty({ description: 'Payment session identifier.' })
    id!: string;
}

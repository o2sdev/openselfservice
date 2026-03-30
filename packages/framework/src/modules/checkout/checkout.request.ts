import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Address } from '@/utils/models';

/** Route params for setting checkout addresses on a cart. */
export class SetAddressesParams {
    /** Cart identifier. */
    @ApiProperty({ description: 'Cart identifier.' })
    cartId!: string;
}

/** Request body for setting shipping and billing addresses during checkout. */
export class SetAddressesBody {
    /** Saved shipping address identifier (authenticated users). */
    @ApiPropertyOptional({ description: 'Saved shipping address identifier for authenticated users.' })
    shippingAddressId?: string;
    /** Inline shipping address payload. */
    @ApiPropertyOptional({ description: 'Inline shipping address payload.' })
    shippingAddress?: Address.Address;
    /** Saved billing address identifier (authenticated users). */
    @ApiPropertyOptional({ description: 'Saved billing address identifier for authenticated users.' })
    billingAddressId?: string;
    /** Inline billing address payload. */
    @ApiPropertyOptional({ description: 'Inline billing address payload.' })
    billingAddress?: Address.Address;
    /** Optional checkout notes. */
    @ApiPropertyOptional({ description: 'Optional checkout notes.' })
    /** Copy billing address as shipping address. */
    @ApiPropertyOptional({ description: 'Copy billing address as shipping address.' })
    sameAsBillingAddress?: boolean;
    /** Optional checkout notes. */
    @ApiPropertyOptional({ description: 'Optional checkout notes.' })
    notes?: string;
    /** Customer email, typically required for guest checkout. */
    @ApiPropertyOptional({ description: 'Customer email, typically required for guest checkout.' })
    email?: string;
}

/** Route params for setting a checkout shipping method. */
export class SetShippingMethodParams {
    /** Cart identifier. */
    @ApiProperty({ description: 'Cart identifier.' })
    cartId!: string;
}

/** Request body for setting a checkout shipping method. */
export class SetShippingMethodBody {
    /** Shipping option identifier (from shipping options endpoint). */
    @ApiProperty({ description: 'Shipping option identifier returned by shipping options endpoint.' })
    shippingOptionId!: string;
}

/** Route params for setting checkout payment provider. */
export class SetPaymentParams {
    /** Cart identifier. */
    @ApiProperty({ description: 'Cart identifier.' })
    cartId!: string;
}

/** Request body for setting checkout payment provider. */
export class SetPaymentBody {
    /** Payment provider identifier. */
    @ApiProperty({ description: 'Payment provider identifier.' })
    providerId!: string;
    /** URL used for redirect after successful/finished payment flow. */
    @ApiProperty({ description: 'URL used for redirect after successful payment flow.' })
    returnUrl!: string;
    /** Optional URL used for redirect when payment flow is canceled. */
    @ApiPropertyOptional({ description: 'Optional URL used for redirect when payment flow is canceled.' })
    cancelUrl?: string;
    /** Provider-specific metadata payload. */
    @ApiPropertyOptional({ description: 'Provider-specific metadata payload.', additionalProperties: true })
    metadata?: Record<string, unknown>;
}

/** Route params for fetching available shipping options for a cart. */
export class GetShippingOptionsParams {
    /** Cart identifier. */
    @ApiProperty({ description: 'Cart identifier.' })
    cartId!: string;
    /** Optional locale passed via query string/header (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Route params for fetching checkout summary for a cart. */
export class GetCheckoutSummaryParams {
    /** Cart identifier. */
    @ApiProperty({ description: 'Cart identifier.' })
    cartId!: string;
    /** Optional locale passed via query string/header (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
}

/** Route params for placing an order from checkout. */
export class PlaceOrderParams {
    /** Cart identifier. */
    @ApiProperty({ description: 'Cart identifier.' })
    cartId!: string;
    locale?: string; // From x-locale header
}

/** Optional request body for placing an order. */
export class PlaceOrderBody {
    /** Customer email, required for guest checkout when not set earlier. */
    @ApiPropertyOptional({ description: 'Customer email, required for guest checkout when not set earlier.' })
    email?: string;
}

/** Route params for completing checkout in one call. */
export class CompleteCheckoutParams {
    /** Cart identifier. */
    @ApiProperty({ description: 'Cart identifier.' })
    cartId!: string;
}

/** Request body for complete-checkout orchestration call. */
export class CompleteCheckoutBody {
    /** Saved shipping address identifier (authenticated users). */
    @ApiPropertyOptional({ description: 'Saved shipping address identifier for authenticated users.' })
    shippingAddressId?: string;
    /** Inline shipping address payload (required for guests). */
    @ApiPropertyOptional({ description: 'Inline shipping address payload (required for guest checkout).' })
    shippingAddress?: Address.Address;
    /** Saved billing address identifier (authenticated users). */
    @ApiPropertyOptional({ description: 'Saved billing address identifier for authenticated users.' })
    billingAddressId?: string;
    /** Inline billing address payload (required for guests). */
    @ApiPropertyOptional({ description: 'Inline billing address payload (required for guest checkout).' })
    billingAddress?: Address.Address;
    /** Selected shipping method identifier. */
    @ApiPropertyOptional({ description: 'Selected shipping method identifier.' })
    shippingMethodId?: string;
    /** Payment provider identifier. */
    @ApiProperty({ description: 'Payment provider identifier.' })
    paymentProviderId!: string;
    /** URL used for redirect after successful/finished payment flow. */
    @ApiProperty({ description: 'URL used for redirect after successful payment flow.' })
    returnUrl!: string;
    /** Optional URL used for redirect when payment flow is canceled. */
    @ApiPropertyOptional({ description: 'Optional URL used for redirect when payment flow is canceled.' })
    cancelUrl?: string;
    /** Optional checkout notes. */
    @ApiPropertyOptional({ description: 'Optional checkout notes.' })
    notes?: string;
    /** Customer email, required for guest checkout. */
    @ApiPropertyOptional({ description: 'Customer email required for guest checkout.' })
    email?: string;
    /** Provider/integration-specific metadata payload. */
    @ApiPropertyOptional({ description: 'Provider-specific metadata payload.', additionalProperties: true })
    metadata?: Record<string, unknown>;
}

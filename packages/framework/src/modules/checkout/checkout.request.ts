import { Address } from '@/utils/models';

/** Route params for setting checkout addresses on a cart. */
export class SetAddressesParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Request body for setting shipping and billing addresses during checkout. */
export class SetAddressesBody {
    /** Saved shipping address identifier (authenticated users). */
    shippingAddressId?: string;
    /** Inline shipping address payload. */
    shippingAddress?: Address.Address;
    /** Saved billing address identifier (authenticated users). */
    billingAddressId?: string;
    /** Inline billing address payload. */
    billingAddress?: Address.Address;
    /** Optional checkout notes. */
    notes?: string;
    /** Customer email, typically required for guest checkout. */
    email?: string;
}

/** Route params for setting a checkout shipping method. */
export class SetShippingMethodParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Request body for setting a checkout shipping method. */
export class SetShippingMethodBody {
    /** Shipping option identifier (from shipping options endpoint). */
    shippingOptionId!: string;
}

/** Route params for setting checkout payment provider. */
export class SetPaymentParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Request body for setting checkout payment provider. */
export class SetPaymentBody {
    /** Payment provider identifier. */
    providerId!: string;
    /** URL used for redirect after successful/finished payment flow. */
    returnUrl!: string;
    /** Optional URL used for redirect when payment flow is canceled. */
    cancelUrl?: string;
    /** Provider-specific metadata payload. */
    metadata?: Record<string, unknown>;
}

/** Route params for fetching available shipping options for a cart. */
export class GetShippingOptionsParams {
    /** Cart identifier. */
    cartId!: string;
    /** Optional locale passed via query string/header (kept as string). */
    locale?: string;
}

/** Route params for fetching checkout summary for a cart. */
export class GetCheckoutSummaryParams {
    /** Cart identifier. */
    cartId!: string;
    /** Optional locale passed via query string/header (kept as string). */
    locale?: string;
}

/** Route params for placing an order from checkout. */
export class PlaceOrderParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Optional request body for placing an order. */
export class PlaceOrderBody {
    /** Customer email, required for guest checkout when not set earlier. */
    email?: string;
}

/** Route params for completing checkout in one call. */
export class CompleteCheckoutParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Request body for complete-checkout orchestration call. */
export class CompleteCheckoutBody {
    /** Saved shipping address identifier (authenticated users). */
    shippingAddressId?: string;
    /** Inline shipping address payload (required for guests). */
    shippingAddress?: Address.Address;
    /** Saved billing address identifier (authenticated users). */
    billingAddressId?: string;
    /** Inline billing address payload (required for guests). */
    billingAddress?: Address.Address;
    /** Selected shipping method identifier. */
    shippingMethodId?: string;
    /** Payment provider identifier. */
    paymentProviderId!: string;
    /** URL used for redirect after successful/finished payment flow. */
    returnUrl!: string;
    /** Optional URL used for redirect when payment flow is canceled. */
    cancelUrl?: string;
    /** Optional checkout notes. */
    notes?: string;
    /** Customer email, required for guest checkout. */
    email?: string;
    /** Provider/integration-specific metadata payload. */
    metadata?: Record<string, unknown>;
}

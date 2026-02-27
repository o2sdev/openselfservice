import { Address } from '@/utils/models';

export class SetAddressesParams {
    cartId!: string;
}

export class SetAddressesBody {
    sameAsBillingAddress?: boolean; // Copy billing address as shipping address
    shippingAddressId?: string; // Use saved address (authenticated users only)
    shippingAddress?: Address.Address; // Or provide new address
    billingAddressId?: string; // Use saved address (authenticated users only)
    billingAddress?: Address.Address; // Or provide new address
    notes?: string;
    email?: string; // For guest checkout
}

export class SetShippingMethodParams {
    cartId!: string;
}

export class SetShippingMethodBody {
    shippingOptionId!: string; // Shipping option ID from getShippingOptions()
}

export class SetPaymentParams {
    cartId!: string;
}

export class SetPaymentBody {
    providerId!: string;
    returnUrl!: string;
    cancelUrl?: string;
    metadata?: Record<string, unknown>;
}

export class GetShippingOptionsParams {
    cartId!: string;
    locale?: string; // From x-locale header
}

export class GetCheckoutSummaryParams {
    cartId!: string;
    locale?: string; // From x-locale header
}

export class PlaceOrderParams {
    cartId!: string;
    locale?: string; // From x-locale header
}

export class PlaceOrderBody {
    // Optional - can be empty if all data already in cart
    // Allows frontend to confirm before placing
    email?: string; // Required for guest checkout if not provided in shipping setup
}

export class CompleteCheckoutParams {
    cartId!: string;
}

export class CompleteCheckoutBody {
    shippingAddressId?: string; // Use saved address (authenticated users only)
    shippingAddress?: Address.Address; // Or provide new address (required for guests)
    billingAddressId?: string; // Use saved address (authenticated users only)
    billingAddress?: Address.Address; // Or provide new address (can differ from shipping, required for guests)
    shippingMethodId?: string;
    paymentProviderId!: string;
    returnUrl!: string;
    cancelUrl?: string;
    notes?: string;
    email?: string; // Required for guest checkout (for order confirmation)
    metadata?: Record<string, unknown>;
}

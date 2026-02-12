import { Address } from '@/utils/models';

export class SetupAddressesParams {
    cartId!: string;
}

export class SetupAddressesBody {
    shippingAddressId?: string; // Use saved address (authenticated users only)
    shippingAddress?: Address.Address; // Or provide new address
    billingAddressId?: string; // Use saved address (authenticated users only)
    billingAddress?: Address.Address; // Or provide new address
    notes?: string;
    guestEmail?: string; // For guest checkout
}

export class SetupShippingMethodParams {
    cartId!: string;
}

export class SetupShippingMethodBody {
    shippingOptionId!: string; // Shipping option ID from getShippingOptions()
}

export class SetupPaymentParams {
    cartId!: string;
}

export class SetupPaymentBody {
    providerId!: string;
    metadata?: Record<string, unknown>;
}

export class GetShippingOptionsParams {
    cartId!: string;
}

export class GetCheckoutSummaryParams {
    cartId!: string;
}

export class PlaceOrderParams {
    cartId!: string;
}

export class PlaceOrderBody {
    // Optional - can be empty if all data already in cart
    // Allows frontend to confirm before placing
    guestEmail?: string; // Required for guest checkout if not provided in shipping setup
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
    notes?: string;
    guestEmail?: string; // Required for guest checkout (for order confirmation)
    metadata?: Record<string, unknown>;
}

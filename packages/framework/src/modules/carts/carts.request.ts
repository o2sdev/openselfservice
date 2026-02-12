import { CartType, PaymentMethodType } from './carts.model';
import { Address, Price } from '@/utils/models';
import { PaginationQuery } from '@/utils/models/pagination';

// Cart retrieval
export class GetCartParams {
    id!: string;
}

export class GetCartListQuery extends PaginationQuery {
    customerId?: string;
    type?: CartType;
    sort?: string;
    locale?: string;
}

// Cart creation and updates
export class CreateCartBody {
    customerId?: string;
    name?: string;
    type?: CartType;
    regionId?: string;
    currency!: Price.Currency;
    metadata?: Record<string, unknown>;
}

export class UpdateCartParams {
    id!: string;
}

export class UpdateCartBody {
    name?: string;
    type?: CartType;
    regionId?: string;
    shippingAddressId?: string;
    billingAddressId?: string;
    shippingMethodId?: string;
    paymentMethodId?: string;
    paymentMethodType?: PaymentMethodType;
    notes?: string;
    metadata?: Record<string, unknown>;
}

export class DeleteCartParams {
    id!: string;
}

// Cart item operations
export class AddCartItemBody {
    cartId?: string; // Optional - if provided, use existing cart; if not, auto-create/find active cart
    productId!: string;
    variantId?: string;
    quantity!: number;
    currency?: Price.Currency; // Required if creating new cart
    regionId?: string; // Required if creating new cart (for Medusa.js)
    metadata?: Record<string, unknown>;
}

export class UpdateCartItemParams {
    cartId!: string;
    itemId!: string;
}

export class UpdateCartItemBody {
    quantity?: number;
    metadata?: Record<string, unknown>;
}

export class RemoveCartItemParams {
    cartId!: string;
    itemId!: string;
}

// Promotion operations
export class ApplyPromotionParams {
    cartId!: string;
}

export class ApplyPromotionBody {
    code!: string;
}

export class RemovePromotionParams {
    cartId!: string;
    promotionId!: string;
}

// Checkout operations
export class PrepareCheckoutParams {
    cartId!: string;
}

// Address operations
export class UpdateCartAddressesParams {
    cartId!: string;
}

export class UpdateCartAddressesBody {
    shippingAddressId?: string; // Use saved address (authenticated users only)
    shippingAddress?: Address.Address; // Or provide new address
    billingAddressId?: string; // Use saved address (authenticated users only)
    billingAddress?: Address.Address; // Or provide new address
    notes?: string;
    guestEmail?: string; // For guest checkout
}

// Shipping method operations
export class AddShippingMethodParams {
    cartId!: string;
}

export class AddShippingMethodBody {
    shippingOptionId!: string; // Shipping option ID from getShippingOptions()
}

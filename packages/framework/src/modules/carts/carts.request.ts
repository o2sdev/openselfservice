import { Address, Price } from '@/utils/models';
import { PaginationQuery } from '@/utils/models/pagination';

/** Route params for fetching a single cart. */
export class GetCartParams {
    /** Cart identifier. */
    id!: string;
}

/** Query params for fetching a paginated cart list. */
export class GetCartListQuery extends PaginationQuery {
    /** Customer identifier filter. */
    customerId?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    sort?: string;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

/** Request body for creating a cart. */
export class CreateCartBody {
    /** Optional customer identifier for authenticated user cart binding. */
    customerId?: string;
    /** Optional cart display name. */
    name?: string;
    /** Region identifier used by commerce backend. */
    regionId?: string;
    /** Cart currency code. */
    currency!: Price.Currency;
    /** Integration-specific cart metadata payload. */
    metadata?: Record<string, unknown>;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

/** Route params for updating a cart. */
export class UpdateCartParams {
    /** Cart identifier. */
    id!: string;
}

/** Request body for updating cart data. */
export class UpdateCartBody {
    /** Updated cart display name. */
    name?: string;
    /** Updated region identifier. */
    regionId?: string;
    /** Guest customer email. */
    email?: string;
    /** Saved shipping address identifier. */
    shippingAddressId?: string;
    /** Saved billing address identifier. */
    billingAddressId?: string;
    /** Selected shipping method identifier. */
    shippingMethodId?: string;
    /** Selected payment method/session identifier. */
    paymentMethodId?: string;
    /** Optional cart notes. */
    notes?: string;
    /** Integration-specific cart metadata payload. */
    metadata?: Record<string, unknown>;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

/** Route params for deleting a cart. */
export class DeleteCartParams {
    /** Cart identifier. */
    id!: string;
}

/** Request body for adding an item to a cart. */
export class AddCartItemBody {
    /** Existing cart identifier. If omitted, implementation may create/find active cart. */
    cartId?: string;
    /** Product SKU identifier. */
    sku!: string;
    /** Item quantity. */
    quantity!: number;
    /** Currency code (typically required when a new cart is created). */
    currency?: Price.Currency;
    /** Region identifier (typically required when a new cart is created). */
    regionId?: string;
    /** Integration-specific item metadata payload. */
    metadata?: Record<string, unknown>;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

/** Route params for updating a cart item. */
export class UpdateCartItemParams {
    /** Cart identifier. */
    cartId!: string;
    /** Cart item identifier. */
    itemId!: string;
}

/** Request body for updating a cart item. */
export class UpdateCartItemBody {
    /** Updated item quantity. */
    quantity?: number;
    /** Integration-specific item metadata payload. */
    metadata?: Record<string, unknown>;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

/** Route params for removing a cart item. */
export class RemoveCartItemParams {
    /** Cart identifier. */
    cartId!: string;
    /** Cart item identifier. */
    itemId!: string;
}

/** Route params for applying a promotion code. */
export class ApplyPromotionParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Request body for applying a promotion code. */
export class ApplyPromotionBody {
    /** Promotion/coupon code. */
    code!: string;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

/** Route params for removing a promotion code. */
export class RemovePromotionParams {
    /** Cart identifier. */
    cartId!: string;
    /** Promotion/coupon code. */
    code!: string;
}

/** Route params for preparing cart checkout. */
export class PrepareCheckoutParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Route params for updating cart addresses. */
export class UpdateCartAddressesParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Request body for updating shipping and billing addresses on cart. */
export class UpdateCartAddressesBody {
    /** Saved shipping address identifier (authenticated users). */
    shippingAddressId?: string;
    /** Inline shipping address payload. */
    shippingAddress?: Address.Address;
    /** Saved billing address identifier (authenticated users). */
    billingAddressId?: string;
    /** Inline billing address payload. */
    billingAddress?: Address.Address;
    /** Optional cart notes. */
    notes?: string;
    /** Customer email, typically required for guest checkout. */
    email?: string;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

/** Route params for adding shipping method to cart. */
export class AddShippingMethodParams {
    /** Cart identifier. */
    cartId!: string;
}

/** Request body for adding shipping method to cart. */
export class AddShippingMethodBody {
    /** Shipping option identifier (from shipping options endpoint). */
    shippingOptionId!: string;
    /** Optional locale provided in the request body (kept as string). */
    locale?: string;
}

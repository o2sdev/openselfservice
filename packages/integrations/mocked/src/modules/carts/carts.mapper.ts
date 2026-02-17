import { Carts, Models, Products } from '@o2s/framework/modules';

import { getMockProviderById, getPaymentMethodDisplay } from '../payments/mocks/providers.mock';
import { mapProductBySku } from '../products/products.mapper';

// Read payment method stored in metadata by setPayment
const mapPaymentMethodFromMetadata = (metadata: Record<string, unknown>): Carts.Model.PaymentMethod | undefined => {
    const stored = metadata?.paymentMethod as Record<string, unknown> | undefined;
    if (!stored || typeof stored !== 'object') return undefined;

    return {
        id: stored.id as string,
        name: stored.name as string,
        description: (stored.description as string) ?? undefined,
    };
};

// Promotions
const PROMOTIONS: Carts.Model.Promotion[] = [
    {
        id: 'PROMO-001',
        code: 'SAVE10',
        name: '10% Off',
        description: 'Get 10% off your order',
        type: 'PERCENTAGE',
        value: '10',
    },
    {
        id: 'PROMO-002',
        code: 'FREESHIP',
        name: 'Free Shipping',
        description: 'Free standard shipping',
        type: 'FREE_SHIPPING',
        value: '0',
    },
];

const formatDate = (date: Date): string => {
    return date.toISOString();
};

// Build cart item from product (shared by addCartItem and generateCartItem)
const buildCartItemFromProduct = (
    product: Products.Model.Product,
    quantity: number,
    currency: Models.Price.Currency,
    metadata: Record<string, unknown> = {},
): Carts.Model.CartItem => {
    const price = product.price?.value ?? 0;
    const subtotal = price * quantity;

    return {
        id: `ITEM-${crypto.randomUUID()}`,
        sku: product.sku ?? '',
        quantity,
        price: { value: price, currency },
        subtotal: { value: subtotal, currency },
        discountTotal: { value: 0, currency },
        total: { value: subtotal, currency },
        unit: 'PCS',
        currency,
        product: {
            id: product.id,
            sku: product.sku ?? '',
            name: product.name,
            description: product.description,
            shortDescription: product.shortDescription,
            image: product.image,
            price: product.price ?? { value: price, currency },
            link: product.link ?? '',
            type: product.type,
            category: product.category ?? '',
            tags: product.tags ?? [],
        },
        metadata,
    };
};

// In-memory store for carts (for mutations) — starts empty, simulating real e-commerce
let cartsStore: Carts.Model.Cart[] = [];

// Reset store (useful for testing)
export const resetCartsStore = (): void => {
    cartsStore = [];
};

// Get cart by ID
export const mapCart = (params: Carts.Request.GetCartParams): Carts.Model.Cart | undefined => {
    return cartsStore.find((cart) => cart.id === params.id);
};

// Get cart list with filters
export const mapCarts = (query: Carts.Request.GetCartListQuery, customerId?: string): Carts.Model.Carts => {
    const { offset = 0, limit = 10, sort } = query;

    let filteredCarts = cartsStore.filter((cart) => {
        if (customerId && cart.customerId !== customerId) return false;
        return true;
    });

    // Sort
    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        filteredCarts = filteredCarts.sort((a, b) => {
            if (field === 'createdAt' || field === 'updatedAt') {
                const aDate = new Date(a[field] as string);
                const bDate = new Date(b[field] as string);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            } else if (field === 'total') {
                return isAscending ? a.total.value - b.total.value : b.total.value - a.total.value;
            }
            return 0;
        });
    }

    return {
        data: filteredCarts.slice(offset, Number(offset) + Number(limit)),
        total: filteredCarts.length,
    };
};

// Create a new cart
export const createCart = (data: Carts.Request.CreateCartBody): Carts.Model.Cart => {
    const newId = `CART-${crypto.randomUUID()}`;
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const newCart: Carts.Model.Cart = {
        id: newId,
        customerId: data.customerId,
        name: data.name,
        createdAt: formatDate(now),
        updatedAt: formatDate(now),
        expiresAt: formatDate(expiresAt),
        regionId: data.regionId,
        currency: data.currency,
        items: {
            data: [],
            total: 0,
        },
        subtotal: { value: 0, currency: data.currency },
        discountTotal: { value: 0, currency: data.currency },
        taxTotal: { value: 0, currency: data.currency },
        shippingTotal: { value: 0, currency: data.currency },
        total: { value: 0, currency: data.currency },
        promotions: [],
        metadata: data.metadata || {},
    };

    cartsStore.push(newCart);
    return newCart;
};

// Extended update type for internal use (shippingMethod/shippingTotal from resolved option)
type UpdateCartData = Carts.Request.UpdateCartBody & {
    shippingMethod?: Carts.Model.Cart['shippingMethod'];
    shippingTotal?: Models.Price.Price;
};

// Update a cart
export const updateCart = (
    params: Carts.Request.UpdateCartParams,
    data: UpdateCartData,
): Carts.Model.Cart | undefined => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === params.id);
    if (cartIndex === -1) return undefined;

    const cart = cartsStore[cartIndex]!;

    // Merge metadata
    const mergedMetadata = {
        ...(cart.metadata || {}),
        ...(data.metadata || {}),
    };

    // Extract addresses from metadata if they exist
    const shippingAddressFromMetadata = mergedMetadata.shippingAddress as Models.Address.Address | undefined;
    const billingAddressFromMetadata = mergedMetadata.billingAddress as Models.Address.Address | undefined;

    // Validate metadata.paymentMethod against known providers
    if (mergedMetadata.paymentMethod && typeof mergedMetadata.paymentMethod === 'object') {
        const metaPm = mergedMetadata.paymentMethod as Record<string, unknown>;
        if (metaPm.id && !getMockProviderById(metaPm.id as string)) {
            delete mergedMetadata.paymentMethod;
        }
    }

    // Resolve payment method: from paymentMethodId (validated against providers), from metadata, or keep existing
    const paymentMethod = data.paymentMethodId
        ? (getPaymentMethodDisplay(data.paymentMethodId) as Carts.Model.PaymentMethod | undefined)
        : (mapPaymentMethodFromMetadata(mergedMetadata) ?? cart.paymentMethod);

    const updatedCart: Carts.Model.Cart = {
        ...cart,
        name: data.name ?? cart.name,
        regionId: data.regionId ?? cart.regionId,
        email: data.email ?? cart.email,
        notes: data.notes ?? cart.notes,
        metadata: mergedMetadata,
        shippingAddress: shippingAddressFromMetadata ?? cart.shippingAddress,
        billingAddress: billingAddressFromMetadata ?? cart.billingAddress,
        shippingMethod: data.shippingMethod ?? cart.shippingMethod,
        shippingTotal: data.shippingTotal ?? cart.shippingTotal,
        paymentMethod: paymentMethod ?? cart.paymentMethod,
        updatedAt: formatDate(new Date()),
    };

    cartsStore[cartIndex] = updatedCart;
    return updatedCart;
};

// Delete a cart
export const deleteCart = (params: Carts.Request.DeleteCartParams): boolean => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === params.id);
    if (cartIndex === -1) return false;

    cartsStore.splice(cartIndex, 1);
    return true;
};

// Add item to cart
// Helper function to find active cart by customerId
export const findActiveCartByCustomerId = (customerId: string | undefined): Carts.Model.Cart | undefined => {
    if (!customerId) return undefined;
    return cartsStore.find((cart) => cart.customerId === customerId);
};

const matchesSku = (item: Carts.Model.CartItem, sku: string): boolean => item.sku === sku;

export const addCartItem = (
    cartId: string,
    data: Carts.Request.AddCartItemBody,
    locale?: string,
): Carts.Model.Cart | undefined => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === cartId);
    if (cartIndex === -1) return undefined;

    let product: Products.Model.Product;
    try {
        product = mapProductBySku(data.sku, locale);
    } catch {
        return undefined;
    }

    const cart = cartsStore[cartIndex]!;

    const existingIndex = cart.items.data.findIndex((item) => matchesSku(item, data.sku));

    if (existingIndex !== -1) {
        const item = cart.items.data[existingIndex]!;
        const newQuantity = item.quantity + data.quantity;
        item.quantity = newQuantity;
        item.subtotal = { value: item.price.value * newQuantity, currency: cart.currency };
        item.total = { value: item.price.value * newQuantity, currency: cart.currency };
        if (data.metadata && Object.keys(data.metadata).length > 0) {
            item.metadata = { ...(item.metadata || {}), ...data.metadata };
        }
    } else {
        const newItem = buildCartItemFromProduct(product, data.quantity, cart.currency, data.metadata || {});
        cart.items.data.push(newItem);
    }

    cart.items.total = cart.items.data.length;
    recalculateCartTotals(cart);
    cart.updatedAt = formatDate(new Date());

    return cart;
};

// Update cart item
export const updateCartItem = (
    params: Carts.Request.UpdateCartItemParams,
    data: Carts.Request.UpdateCartItemBody,
): Carts.Model.Cart | undefined => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === params.cartId);
    if (cartIndex === -1) return undefined;

    const cart = cartsStore[cartIndex]!;
    const itemIndex = cart.items.data.findIndex((item) => item.id === params.itemId);
    if (itemIndex === -1) return undefined;

    const item = cart.items.data[itemIndex]!;
    if (data.quantity !== undefined) {
        if (data.quantity <= 0) {
            cart.items.data.splice(itemIndex, 1);
            cart.items.total = cart.items.data.length;

            recalculateCartTotals(cart);
            cart.updatedAt = formatDate(new Date());
            return cart;
        } else {
            item.quantity = data.quantity;
            item.subtotal = { value: item.price.value * data.quantity, currency: cart.currency };
            item.total = { value: item.price.value * data.quantity, currency: cart.currency };
        }
    }
    if (data.metadata !== undefined) {
        item.metadata = data.metadata;
    }

    recalculateCartTotals(cart);
    cart.updatedAt = formatDate(new Date());

    return cart;
};

// Remove cart item
export const removeCartItem = (params: Carts.Request.RemoveCartItemParams): Carts.Model.Cart | undefined => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === params.cartId);
    if (cartIndex === -1) return undefined;

    const cart = cartsStore[cartIndex]!;
    const itemIndex = cart.items.data.findIndex((item) => item.id === params.itemId);
    if (itemIndex === -1) return undefined;

    cart.items.data.splice(itemIndex, 1);
    cart.items.total = cart.items.data.length;
    recalculateCartTotals(cart);
    cart.updatedAt = formatDate(new Date());

    return cart;
};

// Apply promotion
export const applyPromotion = (
    params: Carts.Request.ApplyPromotionParams,
    data: Carts.Request.ApplyPromotionBody,
): Carts.Model.Cart | undefined => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === params.cartId);
    if (cartIndex === -1) return undefined;

    const cart = cartsStore[cartIndex]!;
    const promotion = PROMOTIONS.find((p) => p.code === data.code);
    if (!promotion) return undefined;

    if (!cart.promotions) {
        cart.promotions = [];
    }

    // Check if promotion is already applied
    if (cart.promotions.some((p) => p.id === promotion.id)) {
        return cart;
    }

    cart.promotions.push(promotion);
    recalculateCartTotals(cart);
    cart.updatedAt = formatDate(new Date());

    return cart;
};

// Remove promotion
export const removePromotion = (params: Carts.Request.RemovePromotionParams): Carts.Model.Cart | undefined => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === params.cartId);
    if (cartIndex === -1) return undefined;

    const cart = cartsStore[cartIndex]!;
    if (!cart.promotions) return cart;

    const promoIndex = cart.promotions.findIndex((p) => p.code === params.code);
    if (promoIndex === -1) return cart;

    cart.promotions.splice(promoIndex, 1);
    recalculateCartTotals(cart);
    cart.updatedAt = formatDate(new Date());

    return cart;
};

// Helper function to recalculate cart totals
const recalculateCartTotals = (cart: Carts.Model.Cart): void => {
    let subtotal = 0;
    for (const item of cart.items.data) {
        subtotal += item.total.value;
    }

    let discountTotal = 0;
    if (cart.promotions) {
        for (const promo of cart.promotions) {
            if (promo.type === 'PERCENTAGE') {
                discountTotal += (subtotal * Number(promo.value)) / 100;
            } else if (promo.type === 'FIXED_AMOUNT') {
                discountTotal += Number(promo.value);
            }
        }
    }

    discountTotal = Math.min(discountTotal, subtotal);

    const shippingTotal = cart.shippingMethod?.total?.value || 0;
    const hasFreeShipping = cart.promotions?.some((p) => p.type === 'FREE_SHIPPING');
    const actualShippingTotal = hasFreeShipping ? 0 : shippingTotal;

    const taxTotal = Math.round((subtotal - discountTotal) * 0.23 * 100) / 100;
    const total = subtotal - discountTotal + actualShippingTotal + taxTotal;

    cart.subtotal = { value: subtotal, currency: cart.currency };
    cart.discountTotal = { value: Math.round(discountTotal * 100) / 100, currency: cart.currency };
    cart.shippingTotal = { value: actualShippingTotal, currency: cart.currency };
    cart.taxTotal = { value: taxTotal, currency: cart.currency };
    cart.total = { value: Math.round(total * 100) / 100, currency: cart.currency };
};

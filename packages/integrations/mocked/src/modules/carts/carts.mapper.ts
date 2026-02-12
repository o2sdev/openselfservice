import { Carts, Models, Products } from '@o2s/framework/modules';

// Product data for generating cart items
const PRODUCT_DATA = [
    {
        id: 'PRD-004',
        name: 'Rotary Hammer',
        price: 100,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'RH-12345-S-BL',
    },
    {
        id: 'PRD-005',
        name: 'Angle Grinder',
        price: 79.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'AG-12345-S-BL',
    },
    {
        id: 'PRD-006',
        name: 'Cordless Drill',
        price: 129.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'CD-12345-S-BL',
    },
    {
        id: 'PRD-007',
        name: 'Laser Measure',
        price: 149.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'LM-12345-S-BL',
    },
    {
        id: 'PRD-008',
        name: 'Safety Glasses',
        price: 19.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'SAFETY',
        sku: 'SG-12345-S-BL',
    },
];

// Shipping methods
const SHIPPING_METHODS = [
    {
        id: 'SHIP-001',
        name: 'Standard Shipping',
        description: '3-5 business days',
        price: 10,
    },
    {
        id: 'SHIP-002',
        name: 'Express Shipping',
        description: '1-2 business days',
        price: 20,
    },
];

// Payment methods
const PAYMENT_METHODS: Carts.Model.PaymentMethod[] = [
    {
        id: 'PAY-001',
        name: 'Credit Card',
        description: 'Visa, Mastercard, American Express',
        type: 'CREDIT_CARD',
    },
    {
        id: 'PAY-002',
        name: 'PayPal',
        description: 'Pay with your PayPal account',
        type: 'PAYPAL',
    },
    {
        id: 'PAY-003',
        name: 'Bank Transfer',
        description: 'Direct bank transfer',
        type: 'BANK_TRANSFER',
    },
];

// Read payment method stored in metadata by setupPayment
const mapPaymentMethodFromMetadata = (metadata: Record<string, unknown>): Carts.Model.PaymentMethod | undefined => {
    const stored = metadata?.paymentMethod as Record<string, unknown> | undefined;
    if (!stored || typeof stored !== 'object') return undefined;

    return {
        id: stored.id as string,
        name: stored.name as string,
        description: (stored.description as string) ?? undefined,
        type: (stored.type as Carts.Model.PaymentMethodType) ?? 'OTHER',
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
        value: 10,
        appliedTo: 'CART',
    },
    {
        id: 'PROMO-002',
        code: 'FREESHIP',
        name: 'Free Shipping',
        description: 'Free standard shipping',
        type: 'FREE_SHIPPING',
        value: 0,
        appliedTo: 'SHIPPING',
    },
];

// Helper functions
const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatDate = (date: Date): string => {
    return date.toISOString();
};

// Function to generate a cart item
const generateCartItem = (itemIndex: number): Carts.Model.CartItem => {
    const productIndex = getRandomInt(0, PRODUCT_DATA.length - 1);
    const product = PRODUCT_DATA[productIndex]!;
    const quantity = getRandomInt(1, 3);
    const price = product.price;
    const subtotal = price * quantity;
    const discountTotal = 0;
    const total = subtotal - discountTotal;

    return {
        id: `ITEM-${itemIndex.toString().padStart(3, '0')}`,
        productId: product.id,
        variantId: undefined,
        quantity,
        price: {
            value: price,
            currency: product.currency as Carts.Model.Cart['currency'],
        },
        subtotal: {
            value: subtotal,
            currency: product.currency as Carts.Model.Cart['currency'],
        },
        discountTotal: {
            value: discountTotal,
            currency: product.currency as Carts.Model.Cart['currency'],
        },
        total: {
            value: total,
            currency: product.currency as Carts.Model.Cart['currency'],
        },
        unit: 'PCS',
        currency: product.currency as Carts.Model.Cart['currency'],
        product: {
            id: product.id,
            sku: product.sku,
            name: product.name,
            description: `Description for ${product.name}`,
            shortDescription: `Short description for ${product.name}`,
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                width: 640,
                height: 656,
                alt: product.name,
            },
            price: {
                value: product.price,
                currency: product.currency as Carts.Model.Cart['currency'],
            },
            link: `https://example.com/products/${product.id.toLowerCase()}`,
            type: product.type as Products.Model.Product['type'],
            category: product.category as Products.Model.Product['category'],
            tags: [
                {
                    label: 'New',
                    variant: 'secondary',
                },
            ],
        },
        metadata: {},
    };
};

// Function to generate a cart
const generateCart = (
    cartId: string,
    customerId: string | undefined,
    type: Carts.Model.CartType,
    name?: string,
): Carts.Model.Cart => {
    const now = new Date();
    const createdAt = new Date(now.getTime() - getRandomInt(1, 7) * 24 * 60 * 60 * 1000);
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days from now

    const numItems = getRandomInt(1, 4);
    const items: Carts.Model.CartItem[] = [];

    let subtotal = 0;
    for (let i = 0; i < numItems; i++) {
        const item = generateCartItem(i);
        items.push(item);
        subtotal += item.total?.value || 0;
    }

    const currency = items[0]?.currency || 'USD';
    const shippingMethod = SHIPPING_METHODS[0]!;
    const shippingTotal = shippingMethod.price;
    const discountTotal = type === 'ACTIVE' ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
    const taxTotal = Math.round((subtotal - discountTotal) * 0.23 * 100) / 100; // 23% tax
    const total = subtotal + shippingTotal - discountTotal + taxTotal;

    return {
        id: cartId,
        customerId,
        name: name || (type === 'SAVED' ? 'Saved Cart' : undefined),
        type,
        createdAt: formatDate(createdAt),
        updatedAt: formatDate(now),
        expiresAt: formatDate(expiresAt),
        regionId: 'reg_01JS1JBXAPK2BTV504ASWVFC4S', // Mock region ID
        currency,
        items: {
            data: items,
            total: items.length,
        },
        subtotal: {
            value: subtotal,
            currency,
        },
        discountTotal: {
            value: discountTotal,
            currency,
        },
        taxTotal: {
            value: taxTotal,
            currency,
        },
        shippingTotal: {
            value: shippingTotal,
            currency,
        },
        total: {
            value: total,
            currency,
        },
        shippingAddress: {
            country: 'US',
            streetName: 'Main St',
            streetNumber: '123',
            city: 'Anytown',
            region: 'CA',
            postalCode: '12345',
            phone: '555-123-4567',
            email: 'john.doe@example.com',
        },
        billingAddress: {
            country: 'US',
            streetName: 'Main St',
            streetNumber: '123',
            city: 'Anytown',
            region: 'CA',
            postalCode: '12345',
            phone: '555-123-4567',
            email: 'john.doe@example.com',
        },
        shippingMethod: {
            id: shippingMethod.id,
            name: shippingMethod.name,
            description: shippingMethod.description,
            total: {
                value: shippingMethod.price,
                currency,
            },
        },
        paymentMethod: PAYMENT_METHODS[0],
        promotions: type === 'ACTIVE' ? [PROMOTIONS[0]!] : [],
        metadata: {},
        notes: undefined,
    };
};

// Generate mocked carts
const MOCKED_CARTS: Carts.Model.Cart[] = [
    // Active cart for authenticated customer
    generateCart('CART-001', 'cus_01KH3J08TY40PYGVEG3A04CP8R', 'ACTIVE'),
    // Saved carts for authenticated customer
    generateCart('CART-002', 'cus_01KH3J08TY40PYGVEG3A04CP8R', 'SAVED', 'Wishlist'),
    generateCart('CART-003', 'cus_01KH3J08TY40PYGVEG3A04CP8R', 'SAVED', 'Work Equipment'),
    // Abandoned cart
    generateCart('CART-004', 'cus_01KH3J08TY40PYGVEG3A04CP8R', 'ABANDONED'),
    // Guest cart (no customer ID)
    generateCart('CART-005', undefined, 'ACTIVE'),
];

// In-memory store for carts (for mutations)
let cartsStore = [...MOCKED_CARTS];

// Reset store (useful for testing)
export const resetCartsStore = (): void => {
    cartsStore = [...MOCKED_CARTS];
};

// Get cart by ID
export const mapCart = (params: Carts.Request.GetCartParams): Carts.Model.Cart | undefined => {
    return cartsStore.find((cart) => cart.id === params.id);
};

// Get cart list with filters
export const mapCarts = (query: Carts.Request.GetCartListQuery, customerId?: string): Carts.Model.Carts => {
    const { offset = 0, limit = 10, type, sort } = query;

    let filteredCarts = cartsStore.filter((cart) => {
        if (customerId && cart.customerId !== customerId) return false;
        if (type && cart.type !== type) return false;
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
    const newId = `CART-${(cartsStore.length + 1).toString().padStart(3, '0')}`;
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const newCart: Carts.Model.Cart = {
        id: newId,
        customerId: data.customerId,
        name: data.name,
        type: data.type || 'ACTIVE',
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

// Update a cart
export const updateCart = (
    params: Carts.Request.UpdateCartParams,
    data: Carts.Request.UpdateCartBody,
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

    // Resolve payment method: from paymentMethodId, from metadata paymentProviderId, or keep existing
    const paymentMethod = data.paymentMethodId
        ? PAYMENT_METHODS.find((pm) => pm.id === data.paymentMethodId)
        : (mapPaymentMethodFromMetadata(mergedMetadata) ?? cart.paymentMethod);

    const updatedCart: Carts.Model.Cart = {
        ...cart,
        name: data.name ?? cart.name,
        type: data.type ?? cart.type,
        regionId: data.regionId ?? cart.regionId,
        notes: data.notes ?? cart.notes,
        metadata: mergedMetadata,
        shippingAddress: shippingAddressFromMetadata ?? cart.shippingAddress,
        billingAddress: billingAddressFromMetadata ?? cart.billingAddress,
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
    return cartsStore.find((cart) => cart.customerId === customerId && cart.type === 'ACTIVE');
};

export const addCartItem = (cartId: string, data: Carts.Request.AddCartItemBody): Carts.Model.Cart | undefined => {
    const cartIndex = cartsStore.findIndex((cart) => cart.id === cartId);
    if (cartIndex === -1) return undefined;

    const cart = cartsStore[cartIndex]!;
    const product = PRODUCT_DATA.find((p) => p.id === data.productId);

    if (!product) return undefined;

    const newItem: Carts.Model.CartItem = {
        id: `ITEM-${cart.items.data.length.toString().padStart(3, '0')}`,
        productId: data.productId,
        variantId: data.variantId,
        quantity: data.quantity,
        price: { value: product.price, currency: cart.currency },
        subtotal: { value: product.price * data.quantity, currency: cart.currency },
        discountTotal: { value: 0, currency: cart.currency },
        total: { value: product.price * data.quantity, currency: cart.currency },
        unit: 'PCS',
        currency: cart.currency,
        product: {
            id: product.id,
            sku: product.sku,
            name: product.name,
            description: `Description for ${product.name}`,
            price: { value: product.price, currency: cart.currency },
            link: `https://example.com/products/${product.id.toLowerCase()}`,
            type: product.type as Products.Model.Product['type'],
            category: product.category,
            tags: [],
        },
        metadata: data.metadata || {},
    };

    cart.items.data.push(newItem);
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
        item.quantity = data.quantity;
        item.subtotal = { value: item.price.value * data.quantity, currency: cart.currency };
        item.total = { value: item.price.value * data.quantity, currency: cart.currency };
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

    const promoIndex = cart.promotions.findIndex((p) => p.id === params.promotionId);
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
            if (promo.type === 'PERCENTAGE' && promo.appliedTo === 'CART') {
                discountTotal += (subtotal * promo.value) / 100;
            } else if (promo.type === 'FIXED_AMOUNT' && promo.appliedTo === 'CART') {
                discountTotal += promo.value;
            }
        }
    }

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

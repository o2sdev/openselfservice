/**
 * Shared mock cart and checkout data for Storybook.
 * Used by cart and checkout block SDK mocks.
 */

const MOCK_CART = {
    id: 'storybook-cart-1',
    customerId: 'cust-001',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    currency: 'EUR' as const,
    regionId: 'reg-1',
    items: {
        data: [
            {
                id: 'item-1',
                sku: 'SKU-001',
                quantity: 2,
                price: { value: 49.99, currency: 'EUR' as const },
                subtotal: { value: 99.98, currency: 'EUR' as const },
                discountTotal: { value: 0, currency: 'EUR' as const },
                total: { value: 99.98, currency: 'EUR' as const },
                unit: 'PCS' as const,
                currency: 'EUR' as const,
                product: {
                    id: 'prod-1',
                    sku: 'SKU-001',
                    name: 'Wireless Noise-Cancelling Headphones',
                    description: 'Premium over-ear headphones with active noise cancellation and 30h battery life',
                    shortDescription: 'Over-ear ANC headphones',
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-004_1.jpg',
                        width: 800,
                        height: 800,
                        alt: 'Wireless Noise-Cancelling Headphones',
                    },
                    price: { value: 49.99, currency: 'EUR' as const },
                    link: '/products/sample',
                    type: 'PHYSICAL' as const,
                    category: 'General',
                    tags: [],
                },
            },
            {
                id: 'item-2',
                sku: 'SKU-002',
                quantity: 1,
                price: { value: 105, currency: 'EUR' as const },
                subtotal: { value: 105, currency: 'EUR' as const },
                discountTotal: { value: 0, currency: 'EUR' as const },
                total: { value: 105, currency: 'EUR' as const },
                unit: 'PCS' as const,
                currency: 'EUR' as const,
                product: {
                    id: 'prod-2',
                    sku: 'SKU-002',
                    name: 'USB-C Charging Cable (2m)',
                    description: 'Braided USB-C to USB-C fast charging cable, 2 meters',
                    shortDescription: 'USB-C charging cable',
                    image: {
                        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-005_1.jpg',
                        width: 800,
                        height: 800,
                        alt: 'USB-C Charging Cable',
                    },
                    price: { value: 105, currency: 'EUR' as const },
                    link: '/products/another',
                    type: 'PHYSICAL' as const,
                    category: 'General',
                    tags: [],
                },
            },
        ],
        total: 2,
    },
    subtotal: { value: 204.98, currency: 'EUR' as const },
    discountTotal: { value: 0, currency: 'EUR' as const },
    taxTotal: { value: 47.14, currency: 'EUR' as const },
    shippingTotal: { value: 0, currency: 'EUR' as const },
    total: { value: 252.12, currency: 'EUR' as const },
    billingAddress: {
        firstName: 'John',
        lastName: 'Doe',
        companyName: 'ACME Inc.',
        taxId: '1234567890',
        country: 'PL',
        streetName: 'Main Street',
        streetNumber: '123',
        city: 'Warsaw',
        postalCode: '00-001',
        email: 'john@example.com',
        phone: '+48 123 456 789',
    },
    shippingAddress: {
        firstName: 'John',
        lastName: 'Doe',
        country: 'PL',
        streetName: 'Main Street',
        streetNumber: '123',
        city: 'Warsaw',
        postalCode: '00-001',
        phone: '+48 123 456 789',
    },
    shippingMethod: {
        id: 'standard',
        name: 'Standard Shipping',
        description: '3-5 business days',
        total: { value: 0, currency: 'EUR' as const },
        subtotal: { value: 0, currency: 'EUR' as const },
    },
    paymentMethod: {
        id: 'card',
        name: 'Credit Card',
        description: 'Pay with Visa, Mastercard',
    },
    promotions: [
        {
            id: 'promo-1',
            code: 'SAVE10',
            name: '10% Off',
            type: 'PERCENTAGE' as const,
            value: '10',
        },
    ],
    notes: '',
    email: 'john@example.com',
};

/** Empty cart for EmptyCart story variant - use cartId "storybook-cart-empty" */
const MOCK_EMPTY_CART = {
    ...MOCK_CART,
    id: 'storybook-cart-empty',
    items: {
        data: [],
        total: 0,
    },
    subtotal: { value: 0, currency: 'EUR' as const },
    discountTotal: { value: 0, currency: 'EUR' as const },
    taxTotal: { value: 0, currency: 'EUR' as const },
    shippingTotal: { value: 0, currency: 'EUR' as const },
    total: { value: 0, currency: 'EUR' as const },
    billingAddress: undefined,
    shippingAddress: undefined,
    shippingMethod: undefined,
    paymentMethod: undefined,
    promotions: undefined,
};

const MOCK_SHIPPING_OPTIONS = {
    data: [
        {
            id: 'standard',
            name: 'Standard Shipping',
            description: '3-5 business days',
            total: { value: 0, currency: 'EUR' as const },
            subtotal: { value: 0, currency: 'EUR' as const },
        },
        {
            id: 'express',
            name: 'Express Shipping',
            description: '1-2 business days',
            total: { value: 15, currency: 'EUR' as const },
            subtotal: { value: 15, currency: 'EUR' as const },
        },
    ],
    total: 2,
};

const MOCK_PAYMENT_PROVIDERS = {
    data: [
        {
            id: 'card',
            name: 'Credit Card',
            description: 'Pay with Visa, Mastercard',
        },
        {
            id: 'blik',
            name: 'BLIK',
            description: 'Instant mobile payment',
        },
    ],
};

const MOCK_CHECKOUT_SUMMARY = {
    cart: MOCK_CART,
    shippingAddress: MOCK_CART.shippingAddress,
    billingAddress: MOCK_CART.billingAddress,
    shippingMethod: MOCK_CART.shippingMethod,
    paymentMethod: MOCK_CART.paymentMethod,
    totals: {
        subtotal: MOCK_CART.subtotal,
        shipping: MOCK_CART.shippingTotal ?? { value: 0, currency: 'EUR' as const },
        tax: MOCK_CART.taxTotal ?? { value: 0, currency: 'EUR' as const },
        discount: MOCK_CART.discountTotal ?? { value: 0, currency: 'EUR' as const },
        total: MOCK_CART.total,
    },
    notes: MOCK_CART.notes,
    email: MOCK_CART.email,
};

const MOCK_PLACE_ORDER_RESPONSE = {
    order: {
        id: 'ord-storybook-1',
        total: MOCK_CART.total,
        currency: 'EUR',
        status: 'PENDING',
        paymentStatus: 'PENDING',
    },
    paymentRedirectUrl: undefined,
};

export {
    MOCK_CART,
    MOCK_EMPTY_CART,
    MOCK_SHIPPING_OPTIONS,
    MOCK_PAYMENT_PROVIDERS,
    MOCK_CHECKOUT_SUMMARY,
    MOCK_PLACE_ORDER_RESPONSE,
};

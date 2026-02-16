import { HttpTypes } from '@medusajs/types';

import { Carts, Models, Orders, Products } from '@o2s/framework/modules';

export const mapCarts = (
    carts: { carts: HttpTypes.StoreCart[]; count?: number },
    defaultCurrency: string,
): Carts.Model.Carts => {
    return {
        data: carts.carts.map((cart: HttpTypes.StoreCart) => mapCart(cart, defaultCurrency)),
        total: carts.count ?? carts.carts.length,
    };
};

export const mapCart = (cart: HttpTypes.StoreCart, _defaultCurrency: string): Carts.Model.Cart => {
    if (!cart.currency_code) {
        throw new Error(`Cart ${cart.id} has no currency code`);
    }
    const currency = cart.currency_code.toUpperCase() as Models.Price.Currency;

    return {
        id: cart.id,
        customerId: cart.customer_id ?? undefined,
        name: undefined, // Medusa doesn't have cart names by default
        type: 'ACTIVE', // Medusa carts are active by default
        createdAt: cart.created_at?.toString() ?? new Date().toISOString(),
        updatedAt: cart.updated_at?.toString() ?? new Date().toISOString(),
        expiresAt: undefined, // Medusa handles expiration differently
        regionId: cart.region_id ?? undefined,
        currency,
        items: {
            data: cart.items?.map((item) => mapCartItem(item, currency)) ?? [],
            total: cart.items?.length ?? 0,
        },
        subtotal: mapPrice(cart.subtotal, currency),
        discountTotal: mapPrice(cart.discount_total, currency),
        taxTotal: mapPrice(cart.tax_total, currency),
        shippingTotal: mapPrice(cart.shipping_total, currency),
        total: mapPrice(cart.total, currency) as Models.Price.Price,
        shippingAddress: mapAddress(cart.shipping_address),
        billingAddress: mapAddress(cart.billing_address),
        shippingMethod: cart.shipping_methods?.[0] ? mapShippingMethod(cart.shipping_methods[0], currency) : undefined,
        paymentMethod: mapPaymentMethodFromMetadata((cart.metadata as Record<string, unknown>) ?? {}),
        promotions: mapPromotions(cart),
        metadata: (cart.metadata as Record<string, unknown>) ?? {},
        notes: undefined,
        email: cart.email ?? undefined,
    };
};

const mapCartItem = (item: HttpTypes.StoreCartLineItem, currency: Models.Price.Currency): Carts.Model.CartItem => {
    return {
        id: item.id,
        sku: item.variant_sku ?? item.variant_id ?? '',
        quantity: item.quantity,
        price: mapPrice(item.unit_price, currency) as Models.Price.Price,
        subtotal: mapPrice(item.subtotal, currency),
        discountTotal: mapPrice(item.discount_total, currency),
        total: mapPrice(item.total, currency) as Models.Price.Price,
        unit: 'PCS',
        currency,
        product: mapProduct(item, currency),
        metadata: (item.metadata as Record<string, unknown>) ?? {},
    };
};

const mapProduct = (item: HttpTypes.StoreCartLineItem, currency: Models.Price.Currency): Products.Model.Product => {
    return {
        id: item.product_id ?? '',
        sku: item.variant_sku ?? '',
        name: item.product_title ?? item.title ?? '',
        description: item.product_description ?? '',
        shortDescription: item.product_subtitle ?? '',
        image: item.thumbnail
            ? {
                  url: item.thumbnail,
                  alt: item.product_title ?? item.title ?? '',
              }
            : undefined,
        price: mapPrice(item.unit_price, currency) as Models.Price.Price,
        link: '',
        type: 'PHYSICAL' as Products.Model.ProductType,
        category: '',
        tags: [],
    };
};

const mapAddress = (address?: HttpTypes.StoreCartAddress | null): Models.Address.Address | undefined => {
    if (!address) return undefined;
    return {
        firstName: address.first_name,
        lastName: address.last_name,
        country: address.country_code ?? '',
        district: address.province ?? '',
        region: address.province ?? '',
        streetName: address.address_1 ?? '',
        streetNumber: address.address_2 ?? '',
        apartment: address.address_2 ?? '',
        city: address.city ?? '',
        postalCode: address.postal_code ?? '',
        phone: address.phone ?? '',
    };
};

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

const mapShippingMethod = (
    method: HttpTypes.StoreCartShippingMethod,
    currency: Models.Price.Currency,
): Orders.Model.ShippingMethod => {
    return {
        id: method.id,
        name: method.name ?? '',
        description: method.description ?? '',
        total: mapPrice(method.total, currency),
        subtotal: mapPrice(method.subtotal, currency),
    };
};

const mapPromotions = (cart: HttpTypes.StoreCart): Carts.Model.Promotion[] | undefined => {
    // Medusa v2 uses promotions differently - map from adjustments if available
    const promotions: Carts.Model.Promotion[] = [];

    // Extract promotion codes from cart if available
    if (cart.promotions && Array.isArray(cart.promotions)) {
        for (const promo of cart.promotions) {
            promotions.push({
                id: promo.id ?? '',
                code: promo.code ?? '',
                name: promo.code ?? '',
                description: undefined,
                type: 'PERCENTAGE', // Default type
                value: 0,
                appliedTo: 'CART',
            });
        }
    }

    return promotions.length > 0 ? promotions : undefined;
};

const mapPrice = (
    value: number | undefined | null,
    currency: Models.Price.Currency,
): Models.Price.Price | undefined => {
    if (typeof value === 'undefined' || value === null) return undefined;
    return {
        value,
        currency,
    };
};

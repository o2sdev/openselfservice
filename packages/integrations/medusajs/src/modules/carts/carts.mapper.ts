import { HttpTypes } from '@medusajs/types';
import { BadRequestException } from '@nestjs/common';

import { Carts, Models, Orders, Products } from '@o2s/framework/modules';

import { parseCurrency } from '@/utils/currency';
import { asRecord } from '@/utils/metadata';
import { mapPriceRequired } from '@/utils/price';

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
        throw new BadRequestException(`Cart ${cart.id} has no currency code`);
    }
    const currency = parseCurrency(cart.currency_code);

    return {
        id: cart.id,
        customerId: cart.customer_id ?? undefined,
        name: undefined, // Medusa doesn't have cart names by default
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
        total: mapPriceRequired(cart.total, currency, `Cart ${cart.id} total`),
        shippingAddress: mapAddress(cart.shipping_address),
        billingAddress: mapAddress(cart.billing_address),
        shippingMethod: cart.shipping_methods?.[0] ? mapShippingMethod(cart.shipping_methods[0], currency) : undefined,
        paymentMethod: mapPaymentMethodFromMetadata(asRecord(cart.metadata)),
        promotions: mapPromotions(cart),
        metadata: asRecord(cart.metadata),
        notes: undefined,
        email: cart.email ?? undefined,
    };
};

const mapCartItem = (item: HttpTypes.StoreCartLineItem, currency: Models.Price.Currency): Carts.Model.CartItem => {
    return {
        id: item.id,
        sku: item.variant_sku ?? item.variant_id ?? '',
        quantity: item.quantity,
        price: mapPriceRequired(item.unit_price, currency, `Cart item ${item.id} unit_price`),
        subtotal: mapPrice(item.subtotal, currency),
        discountTotal: mapPrice(item.discount_total, currency),
        total: mapPriceRequired(item.total, currency, `Cart item ${item.id} total`),
        unit: 'PCS',
        currency,
        product: mapProduct(item, currency),
        metadata: asRecord(item.metadata),
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
        price: mapPriceRequired(item.unit_price, currency, `Cart product ${item.product_id} unit_price`),
        link: '',
        type: 'PHYSICAL',
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
        apartment: address.address_2 ?? '',
        city: address.city ?? '',
        postalCode: address.postal_code ?? '',
        phone: address.phone ?? '',
    };
};

const mapPaymentMethodFromMetadata = (metadata: Record<string, unknown>): Carts.Model.PaymentMethod | undefined => {
    const stored = metadata?.paymentMethod;
    if (stored === null || stored === undefined || typeof stored !== 'object' || Array.isArray(stored))
        return undefined;

    const storedObj = stored as Record<string, unknown>;
    const id = storedObj.id;
    const name = storedObj.name;
    if (typeof id !== 'string' || typeof name !== 'string') return undefined;

    const description = storedObj.description;

    return {
        id,
        name,
        description: typeof description === 'string' ? description : undefined,
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
    if (!cart.promotions || !Array.isArray(cart.promotions)) {
        return undefined;
    }

    const promotions: Carts.Model.Promotion[] = cart.promotions.map((promo) => {
        const applicationMethod = promo.application_method;
        let promotionType: Carts.Model.PromotionType | undefined;
        if (applicationMethod?.type) {
            if (applicationMethod.type === 'fixed') {
                promotionType = 'FIXED_AMOUNT';
            } else if (applicationMethod.type === 'percentage') {
                promotionType = 'PERCENTAGE';
            } else if (applicationMethod.type === 'free_shipping') {
                promotionType = 'FREE_SHIPPING';
            }
        }

        return {
            id: promo.id || promo.code || '',
            code: promo.code ?? '',
            name: promo.code ?? undefined,
            type: promotionType,
            value: applicationMethod?.value != null ? String(applicationMethod.value) : undefined,
        };
    });

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

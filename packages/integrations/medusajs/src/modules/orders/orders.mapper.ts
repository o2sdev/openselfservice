import { HttpTypes } from '@medusajs/types';

import { Models, Orders, Products } from '@o2s/framework/modules';

export const mapOrders = (orders: HttpTypes.AdminOrderListResponse, defaultCurrency: string): Orders.Model.Orders => {
    return {
        data: orders.orders.map((order) => mapOrder(order, defaultCurrency)),
        total: orders.count,
    };
};

export const mapOrder = (order: HttpTypes.AdminOrder, defaultCurrency: string): Orders.Model.Order => {
    return {
        id: order.id,
        total: mapPrice(order.total, order?.currency_code ?? defaultCurrency) as Models.Price.Price,
        subtotal: mapPrice(order.subtotal, order?.currency_code ?? defaultCurrency),
        shippingTotal: mapPrice(order.shipping_total, order?.currency_code ?? defaultCurrency),
        discountTotal: mapPrice(order.discount_total, order?.currency_code ?? defaultCurrency),
        tax: mapPrice(order.tax_total, order?.currency_code ?? defaultCurrency),
        currency: (order?.currency_code as Models.Price.Currency) ?? (defaultCurrency as Models.Price.Currency),
        paymentStatus: mapPaymentStatus(order.payment_status),
        status: mapStatus(order.status),
        customerId: order.customer_id || undefined,
        createdAt: order.created_at.toString(),
        updatedAt: order.updated_at.toString(),
        items: {
            data: order?.items
                ? order.items.map((item) => mapOrderItem(item, order?.currency_code ?? defaultCurrency))
                : [],
            total: order?.items?.length ?? 0,
        },
        shippingAddress: mapAddress(order.shipping_address),
        billingAddress: mapAddress(order.billing_address),
        shippingMethods: order.shipping_methods
            ? order.shipping_methods.map((method) => mapShippingMethod(method, order?.currency_code ?? defaultCurrency))
            : [],
    };
};

const mapOrderItem = (item: HttpTypes.AdminOrderLineItem, currency: string): Orders.Model.OrderItem => {
    return {
        id: item.id,
        productId: item.variant_id || '',
        quantity: item.quantity,
        price: mapPrice(item.unit_price, currency) as Models.Price.Price,
        total: mapPrice(item.total, currency),
        subtotal: mapPrice(item.subtotal, currency),
        currency: currency as Models.Price.Currency,
        product: mapProduct(item.product, item.variant, item.unit_price, currency) as Products.Model.Product,
    };
};

const mapProduct = (
    item: HttpTypes.AdminProduct | undefined,
    variant: HttpTypes.AdminProductVariant | undefined,
    unitPrice: number,
    currency: string,
): Products.Model.Product => {
    if (!item || !variant) throw new Error('Product or variant not found');

    return {
        id: item.id,
        sku: variant.sku || '',
        name: item.title,
        description: item.description || '',
        shortDescription: item.description || '',
        image: {
            url: item.thumbnail || '',
            alt: '',
        },
        price: mapPrice(unitPrice, currency) as Models.Price.Price,
        link: '',
        type: 'PHYSICAL' as Products.Model.ProductType,
        category: item.categories?.[0]?.name || '',
        tags: [],
    };
};

const mapAddress = (address: HttpTypes.AdminOrderAddress | null | undefined): Models.Address.Address | undefined => {
    if (!address) return undefined;
    return {
        country: address.country_code || '',
        district: address.province || '',
        region: address.province || '',
        streetName: address.address_1 || '',
        streetNumber: address.address_2 || '',
        apartment: address.address_2 || '',
        city: address.city || '',
        postalCode: address.postal_code || '',
        phone: address.phone || '',
    };
};

const mapShippingMethod = (
    method: HttpTypes.AdminOrderShippingMethod,
    currency: string,
): Orders.Model.ShippingMethod => {
    return {
        id: method.id,
        name: method.name || '',
        description: method.description || '',
        total: mapPrice(method.total, currency),
        subtotal: mapPrice(method.subtotal, currency),
    };
};

const mapPrice = (value: number, currency: string): Models.Price.Price | undefined => {
    if (typeof value === 'undefined') return undefined;
    return {
        value,
        currency: currency as Models.Price.Currency,
    };
};

const mapStatus = (status: string): Orders.Model.OrderStatus => {
    switch (status) {
        case 'pending':
            return 'PENDING';
        case 'completed':
            return 'COMPLETED';
        case 'archived':
            return 'ARCHIVED';
        case 'canceled':
            return 'CANCELLED';
        case 'requires_action':
            return 'REQUIRES_ACTION';
        default:
            return 'UNKNOWN';
    }
};

const mapPaymentStatus = (status: string): Orders.Model.PaymentStatus => {
    switch (status) {
        case 'awaiting':
            return 'PENDING';
        case 'not_paid':
            return 'NOT_PAID';
        case 'captured':
            return 'CAPTURED';
        case 'partially_refunded':
            return 'PARTIALLY_REFUNDED';
        case 'refunded':
            return 'REFUNDED';
        case 'requires_action':
            return 'REQUIRES_ACTION';
        case 'canceled':
            return 'FAILED';
        default:
            return 'UNKNOWN';
    }
};

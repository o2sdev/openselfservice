import { HttpTypes } from '@medusajs/types';

import { Models, Orders, Products } from '@o2s/framework/modules';

export const mapOrders = (orders: HttpTypes.AdminOrderListResponse): Orders.Model.Orders => {
    return {
        data: orders.orders.map((order) => mapOrder(order)),
        total: orders.count,
    };
};

export const mapOrder = (order: HttpTypes.AdminOrder): Orders.Model.Order => {
    return {
        id: order.id,
        total: mapPrice(order.total ?? 0, order?.currency_code ?? 'USD'),
        subtotal: order.subtotal ? mapPrice(order.subtotal, order?.currency_code ?? 'USD') : undefined,
        shippingTotal: order.shipping_total ? mapPrice(order.shipping_total, order?.currency_code ?? 'USD') : undefined,
        discountTotal: order.discount_total ? mapPrice(order.discount_total, order?.currency_code ?? 'USD') : undefined,
        tax: order.tax_total ? mapPrice(order.tax_total, order?.currency_code ?? 'USD') : undefined,
        currency: (order?.currency_code as Models.Price.Currency) ?? ('USD' as Models.Price.Currency),
        paymentStatus: mapPaymentStatus(order.payment_status),
        status: mapStatus(order.status),
        customerId: order.customer_id || undefined,
        createdAt: order.created_at.toString(),
        updatedAt: order.updated_at.toString(),
        items: order?.items ? order.items.map((item) => mapOrderItem(item, order?.currency_code ?? 'USD')) : [],
        shippingAddress: order.shipping_address ? mapAddress(order.shipping_address) : undefined,
        billingAddress: order.billing_address ? mapAddress(order.billing_address) : undefined,
        shippingMethods: order.shipping_methods
            ? order.shipping_methods.map((method) => mapShippingMethod(method, order?.currency_code ?? 'USD'))
            : [],
    };
};

const mapOrderItem = (item: HttpTypes.AdminOrderLineItem, currency: string): Orders.Model.OrderItem => {
    return {
        id: item.id,
        productId: item.variant_id || '',
        quantity: item.quantity,
        price: mapPrice(item.unit_price, currency),
        total: item.total ? mapPrice(item.total, currency) : undefined,
        subtotal: item.subtotal ? mapPrice(item.subtotal, currency) : undefined,
        currency: currency as Models.Price.Currency,
        product: item.product ? mapProduct(item.product, item.unit_price, currency) : undefined,
    };
};

const mapProduct = (item: HttpTypes.AdminProduct, unitPrice: number, currency: string): Products.Model.Product => {
    return {
        id: item.id,
        name: item.title,
        description: item.description || '',
        shortDescription: item.description || '',
        image: {
            url: item.thumbnail || '',
        },
        price: mapPrice(unitPrice, currency),
        link: '',
        type: 'PHYSICAL' as Products.Model.ProductType,
        category: item.categories?.[0]?.name || '',
        tags: [],
    };
};

const mapAddress = (address: HttpTypes.AdminOrderAddress): Models.Address.Address => {
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
        total: method.total ? mapPrice(method.total, currency) : undefined,
        subtotal: method.subtotal ? mapPrice(method.subtotal, currency) : undefined,
    };
};

const mapPrice = (value: number, currency: string): Models.Price.Price => {
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

import { HttpTypes } from '@medusajs/types';
import { NotFoundException } from '@nestjs/common';

import { Models, Orders, Products } from '@o2s/framework/modules';

import { parseCurrency } from '@/utils/currency';
import { mapPriceRequired } from '@/utils/price';

export const mapOrders = (orders: HttpTypes.StoreOrderListResponse, defaultCurrency: string): Orders.Model.Orders => {
    return {
        data: orders.orders.map((order) => mapOrder(order, defaultCurrency)),
        total: orders.count,
    };
};

export const mapOrder = (order: HttpTypes.StoreOrder, defaultCurrency: string): Orders.Model.Order => {
    const currency = parseCurrency(order?.currency_code ?? defaultCurrency);

    return {
        id: order.id,
        total: mapPriceRequired(order.total, currency, `Order ${order.id} total`),
        subtotal: mapPrice(order.subtotal, currency),
        shippingTotal: mapPrice(order.shipping_total, currency),
        discountTotal: mapPrice(order.discount_total, currency),
        tax: mapPrice(order.tax_total, currency),
        currency,
        paymentStatus: mapPaymentStatus(order.payment_status),
        status: mapStatus(order.status),
        customerId: order.customer_id || undefined,
        createdAt: order.created_at.toString(),
        updatedAt: order.updated_at.toString(),
        items: {
            data: order?.items ? order.items.map((item) => mapOrderItem(item, currency)) : [],
            total: order?.items?.length ?? 0,
        },
        shippingAddress: mapAddress(order.shipping_address),
        billingAddress: mapAddress(order.billing_address),
        shippingMethods: order.shipping_methods
            ? order.shipping_methods.map((method) => mapShippingMethod(method, currency))
            : [],
    };
};

const mapOrderItem = (item: HttpTypes.StoreOrderLineItem, currency: Models.Price.Currency): Orders.Model.OrderItem => {
    return {
        id: item.id,
        productId: item.variant_id || '',
        quantity: item.quantity,
        price: mapPriceRequired(item.unit_price, currency, `Order item ${item.id} unit_price`),
        total: mapPrice(item.total, currency),
        subtotal: mapPrice(item.subtotal, currency),
        currency,
        product: mapProduct(item.unit_price, currency, item),
    };
};

const mapProduct = (
    unitPrice: number,
    currency: Models.Price.Currency,
    item?: HttpTypes.StoreOrderLineItem,
): Products.Model.Product => {
    if (!item) throw new NotFoundException('Product not found');

    return {
        id: item.product_id || '',
        sku: item.variant_sku || '',
        name: item.product_title || item.title,
        description: item.product_description || '',
        shortDescription: item.product_subtitle || '',
        image: item.thumbnail
            ? {
                  url: item.thumbnail,
                  alt: item.product_title || item.title,
              }
            : undefined,
        price: mapPriceRequired(unitPrice, currency, `Order product ${item.product_id} unit_price`),
        link: '',
        type: 'PHYSICAL',
        category: item.product?.categories?.[0]?.name || '',
        tags: [],
    };
};

const mapAddress = (address?: HttpTypes.StoreOrderAddress | null): Models.Address.Address | undefined => {
    if (!address) return undefined;
    return {
        firstName: address.first_name,
        lastName: address.last_name,
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
    method: HttpTypes.StoreOrderShippingMethod,
    currency: Models.Price.Currency,
): Orders.Model.ShippingMethod => {
    return {
        id: method.id,
        name: method.name || '',
        description: method.description || '',
        total: mapPrice(method.total, currency),
        subtotal: mapPrice(method.subtotal, currency),
    };
};

const mapPrice = (value: number, currency: Models.Price.Currency): Models.Price.Price | undefined => {
    if (typeof value === 'undefined') return undefined;
    return {
        value,
        currency,
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

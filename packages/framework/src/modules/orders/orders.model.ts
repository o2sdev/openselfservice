import { Product } from '../products/products.model';

import { Address, Pagination, Price, Unit } from '@/utils/models';

/** Order lifecycle status. */
export type OrderStatus =
    | 'PENDING'
    | 'COMPLETED'
    | 'SHIPPED'
    | 'CANCELLED'
    | 'ARCHIVED'
    | 'REQUIRES_ACTION'
    | 'UNKNOWN';
/** Payment lifecycle status. */
export type PaymentStatus =
    | 'PENDING'
    | 'PAID'
    | 'FAILED'
    | 'REFUNDED'
    | 'NOT_PAID'
    | 'CAPTURED'
    | 'PARTIALLY_REFUNDED'
    | 'REQUIRES_ACTION'
    | 'UNKNOWN';

/** Customer order aggregate with totals, items, and fulfillment/payment state. */
export class Order {
    id!: string;
    customerId?: string;
    createdAt!: string;
    paymentDueDate?: string;
    updatedAt!: string;
    total!: Price.Price;
    subtotal?: Price.Price;
    shippingTotal?: Price.Price;
    shippingSubtotal?: Price.Price;
    discountTotal?: Price.Price;
    tax?: Price.Price;
    currency!: Price.Currency;
    paymentStatus!: PaymentStatus;
    status!: OrderStatus;
    items!: {
        data: OrderItem[];
        total: number;
    };
    purchaseOrderNumber?: string;
    shippingAddress?: Address.Address;
    billingAddress?: Address.Address;
    shippingMethods!: ShippingMethod[];
    customerComment?: string;
    documents?: Document[];
    /** Customer email for guest order confirmation. */
    email?: string;
}

/** Single item line within an order. */
export class OrderItem {
    id!: string;
    productId!: string;
    quantity!: number;
    price!: Price.Price;
    total?: Price.Price;
    subtotal?: Price.Price;
    discountTotal?: Price.Price;
    unit?: Unit.Unit;
    currency!: Price.Currency;
    product!: Product;
}

/** Shipping method selected for order fulfillment. */
export class ShippingMethod {
    id!: string;
    name!: string;
    description?: string;
    total?: Price.Price;
    subtotal?: Price.Price;
}

/** Billing/payment document associated with an order. */
export class Document {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
    type!: string;
    orderId!: string;
    dueDate!: string;
    status!: PaymentStatus;
    toBePaid!: Price.Price;
    total!: Price.Price;
}

/** Paginated order list. */
export type Orders = Pagination.Paginated<Order>;

import { Product } from '../products/products.model';

import { Pagination } from '@/utils/models';
import { Address } from '@/utils/models/address';
import { Currency, Price } from '@/utils/models/price';

export type OrderStatus =
    | 'PENDING'
    | 'COMPLETED'
    | 'SHIPPED'
    | 'CANCELLED'
    | 'ARCHIVED'
    | 'REQUIRES_ACTION'
    | 'UNKNOWN';
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

export class Order {
    id!: string;
    customerId?: string;
    createdAt!: string;
    updatedAt!: string;
    total!: Price;
    subtotal?: Price;
    shippingTotal?: Price;
    shippingSubtotal?: Price;
    discountTotal?: Price;
    tax?: Price;
    currency!: Currency;
    paymentStatus!: PaymentStatus;
    status!: OrderStatus;
    items!: OrderItem[];
    purchaseOrderNumber?: string;
    shippingAddress?: Address;
    billingAddress?: Address;
    shippingMethods!: ShippingMethod[];
    customerComment?: string;
}

export class OrderItem {
    id!: string;
    productId!: string;
    quantity!: number;
    price!: Price;
    total?: Price;
    subtotal?: Price;
    discountTotal?: Price;
    currency!: Currency;
    product?: Product;
}

export class ShippingMethod {
    id!: string;
    name!: string;
    description?: string;
    total?: Price;
    subtotal?: Price;
}

export type Orders = Pagination.Paginated<Order>;

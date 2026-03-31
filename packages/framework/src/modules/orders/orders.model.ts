import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Product } from '../products/products.model';

import { Address, Pagination, Price, Unit } from '@/utils/models';

/** Allowed order fulfillment status values (OpenAPI + TS union). */
export const ORDER_STATUS_VALUES = [
    'PENDING',
    'COMPLETED',
    'SHIPPED',
    'CANCELLED',
    'ARCHIVED',
    'REQUIRES_ACTION',
    'UNKNOWN',
] as const;
export type OrderStatus = (typeof ORDER_STATUS_VALUES)[number];

/** Allowed order/payment document payment status values (OpenAPI + TS union). */
export const PAYMENT_STATUS_VALUES = [
    'PENDING',
    'PAID',
    'FAILED',
    'REFUNDED',
    'NOT_PAID',
    'CAPTURED',
    'PARTIALLY_REFUNDED',
    'REQUIRES_ACTION',
    'UNKNOWN',
] as const;
export type PaymentStatus = (typeof PAYMENT_STATUS_VALUES)[number];

/** Shipping method selected for order fulfillment. */
export class ShippingMethod {
    @ApiProperty({ description: 'Shipping method identifier' })
    id!: string;

    @ApiProperty({ description: 'Shipping method display name' })
    name!: string;

    @ApiPropertyOptional({ description: 'Shipping method description' })
    description?: string;

    @ApiPropertyOptional({ description: 'Total shipping cost including tax' })
    total?: Price.Price;

    @ApiPropertyOptional({ description: 'Shipping cost before tax' })
    subtotal?: Price.Price;
}

/** Billing/payment document associated with an order. */
export class Document {
    @ApiProperty({ description: 'Document identifier' })
    id!: string;

    @ApiProperty({ description: 'Document creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiProperty({ description: 'Document type (e.g., invoice, receipt)' })
    type!: string;

    @ApiProperty({ description: 'Associated order identifier' })
    orderId!: string;

    @ApiProperty({ description: 'Payment due date in ISO 8601 format' })
    dueDate!: string;

    @ApiProperty({ description: 'Document payment status', enum: PAYMENT_STATUS_VALUES })
    status!: PaymentStatus;

    @ApiProperty({ description: 'Amount remaining to be paid' })
    toBePaid!: Price.Price;

    @ApiProperty({ description: 'Total document amount' })
    total!: Price.Price;
}

/** Single item line within an order. */
export class OrderItem {
    @ApiProperty({ description: 'Order item identifier' })
    id!: string;

    @ApiProperty({ description: 'Associated product identifier' })
    productId!: string;

    @ApiProperty({ description: 'Quantity ordered' })
    quantity!: number;

    @ApiProperty({ description: 'Unit price' })
    price!: Price.Price;

    @ApiPropertyOptional({ description: 'Total price for this line item' })
    total?: Price.Price;

    @ApiPropertyOptional({ description: 'Subtotal before discounts' })
    subtotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Total discount applied' })
    discountTotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Unit of measure' })
    unit?: Unit.Unit;

    @ApiProperty({ description: 'Currency code' })
    currency!: Price.Currency;

    @ApiProperty({ description: 'Product details', type: () => Product })
    product!: Product;
}

/** Order items wrapper with pagination info. */
export class OrderItems {
    @ApiProperty({ description: 'Array of order items', type: () => [OrderItem] })
    data!: OrderItem[];

    @ApiProperty({ description: 'Total number of items' })
    total!: number;
}

/** Customer order aggregate with totals, items, and fulfillment/payment state. */
export class Order {
    @ApiProperty({ description: 'Unique order identifier' })
    id!: string;

    @ApiPropertyOptional({ description: 'Customer identifier' })
    customerId?: string;

    @ApiProperty({ description: 'Order creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiPropertyOptional({ description: 'Payment due date in ISO 8601 format' })
    paymentDueDate?: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiProperty({ description: 'Order total including tax and shipping' })
    total!: Price.Price;

    @ApiPropertyOptional({ description: 'Order subtotal before tax and shipping' })
    subtotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Total shipping cost' })
    shippingTotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Shipping subtotal before tax' })
    shippingSubtotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Total discount applied' })
    discountTotal?: Price.Price;

    @ApiPropertyOptional({ description: 'Tax amount' })
    tax?: Price.Price;

    @ApiProperty({ description: 'Order currency code' })
    currency!: Price.Currency;

    @ApiProperty({ description: 'Current payment status', enum: PAYMENT_STATUS_VALUES })
    paymentStatus!: PaymentStatus;

    @ApiProperty({ description: 'Current order fulfillment status', enum: ORDER_STATUS_VALUES })
    status!: OrderStatus;

    @ApiProperty({ description: 'Order line items', type: () => OrderItems })
    items!: OrderItems;

    @ApiPropertyOptional({ description: 'Purchase order number for B2B orders' })
    purchaseOrderNumber?: string;

    @ApiPropertyOptional({ description: 'Shipping address' })
    shippingAddress?: Address.Address;

    @ApiPropertyOptional({ description: 'Billing address' })
    billingAddress?: Address.Address;

    @ApiProperty({ description: 'Selected shipping methods', type: () => [ShippingMethod] })
    shippingMethods!: ShippingMethod[];

    @ApiPropertyOptional({ description: 'Customer notes or comments' })
    customerComment?: string;

    @ApiPropertyOptional({ description: 'Associated documents (invoices, receipts)', type: () => [Document] })
    documents?: Document[];

    @ApiPropertyOptional({ description: 'Customer email for guest order confirmation' })
    email?: string;
}

/** Paginated order list for OpenAPI schema. */
export class PaginatedOrders extends Pagination.Paginated<Order> {
    @ApiProperty({ description: 'Array of orders', type: () => [Order] })
    declare data: Order[];

    @ApiProperty({ description: 'Total number of orders matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedOrders class for OpenAPI compatibility. */
export type Orders = Pagination.Paginated<Order>;

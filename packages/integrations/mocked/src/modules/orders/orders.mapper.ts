import { BadRequestException } from '@nestjs/common';

import { Carts, Models, Orders, Products } from '@o2s/framework/modules';

// Product data for generating random orders
const PRODUCT_DATA = [
    {
        id: 'PRD-004',
        name: 'Rotary Hammer',
        price: 100,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-005',
        name: 'Angle Grinder',
        price: 79.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-006',
        name: 'Cordless Drill',
        price: 129.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-007',
        name: 'Laser Measure',
        price: 149.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'TOOLS',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-008',
        name: 'Safety Glasses',
        price: 19.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'SAFETY',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-009',
        name: 'Work Gloves',
        price: 24.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'SAFETY',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-010',
        name: 'Hard Hat',
        price: 29.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'SAFETY',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-011',
        name: 'Tool Belt',
        price: 39.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'ACCESSORIES',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-012',
        name: 'Tool Box',
        price: 59.99,
        currency: 'USD',
        type: 'PHYSICAL',
        category: 'ACCESSORIES',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-013',
        name: 'MaxFlow Air Systems',
        price: 19.99,
        currency: 'USD',
        type: 'VIRTUAL',
        category: 'MAINTENANCE',
        sku: 'ABC-12345-S-BL',
    },
    {
        id: 'PRD-014',
        name: 'RapidFix Repair',
        price: 19.99,
        currency: 'EUR',
        type: 'VIRTUAL',
        category: 'MAINTENANCE',
        sku: 'ABC-12345-S-BL',
    },
];

const DOCUMENT_DATA: Orders.Model.Document[] = [
    {
        id: '56700/08/2025',
        type: 'CORRECTION',
        createdAt: '2025-08-08',
        updatedAt: '2025-08-08',
        orderId: 'ORD-001',
        dueDate: '2025-08-08',
        status: 'PAID',
        toBePaid: { value: 100, currency: 'USD' },
        total: { value: 100, currency: 'USD' },
    },
    {
        id: '56699/07/2025',
        type: 'SETTLEMENT_INVOICE',
        createdAt: '2025-07-07',
        updatedAt: '2025-07-07',
        orderId: 'ORD-002',
        dueDate: '2025-07-07',
        status: 'PENDING',
        toBePaid: { value: 100, currency: 'USD' },
        total: { value: 100, currency: 'USD' },
    },
    {
        id: '56698/06/2025',
        type: 'INVOICE',
        createdAt: '2025-06-06',
        updatedAt: '2025-06-06',
        orderId: 'ORD-003',
        dueDate: '2025-06-06',
        status: 'NOT_PAID',
        toBePaid: { value: 100, currency: 'USD' },
        total: { value: 100, currency: 'USD' },
    },
];

// Customer IDs
const CUSTOMER_IDS = ['cus_01KH3J08TY40PYGVEG3A04CP8R'];

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
    {
        id: 'SHIP-003',
        name: 'Next Day Shipping',
        description: 'Next business day',
        price: 30,
    },
];

// Order statuses for generating random orders
const ORDER_STATUSES: Orders.Model.OrderStatus[] = [
    'PENDING',
    'COMPLETED',
    'SHIPPED',
    'CANCELLED',
    'ARCHIVED',
    'REQUIRES_ACTION',
    'UNKNOWN',
];

// Payment statuses for generating random orders
const PAYMENT_STATUSES: Orders.Model.PaymentStatus[] = [
    'PENDING',
    'PAID',
    'FAILED',
    'REFUNDED',
    'NOT_PAID',
    'CAPTURED',
    'PARTIALLY_REFUNDED',
    'REQUIRES_ACTION',
    'UNKNOWN',
];

// Function to generate a random integer between min and max (inclusive)
const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate a random date within the past 2 years
const getRandomDatePastYear = (): Date => {
    const now = new Date();
    const start = new Date();
    start.setFullYear(now.getFullYear() - 1);

    const randomTimestamp = randomDate(start, now);
    return new Date(randomTimestamp);
};

const getRandomDateYearBefore = (): Date => {
    const now = new Date();
    now.setFullYear(now.getFullYear() - 1);
    const start = new Date();
    start.setFullYear(now.getFullYear() - 2);

    const randomTimestamp = randomDate(start, now);
    return new Date(randomTimestamp);
};

const getRandomDatePastMonth = (): Date => {
    const now = new Date();
    const start = new Date();
    start.setMonth(now.getMonth() - 1);

    const randomTimestamp = randomDate(start, now);
    return new Date(randomTimestamp);
};

const getRandomDateMonthLastYear = (): Date => {
    const now = new Date();
    now.setFullYear(now.getFullYear() - 1);
    const start = new Date();
    start.setMonth(now.getMonth() - 1);
    start.setFullYear(now.getFullYear());

    const randomTimestamp = randomDate(start, now);
    return new Date(randomTimestamp);
};

// Function to format a date as an ISO string
const formatDate = (date: Date): string => {
    return date.toISOString();
};

// Function to generate a random order item
const generateOrderItem = (itemIndex: number): Orders.Model.OrderItem => {
    const productIndex = getRandomInt(0, PRODUCT_DATA.length - 1);
    const product = PRODUCT_DATA[productIndex]!;
    const quantity = getRandomInt(1, 5);
    const price = product.price * 0.9; // 10% discount from product price
    const total = price * quantity;

    return {
        id: `ITEM-${itemIndex.toString().padStart(3, '0')}`,
        productId: product.id,
        quantity,
        price: {
            value: price,
            currency: product.currency as Orders.Model.Order['currency'],
        },
        total: {
            value: total,
            currency: product.currency as Orders.Model.Order['currency'],
        },
        subtotal: {
            value: total - total * 0.23,
            currency: product.currency as Orders.Model.Order['currency'],
        },
        unit: 'PCS' as Orders.Model.OrderItem['unit'],
        currency: product.currency as Orders.Model.Order['currency'],
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
                currency: product.currency as Orders.Model.Order['currency'],
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
    };
};

// Function to generate a random order
const generateOrder = (orderIndex: number, count: number, getRandomDate: () => Date): Orders.Model.Order => {
    const orderDate = getRandomDate();
    const updateDate = new Date(orderDate);
    updateDate.setHours(updateDate.getHours() + getRandomInt(1, 48)); // Update 1-48 hours later
    const paymentDueDate = new Date(orderDate);
    paymentDueDate.setDate(paymentDueDate.getDate() + getRandomInt(1, 5)); // Add 1-5 days

    const customerId = CUSTOMER_IDS[getRandomInt(0, CUSTOMER_IDS.length - 1)];
    const numItems = getRandomInt(1, 8);
    const items: Orders.Model.OrderItem[] = [];

    let subtotal = 0;
    for (let i = 0; i < numItems; i++) {
        const item = generateOrderItem(orderIndex * 10 + i);
        items.push(item);
        subtotal += item.total?.value || 0;
    }

    const shippingMethodIndex = getRandomInt(0, SHIPPING_METHODS.length - 1);
    const shippingMethod = SHIPPING_METHODS[shippingMethodIndex]!;
    const shippingCost = shippingMethod.price;

    const discountValue = Math.round(subtotal * 0.1 * 100) / 100; // 10% discount
    const total = subtotal + shippingCost - discountValue;

    const currency = items[0]?.currency || 'USD';
    const status = ORDER_STATUSES[getRandomInt(0, ORDER_STATUSES.length - 1)]!;
    const paymentStatus = PAYMENT_STATUSES[getRandomInt(0, PAYMENT_STATUSES.length - 1)]!;

    return {
        id: `ORD-${count + (orderIndex * orderIndex).toString().padStart(5, '0')}`,
        customerId,
        createdAt: formatDate(orderDate),
        updatedAt: formatDate(updateDate),
        paymentDueDate: formatDate(paymentDueDate),
        total: {
            value: total,
            currency,
        },
        subtotal: {
            value: subtotal,
            currency,
        },
        shippingTotal: {
            value: shippingCost,
            currency,
        },
        shippingSubtotal: {
            value: shippingCost,
            currency,
        },
        discountTotal: {
            value: discountValue,
            currency,
        },
        currency,
        paymentStatus,
        status,
        items: {
            data: items,
            total: items.length,
        },
        documents: DOCUMENT_DATA,
        shippingMethods: [
            {
                id: shippingMethod.id,
                name: shippingMethod.name,
                description: shippingMethod.description,
                total: {
                    value: shippingMethod.price,
                    currency,
                },
            },
        ],
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
        customerComment:
            'Please confirm stock availability before shipping and ensure timely delivery. Include a packing list with batch numbers and certifications, if applicable. Additionally, verify that all documents are accurate and complete to avoid delays',
    };
};

// Generate 1000 random orders
const generateOrders = (count: number, getRandomDate: () => Date): Orders.Model.Order[] => {
    const orders: Orders.Model.Order[] = [];
    for (let i = 1; i <= count; i++) {
        orders.push(generateOrder(i, count, getRandomDate));
    }
    return orders;
};

// Generate 1000 orders spanning the past 2 years
export const MOCKED_ORDERS: Orders.Model.Order[] = [
    ...generateOrders(100, getRandomDatePastYear),
    ...generateOrders(50, getRandomDatePastMonth),
    ...generateOrders(400, getRandomDateYearBefore),
    ...generateOrders(10, getRandomDateMonthLastYear),
];

export const mapOrder = (options: Orders.Request.GetOrderParams): Orders.Model.Order | undefined => {
    const { offset = 0, limit = 10, sort, id } = options;

    const order = MOCKED_ORDERS.find((order) => order.id === id);

    if (!order) {
        return undefined;
    }
    const items = order?.items;

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        items.data.sort((a, b) => {
            const aValue = a[field as keyof Orders.Model.OrderItem];
            const bValue = b[field as keyof Orders.Model.OrderItem];

            if (field === 'discountTotal' || field === 'total' || field === 'subtotal' || field === 'price') {
                if (!aValue || !bValue) return 0;

                const aValueNumber = (aValue as Models.Price.Price).value;
                const bValueNumber = (bValue as Models.Price.Price).value;
                return isAscending ? aValueNumber - bValueNumber : bValueNumber - aValueNumber;
            } else if (field === 'name' || field === 'sku') {
                const aField = a.product?.[field] ?? '';
                const bField = b.product?.[field] ?? '';
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        ...order,
        items: {
            data: items.data.slice(Number(offset), Number(offset) + Number(limit)),
            total: order?.items.total,
        },
    };
};

export const mapOrders = (options: Orders.Request.GetOrderListQuery, customerId: string): Orders.Model.Orders => {
    const { offset = 0, limit = 10, status, paymentStatus, dateFrom, dateTo, sort } = options;

    const customerOrders = MOCKED_ORDERS.filter((order) => order.customerId === customerId);

    let filteredOrders = customerOrders.filter(
        (order) =>
            (!status || order.status === status) &&
            (!paymentStatus || order.paymentStatus === paymentStatus) &&
            (!dateFrom || new Date(order.createdAt) >= new Date(dateFrom)) &&
            (!dateTo || new Date(order.createdAt) <= new Date(dateTo)) &&
            (!dateFrom || new Date(order.updatedAt) >= new Date(dateFrom)) &&
            (!dateTo || new Date(order.updatedAt) <= new Date(dateTo)),
    );

    const [field, order] = sort?.split('_') || ['createdAt', 'DESC'];
    const isAscending = order === 'ASC';

    filteredOrders = filteredOrders.sort((a, b) => {
        const aValue = a[field as keyof Orders.Model.Order];
        const bValue = b[field as keyof Orders.Model.Order];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else if (field === 'createdAt' || field === 'updatedAt' || field === 'paymentDueDate') {
            const aDate = new Date(aValue as string);
            const bDate = new Date(bValue as string);
            return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
        } else if (field === 'total' || field === 'subtotal') {
            const aTotal = (aValue as Models.Price.Price).value;
            const bTotal = (bValue as Models.Price.Price).value;
            return isAscending ? aTotal - bTotal : bTotal - aTotal;
        }
        return 0;
    });

    return {
        data: filteredOrders.slice(offset, Number(offset) + Number(limit)),
        total: filteredOrders.length,
    };
};

export function mapOrderFromCart(cart: Carts.Model.Cart, email?: string): Orders.Model.Order {
    const now = new Date();
    const orderId = `ORD-${Date.now()}`;

    // Convert cart items to order items
    const orderItems: Orders.Model.OrderItem[] = cart.items.data.map((item, index) => ({
        id: `ITEM-${index.toString().padStart(3, '0')}`,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
        subtotal: item.subtotal,
        discountTotal: item.discountTotal,
        unit: item.unit,
        currency: item.currency,
        product: item.product,
    }));

    if (!cart.shippingMethod) {
        throw new BadRequestException('Shipping method is required to create order from cart');
    }

    if (!cart.shippingTotal) {
        throw new BadRequestException('Shipping total is required to create order from cart');
    }

    return {
        id: orderId,
        customerId: cart.customerId,
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
        paymentDueDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
        total: cart.total,
        subtotal: cart.subtotal,
        shippingTotal: cart.shippingTotal,
        shippingSubtotal: cart.shippingTotal,
        discountTotal: cart.discountTotal,
        tax: cart.taxTotal,
        currency: cart.currency,
        paymentStatus: 'PENDING',
        status: 'PENDING',
        items: {
            data: orderItems,
            total: orderItems.length,
        },
        shippingAddress: cart.shippingAddress,
        billingAddress: cart.billingAddress,
        shippingMethods: [cart.shippingMethod],
        customerComment: cart.notes,
        email,
    };
}

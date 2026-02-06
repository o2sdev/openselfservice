import { Models, Orders } from '@o2s/framework/modules';

import { MOCK_PRODUCTS } from '../resources/mock/products.mock';

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
const CUSTOMER_IDS = ['cust-001'];

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
    const productIndex = getRandomInt(0, MOCK_PRODUCTS.length - 1);
    const product = MOCK_PRODUCTS[productIndex]!;
    const quantity = getRandomInt(1, 5);

    const VAT_RATE = 0.23;

    // Catalog price is GROSS (with VAT)
    const catalogPriceGross = product.price.value;

    // Random discount: 0%, 5%, 10%, 15%, or 20% (whole numbers only)
    const discountOptions = [0, 5, 10, 15, 20];
    const discountPercent = discountOptions[getRandomInt(0, discountOptions.length - 1)]!;
    const discountPerUnit = catalogPriceGross * (discountPercent / 100);
    const discountTotalAmount = Math.round(discountPerUnit * quantity * 100) / 100;

    // Price after discount (still gross)
    const priceGrossAfterDiscount = catalogPriceGross - discountPerUnit;

    // Price NET (without VAT) - this is the "Net price" shown in UI
    const priceNet = Math.round((priceGrossAfterDiscount / (1 + VAT_RATE)) * 100) / 100;

    // Total values
    const totalGross = Math.round(priceGrossAfterDiscount * quantity * 100) / 100;
    const totalNet = Math.round(priceNet * quantity * 100) / 100;

    return {
        id: `ITEM-${itemIndex.toString().padStart(3, '0')}`,
        productId: product.id,
        quantity,
        price: {
            value: priceNet,
            currency: product.price.currency as Orders.Model.Order['currency'],
        },
        total: {
            value: totalGross,
            currency: product.price.currency as Orders.Model.Order['currency'],
        },
        subtotal: {
            value: totalNet,
            currency: product.price.currency as Orders.Model.Order['currency'],
        },
        discountTotal:
            discountPercent > 0
                ? {
                      value: discountTotalAmount,
                      currency: product.price.currency as Orders.Model.Order['currency'],
                  }
                : undefined,
        unit: 'PCS' as Orders.Model.OrderItem['unit'],
        currency: product.price.currency as Orders.Model.Order['currency'],
        product: {
            id: product.id,
            sku: product.sku,
            name: product.name,
            description: product.description,
            shortDescription: product.shortDescription,
            image: product.image,
            price: product.price,
            link: product.link,
            type: product.type,
            category: product.category,
            tags: product.tags,
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

    // Calculate order subtotal (NET) - sum of all item NET values
    let orderSubtotalNet = 0;
    // Calculate order total items (GROSS) - sum of all item GROSS values
    let orderItemsTotalGross = 0;

    for (let i = 0; i < numItems; i++) {
        const item = generateOrderItem(orderIndex * 10 + i);
        items.push(item);
        orderSubtotalNet += item.subtotal?.value || 0;
        orderItemsTotalGross += item.total?.value || 0;
    }

    const shippingMethodIndex = getRandomInt(0, SHIPPING_METHODS.length - 1);
    const shippingMethod = SHIPPING_METHODS[shippingMethodIndex]!;
    const shippingCost = shippingMethod.price;

    // Order-level discount: 0%, 5%, 10%, or 15% (whole numbers only)
    const orderDiscountOptions = [0, 5, 10, 15];
    const orderDiscountPercent = orderDiscountOptions[getRandomInt(0, orderDiscountOptions.length - 1)]!;
    const orderDiscount = Math.round(orderItemsTotalGross * (orderDiscountPercent / 100) * 100) / 100;

    // Final order total (GROSS) = items gross + shipping - order discount
    const orderTotal = Math.round((orderItemsTotalGross + shippingCost - orderDiscount) * 100) / 100;

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
            value: orderTotal,
            currency,
        },
        subtotal: {
            value: Math.round(orderSubtotalNet * 100) / 100,
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
        discountTotal:
            orderDiscount > 0
                ? {
                      value: orderDiscount,
                      currency,
                  }
                : undefined,
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
const MOCKED_ORDERS = [
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

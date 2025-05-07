import { Models, Orders, Products } from '@o2s/framework/modules';

// Product data for generating random orders
const PRODUCT_DATA = [
    { id: 'PRD-004', name: 'Rotary Hammer', price: 100, currency: 'USD', type: 'PHYSICAL', category: 'TOOLS' },
    { id: 'PRD-005', name: 'Angle Grinder', price: 79.99, currency: 'USD', type: 'PHYSICAL', category: 'TOOLS' },
    { id: 'PRD-006', name: 'Cordless Drill', price: 129.99, currency: 'USD', type: 'PHYSICAL', category: 'TOOLS' },
    { id: 'PRD-007', name: 'Laser Measure', price: 149.99, currency: 'USD', type: 'PHYSICAL', category: 'TOOLS' },
    { id: 'PRD-008', name: 'Safety Glasses', price: 19.99, currency: 'USD', type: 'PHYSICAL', category: 'SAFETY' },
    { id: 'PRD-009', name: 'Work Gloves', price: 24.99, currency: 'USD', type: 'PHYSICAL', category: 'SAFETY' },
    { id: 'PRD-010', name: 'Hard Hat', price: 29.99, currency: 'USD', type: 'PHYSICAL', category: 'SAFETY' },
    { id: 'PRD-011', name: 'Tool Belt', price: 39.99, currency: 'USD', type: 'PHYSICAL', category: 'ACCESSORIES' },
    { id: 'PRD-012', name: 'Tool Box', price: 59.99, currency: 'USD', type: 'PHYSICAL', category: 'ACCESSORIES' },
    {
        id: 'PRD-013',
        name: 'MaxFlow Air Systems',
        price: 19.99,
        currency: 'USD',
        type: 'VIRTUAL',
        category: 'MAINTENANCE',
    },
    { id: 'PRD-014', name: 'RapidFix Repair', price: 19.99, currency: 'EUR', type: 'VIRTUAL', category: 'MAINTENANCE' },
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
        currency: product.currency as Orders.Model.Order['currency'],
        product: {
            id: product.id,
            name: product.name,
            description: `Description for ${product.name}`,
            shortDescription: `Short description for ${product.name}`,
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                width: 640,
                height: 656,
                name: product.name,
                alternativeText: product.name,
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
const generateOrder = (orderIndex: number, getRandomDate: () => Date): Orders.Model.Order => {
    const orderDate = getRandomDate();
    const updateDate = new Date(orderDate);
    updateDate.setHours(updateDate.getHours() + getRandomInt(1, 48)); // Update 1-48 hours later

    const customerId = CUSTOMER_IDS[getRandomInt(0, CUSTOMER_IDS.length - 1)];
    const numItems = getRandomInt(1, 3);
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
        id: `ORD-${Math.ceil(Math.random() * 1000000)
            .toString()
            .padStart(3, '0')}`,
        customerId,
        createdAt: formatDate(orderDate),
        updatedAt: formatDate(updateDate),
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
        items,
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
    };
};

// Generate 1000 random orders
const generateOrders = (count: number, getRandomDate: () => Date): Orders.Model.Order[] => {
    const orders: Orders.Model.Order[] = [];
    for (let i = 1; i <= count; i++) {
        orders.push(generateOrder(i, getRandomDate));
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

export const mapOrder = (id: string): Orders.Model.Order | undefined => {
    return MOCKED_ORDERS.find((order) => order.id === id);
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
        } else if (field === 'createdAt' || field === 'updatedAt') {
            const aDate = new Date(aValue as string);
            const bDate = new Date(bValue as string);
            return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
        } else if (field === 'total') {
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

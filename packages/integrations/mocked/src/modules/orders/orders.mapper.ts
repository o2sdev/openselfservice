import { Models, Orders } from '@o2s/framework/modules';

const MOCK_ORDER_1: Orders.Model.Order = {
    id: 'ORD-001',
    customerId: 'cust-001',
    createdAt: '2021-01-01T22:00:00',
    updatedAt: '2021-01-01T22:00:00',
    total: {
        value: 100,
        currency: 'USD',
    },
    subtotal: {
        value: 90,
        currency: 'USD',
    },
    shippingTotal: {
        value: 10,
        currency: 'USD',
    },
    shippingSubtotal: {
        value: 10,
        currency: 'USD',
    },
    discountTotal: {
        value: 10,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PENDING',
    status: 'PENDING',
    items: [
        {
            id: 'ITEM-001',
            productId: 'PRD-004',
            quantity: 2,
            price: {
                value: 45,
                currency: 'USD',
            },
            total: {
                value: 90,
                currency: 'USD',
            },
            currency: 'USD',
            product: {
                id: 'PRD-004',
                name: 'Rotary Hammer',
                description: 'Professional heavy-duty hammer drill for concrete and masonry',
                shortDescription: 'Professional heavy-duty hammer drill for concrete and masonry',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    width: 640,
                    height: 656,
                    name: 'Rotary Hammer',
                    alternativeText: 'Rotary Hammer',
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/te-70-atc-avr',
                type: 'PHYSICAL',
                category: 'TOOLS',
                tags: [
                    {
                        label: 'New',
                        variant: 'secondary',
                    },
                ],
            },
        },
    ],
    shippingMethods: [
        {
            id: 'SHIP-001',
            name: 'Standard Shipping',
            description: '3-5 business days',
            total: {
                value: 10,
                currency: 'USD',
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

const MOCK_ORDER_2: Orders.Model.Order = {
    id: 'ORD-002',
    customerId: 'cust-001',
    createdAt: '2021-02-15T00:00:00',
    updatedAt: '2021-02-16T00:00:00',
    total: {
        value: 249.99,
        currency: 'USD',
    },
    subtotal: {
        value: 229.99,
        currency: 'USD',
    },
    shippingTotal: {
        value: 20,
        currency: 'USD',
    },
    shippingSubtotal: {
        value: 20,
        currency: 'USD',
    },
    discountTotal: {
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'SHIPPED',
    items: [
        {
            id: 'ITEM-002',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 229.99,
                currency: 'USD',
            },
            total: {
                value: 229.99,
                currency: 'USD',
            },
            currency: 'USD',
            product: {
                id: 'PRD-005',
                name: 'Cordless Angle Grinder',
                description: 'Cordless angle grinder with 22V battery platform',
                shortDescription: 'Cordless angle grinder with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    width: 640,
                    height: 656,
                    name: 'Cordless Angle Grinder',
                    alternativeText: 'Cordless Angle Grinder',
                },
                price: {
                    value: 199.99,
                    currency: 'USD',
                },
                link: 'https://example.com/products/ag-125-a22',
                type: 'PHYSICAL',
                category: 'TOOLS',
                tags: [
                    {
                        label: 'New',
                        variant: 'secondary',
                    },
                    {
                        label: 'Promo',
                        variant: 'destructive',
                    },
                ],
            },
        },
    ],
    shippingMethods: [
        {
            id: 'SHIP-002',
            name: 'Express Shipping',
            description: '1-2 business days',
            total: {
                value: 20,
                currency: 'USD',
            },
        },
    ],
    shippingAddress: {
        country: 'US',
        streetName: 'Oak Ave',
        streetNumber: '456',
        city: 'Springfield',
        region: 'IL',
        postalCode: '67890',
        phone: '555-234-5678',
        email: 'jane.smith@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Oak Ave',
        streetNumber: '456',
        city: 'Springfield',
        region: 'IL',
        postalCode: '67890',
        phone: '555-234-5678',
        email: 'jane.smith@example.com',
    },
};

const MOCK_ORDER_3: Orders.Model.Order = {
    id: 'ORD-003',
    customerId: 'cust-002',
    createdAt: '2021-03-22T00:00:00',
    updatedAt: '2021-03-23T00:00:00',
    total: {
        value: 75.5,
        currency: 'USD',
    },
    subtotal: {
        value: 65.5,
        currency: 'USD',
    },
    shippingTotal: {
        value: 10,
        currency: 'USD',
    },
    shippingSubtotal: {
        value: 10,
        currency: 'USD',
    },
    discountTotal: {
        value: 5,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-003',
            productId: 'PRD-006',
            quantity: 3,
            price: {
                value: 21.83,
                currency: 'USD',
            },
            total: {
                value: 65.5,
                currency: 'USD',
            },
            currency: 'USD',
            product: {
                id: 'PRD-006',
                name: 'Laser Measurement',
                description: 'Laser measurement device for distance measurements',
                shortDescription: 'Laser measurement device for distance measurements',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    width: 640,
                    height: 656,
                    name: 'Laser Measurement',
                    alternativeText: 'Laser Measurement',
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/pd-s',
                type: 'PHYSICAL',
                category: 'MEASUREMENT',
                tags: [
                    {
                        label: 'New',
                        variant: 'secondary',
                    },
                ],
            },
        },
    ],
    shippingMethods: [
        {
            id: 'SHIP-001',
            name: 'Standard Shipping',
            description: '3-5 business days',
            total: {
                value: 10,
                currency: 'USD',
            },
        },
    ],
    shippingAddress: {
        country: 'US',
        streetName: 'Elm St',
        streetNumber: '789',
        city: 'Metropolis',
        region: 'NY',
        postalCode: '10001',
        phone: '555-345-6789',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Elm St',
        streetNumber: '789',
        city: 'Metropolis',
        region: 'NY',
        postalCode: '10001',
        phone: '555-345-6789',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_4: Orders.Model.Order = {
    id: 'ORD-004',
    customerId: 'cust-002',
    createdAt: '2021-04-10T00:00:00',
    updatedAt: '2021-04-11T00:00:00',
    total: {
        value: 399.99,
        currency: 'USD',
    },
    subtotal: {
        value: 379.99,
        currency: 'USD',
    },
    shippingTotal: {
        value: 20,
        currency: 'USD',
    },
    shippingSubtotal: {
        value: 20,
        currency: 'USD',
    },
    discountTotal: {
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PENDING',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-004',
            productId: 'PRD-007',
            quantity: 1,
            price: {
                value: 379.99,
                currency: 'USD',
            },
            total: {
                value: 379.99,
                currency: 'USD',
            },
            currency: 'USD',
            product: {
                id: 'PRD-007',
                name: 'Cordless Drill Driver',
                description: 'Cordless drill driver with 22V battery platform',
                shortDescription: 'Cordless drill driver with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    width: 640,
                    height: 656,
                    name: 'Cordless Drill Driver',
                    alternativeText: 'Cordless Drill Driver',
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/sfc-22-a',
                type: 'PHYSICAL',
                category: 'TOOLS',
                tags: [
                    {
                        label: 'New',
                        variant: 'secondary',
                    },
                ],
            },
        },
    ],
    shippingMethods: [
        {
            id: 'SHIP-002',
            name: 'Express Shipping',
            description: '1-2 business days',
            total: {
                value: 20,
                currency: 'USD',
            },
        },
    ],
    shippingAddress: {
        country: 'US',
        streetName: 'Main St',
        streetNumber: '123',
        apartment: '4B',
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
        apartment: '4B',
        city: 'Anytown',
        region: 'CA',
        postalCode: '12345',
        phone: '555-123-4567',
        email: 'john.doe@example.com',
    },
    customerComment: 'Please leave package at the door.',
};

const MOCK_ORDER_5: Orders.Model.Order = {
    id: 'ORD-005',
    customerId: 'cust-003',
    createdAt: '2021-05-05T00:00:00',
    updatedAt: '2021-05-06T00:00:00',
    total: {
        value: 150,
        currency: 'USD',
    },
    subtotal: {
        value: 140,
        currency: 'USD',
    },
    shippingTotal: {
        value: 10,
        currency: 'USD',
    },
    shippingSubtotal: {
        value: 10,
        currency: 'USD',
    },
    discountTotal: {
        value: 15,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'FAILED',
    status: 'CANCELLED',
    items: [
        {
            id: 'ITEM-005',
            productId: 'PRD-004',
            quantity: 2,
            price: {
                value: 70,
                currency: 'USD',
            },
            total: {
                value: 140,
                currency: 'USD',
            },
            currency: 'USD',
            product: {
                id: 'PRD-004',
                name: 'Rotary Hammer',
                description: 'Professional heavy-duty hammer drill for concrete and masonry',
                shortDescription: 'Professional heavy-duty hammer drill for concrete and masonry',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    width: 640,
                    height: 656,
                    name: 'Rotary Hammer',
                    alternativeText: 'Rotary Hammer',
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/te-70-atc-avr',
                type: 'PHYSICAL',
                category: 'TOOLS',
                tags: [
                    {
                        label: 'New',
                        variant: 'secondary',
                    },
                ],
            },
        },
    ],
    shippingMethods: [
        {
            id: 'SHIP-001',
            name: 'Standard Shipping',
            description: '3-5 business days',
            total: {
                value: 10,
                currency: 'USD',
            },
        },
    ],
    shippingAddress: {
        country: 'US',
        streetName: 'Pine Rd',
        streetNumber: '567',
        city: 'Lakeside',
        region: 'WA',
        postalCode: '98765',
        phone: '555-456-7890',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Pine Rd',
        streetNumber: '567',
        city: 'Lakeside',
        region: 'WA',
        postalCode: '98765',
        phone: '555-456-7890',
        email: 'sarah.williams@example.com',
    },
    customerComment: 'Order cancelled due to payment issues.',
};

const MOCKED_ORDERS = [MOCK_ORDER_1, MOCK_ORDER_2, MOCK_ORDER_3, MOCK_ORDER_4, MOCK_ORDER_5];

export const mapOrder = (id: string): Orders.Model.Order | undefined => {
    return MOCKED_ORDERS.find((order) => order.id === id);
};

export const mapOrders = (options: Orders.Request.GetOrderListQuery, customerId: string): Orders.Model.Orders => {
    const { offset = 0, limit = 10, status, paymentStatus, dateFrom, dateTo, sort } = options;

    const customerOrders = MOCKED_ORDERS.filter((order) => order.customerId === customerId).slice(
        offset,
        offset + limit,
    );

    let filteredOrders = customerOrders.filter(
        (order) =>
            (!status || order.status === status) &&
            (!paymentStatus || order.paymentStatus === paymentStatus) &&
            (!dateFrom || new Date(order.createdAt) >= new Date(dateFrom)) &&
            (!dateTo || new Date(order.createdAt) <= new Date(dateTo)) &&
            (!dateFrom || new Date(order.updatedAt) >= new Date(dateFrom)) &&
            (!dateTo || new Date(order.updatedAt) <= new Date(dateTo)),
    );

    if (sort) {
        const [field, order] = sort.split('_');
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
    }

    return {
        data: filteredOrders.slice(offset, Number(offset) + Number(limit)),
        total: filteredOrders.length,
    };
};

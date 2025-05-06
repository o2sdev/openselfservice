import { Models, Orders } from '@o2s/framework/modules';

const MOCK_ORDER_1: Orders.Model.Order = {
    id: 'ORD-001',
    customerId: 'cust-001',
    createdAt: '2025-01-01T22:00:00',
    updatedAt: '2025-01-01T22:00:00',
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
    createdAt: '2025-02-15T00:00:00',
    updatedAt: '2025-02-16T00:00:00',
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
    customerId: 'cust-001',
    createdAt: '2025-03-22T00:00:00',
    updatedAt: '2025-03-23T00:00:00',
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
    customerId: 'cust-001',
    createdAt: '2025-04-10T00:00:00',
    updatedAt: '2025-04-11T00:00:00',
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
    customerId: 'cust-001',
    createdAt: '2025-05-05T00:00:00',
    updatedAt: '2025-05-06T00:00:00',
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

const MOCK_ORDER_6: Orders.Model.Order = {
    id: 'ORD-006',
    customerId: 'cust-001',
    createdAt: '2024-12-15T10:30:00',
    updatedAt: '2024-12-16T14:45:00',
    total: {
        value: 125.75,
        currency: 'USD',
    },
    subtotal: {
        value: 115.75,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-006',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 115.75,
                currency: 'USD',
            },
            total: {
                value: 115.75,
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
        streetName: 'Cedar Lane',
        streetNumber: '789',
        city: 'Riverdale',
        region: 'NY',
        postalCode: '10471',
        phone: '555-789-1234',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Cedar Lane',
        streetNumber: '789',
        city: 'Riverdale',
        region: 'NY',
        postalCode: '10471',
        phone: '555-789-1234',
        email: 'john.doe@example.com',
    },
};

const MOCK_ORDER_7: Orders.Model.Order = {
    id: 'ORD-007',
    customerId: 'cust-001',
    createdAt: '2024-12-03T09:15:00',
    updatedAt: '2024-12-04T11:30:00',
    total: {
        value: 189.99,
        currency: 'USD',
    },
    subtotal: {
        value: 169.99,
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
            id: 'ITEM-007',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 169.99,
                currency: 'USD',
            },
            total: {
                value: 169.99,
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
        streetName: 'Maple Street',
        streetNumber: '456',
        city: 'Boston',
        region: 'MA',
        postalCode: '02108',
        phone: '555-234-5678',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Maple Street',
        streetNumber: '456',
        city: 'Boston',
        region: 'MA',
        postalCode: '02108',
        phone: '555-234-5678',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_8: Orders.Model.Order = {
    id: 'ORD-008',
    customerId: 'cust-001',
    createdAt: '2024-02-12T14:20:00',
    updatedAt: '2024-02-13T16:45:00',
    total: {
        value: 85.5,
        currency: 'USD',
    },
    subtotal: {
        value: 75.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PENDING',
    status: 'PENDING',
    items: [
        {
            id: 'ITEM-008',
            productId: 'PRD-004',
            quantity: 1,
            price: {
                value: 75.5,
                currency: 'USD',
            },
            total: {
                value: 75.5,
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
        streetName: 'Birch Avenue',
        streetNumber: '321',
        city: 'Seattle',
        region: 'WA',
        postalCode: '98101',
        phone: '555-345-6789',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Birch Avenue',
        streetNumber: '321',
        city: 'Seattle',
        region: 'WA',
        postalCode: '98101',
        phone: '555-345-6789',
        email: 'sarah.williams@example.com',
    },
};

const MOCK_ORDER_9: Orders.Model.Order = {
    id: 'ORD-009',
    customerId: 'cust-001',
    createdAt: '2024-12-05T11:10:00',
    updatedAt: '2024-12-06T13:25:00',
    total: {
        value: 199.99,
        currency: 'USD',
    },
    subtotal: {
        value: 279.99,
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
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-009',
            productId: 'PRD-007',
            quantity: 1,
            price: {
                value: 279.99,
                currency: 'USD',
            },
            total: {
                value: 279.99,
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
        streetName: 'Oak Street',
        streetNumber: '567',
        apartment: '3A',
        city: 'Chicago',
        region: 'IL',
        postalCode: '60601',
        phone: '555-456-7890',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Oak Street',
        streetNumber: '567',
        apartment: '3A',
        city: 'Chicago',
        region: 'IL',
        postalCode: '60601',
        phone: '555-456-7890',
        email: 'john.doe@example.com',
    },
    customerComment: 'Please deliver after 5 PM.',
};

const MOCK_ORDER_10: Orders.Model.Order = {
    id: 'ORD-010',
    customerId: 'cust-001',
    createdAt: '2025-02-18T08:45:00',
    updatedAt: '2025-02-19T10:30:00',
    total: {
        value: 135.5,
        currency: 'USD',
    },
    subtotal: {
        value: 125.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'FAILED',
    status: 'CANCELLED',
    items: [
        {
            id: 'ITEM-010',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 125.5,
                currency: 'USD',
            },
            total: {
                value: 125.5,
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
        streetName: 'Pine Street',
        streetNumber: '890',
        city: 'Denver',
        region: 'CO',
        postalCode: '80202',
        phone: '555-567-8901',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Pine Street',
        streetNumber: '890',
        city: 'Denver',
        region: 'CO',
        postalCode: '80202',
        phone: '555-567-8901',
        email: 'robert.johnson@example.com',
    },
    customerComment: 'Payment failed, please contact customer.',
};

const MOCK_ORDER_11: Orders.Model.Order = {
    id: 'ORD-011',
    customerId: 'cust-001',
    createdAt: '2023-12-22T15:30:00',
    updatedAt: '2023-12-23T17:45:00',
    total: {
        value: 210.99,
        currency: 'USD',
    },
    subtotal: {
        value: 190.99,
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
            id: 'ITEM-011',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 190.99,
                currency: 'USD',
            },
            total: {
                value: 190.99,
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
        streetName: 'Willow Lane',
        streetNumber: '123',
        city: 'Portland',
        region: 'OR',
        postalCode: '97201',
        phone: '555-678-9012',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Willow Lane',
        streetNumber: '123',
        city: 'Portland',
        region: 'OR',
        postalCode: '97201',
        phone: '555-678-9012',
        email: 'sarah.williams@example.com',
    },
};

const MOCK_ORDER_12: Orders.Model.Order = {
    id: 'ORD-012',
    customerId: 'cust-001',
    createdAt: '2023-11-08T09:20:00',
    updatedAt: '2023-11-09T11:35:00',
    total: {
        value: 95.5,
        currency: 'USD',
    },
    subtotal: {
        value: 85.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-012',
            productId: 'PRD-004',
            quantity: 1,
            price: {
                value: 85.5,
                currency: 'USD',
            },
            total: {
                value: 85.5,
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
        streetName: 'Maple Avenue',
        streetNumber: '456',
        apartment: '2C',
        city: 'San Francisco',
        region: 'CA',
        postalCode: '94107',
        phone: '555-789-0123',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Maple Avenue',
        streetNumber: '456',
        apartment: '2C',
        city: 'San Francisco',
        region: 'CA',
        postalCode: '94107',
        phone: '555-789-0123',
        email: 'john.doe@example.com',
    },
    customerComment: 'Please leave with the doorman.',
};

const MOCK_ORDER_13: Orders.Model.Order = {
    id: 'ORD-013',
    customerId: 'cust-001',
    createdAt: '2023-11-14T13:40:00',
    updatedAt: '2023-11-15T15:55:00',
    total: {
        value: 349.99,
        currency: 'USD',
    },
    subtotal: {
        value: 329.99,
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
    status: 'PENDING',
    items: [
        {
            id: 'ITEM-013',
            productId: 'PRD-007',
            quantity: 1,
            price: {
                value: 329.99,
                currency: 'USD',
            },
            total: {
                value: 329.99,
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
        streetName: 'Cedar Street',
        streetNumber: '789',
        city: 'Austin',
        region: 'TX',
        postalCode: '78701',
        phone: '555-890-1234',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Cedar Street',
        streetNumber: '789',
        city: 'Austin',
        region: 'TX',
        postalCode: '78701',
        phone: '555-890-1234',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_14: Orders.Model.Order = {
    id: 'ORD-014',
    customerId: 'cust-001',
    createdAt: '2024-12-27T16:50:00',
    updatedAt: '2024-12-28T18:15:00',
    total: {
        value: 145.5,
        currency: 'USD',
    },
    subtotal: {
        value: 135.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'FAILED',
    status: 'CANCELLED',
    items: [
        {
            id: 'ITEM-014',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 135.5,
                currency: 'USD',
            },
            total: {
                value: 135.5,
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
        streetName: 'Birch Road',
        streetNumber: '321',
        city: 'Miami',
        region: 'FL',
        postalCode: '33101',
        phone: '555-901-2345',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Birch Road',
        streetNumber: '321',
        city: 'Miami',
        region: 'FL',
        postalCode: '33101',
        phone: '555-901-2345',
        email: 'sarah.williams@example.com',
    },
    customerComment: 'Payment declined, please try again.',
};

const MOCK_ORDER_15: Orders.Model.Order = {
    id: 'ORD-015',
    customerId: 'cust-001',
    createdAt: '2024-02-10T10:05:00',
    updatedAt: '2024-02-11T12:20:00',
    total: {
        value: 179.99,
        currency: 'USD',
    },
    subtotal: {
        value: 169.99,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'SHIPPED',
    items: [
        {
            id: 'ITEM-015',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 169.99,
                currency: 'USD',
            },
            total: {
                value: 169.99,
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
        streetName: 'Oak Drive',
        streetNumber: '654',
        city: 'Philadelphia',
        region: 'PA',
        postalCode: '19102',
        phone: '555-012-3456',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Oak Drive',
        streetNumber: '654',
        city: 'Philadelphia',
        region: 'PA',
        postalCode: '19102',
        phone: '555-012-3456',
        email: 'john.doe@example.com',
    },
};

const MOCK_ORDER_16: Orders.Model.Order = {
    id: 'ORD-016',
    customerId: 'cust-001',
    createdAt: '2024-02-05T12:15:00',
    updatedAt: '2024-02-06T14:30:00',
    total: {
        value: 110.5,
        currency: 'USD',
    },
    subtotal: {
        value: 100.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-016',
            productId: 'PRD-004',
            quantity: 1,
            price: {
                value: 100.5,
                currency: 'USD',
            },
            total: {
                value: 100.5,
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
        streetName: 'Pine Boulevard',
        streetNumber: '987',
        city: 'Atlanta',
        region: 'GA',
        postalCode: '30301',
        phone: '555-123-4567',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Pine Boulevard',
        streetNumber: '987',
        city: 'Atlanta',
        region: 'GA',
        postalCode: '30301',
        phone: '555-123-4567',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_17: Orders.Model.Order = {
    id: 'ORD-017',
    customerId: 'cust-001',
    createdAt: '2024-12-18T09:30:00',
    updatedAt: '2024-12-19T11:45:00',
    total: {
        value: 259.99,
        currency: 'USD',
    },
    subtotal: {
        value: 239.99,
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
            id: 'ITEM-017',
            productId: 'PRD-007',
            quantity: 1,
            price: {
                value: 239.99,
                currency: 'USD',
            },
            total: {
                value: 239.99,
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
        streetName: 'Cedar Avenue',
        streetNumber: '654',
        city: 'Las Vegas',
        region: 'NV',
        postalCode: '89101',
        phone: '555-234-5678',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Cedar Avenue',
        streetNumber: '654',
        city: 'Las Vegas',
        region: 'NV',
        postalCode: '89101',
        phone: '555-234-5678',
        email: 'sarah.williams@example.com',
    },
    customerComment: 'Holiday gift, please wrap.',
};

const MOCK_ORDER_18: Orders.Model.Order = {
    id: 'ORD-018',
    customerId: 'cust-001',
    createdAt: '2024-03-24T14:00:00',
    updatedAt: '2024-03-25T16:15:00',
    total: {
        value: 155.5,
        currency: 'USD',
    },
    subtotal: {
        value: 145.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-018',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 145.5,
                currency: 'USD',
            },
            total: {
                value: 145.5,
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
        streetName: 'Birch Street',
        streetNumber: '321',
        apartment: '5D',
        city: 'New York',
        region: 'NY',
        postalCode: '10001',
        phone: '555-345-6789',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Birch Street',
        streetNumber: '321',
        apartment: '5D',
        city: 'New York',
        region: 'NY',
        postalCode: '10001',
        phone: '555-345-6789',
        email: 'john.doe@example.com',
    },
    customerComment: 'Christmas gift, please deliver before December 25.',
};

const MOCK_ORDER_19: Orders.Model.Order = {
    id: 'ORD-019',
    customerId: 'cust-001',
    createdAt: '2025-01-20T11:25:00',
    updatedAt: '2025-01-21T13:40:00',
    total: {
        value: 199.99,
        currency: 'USD',
    },
    subtotal: {
        value: 179.99,
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
    status: 'PENDING',
    items: [
        {
            id: 'ITEM-019',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 179.99,
                currency: 'USD',
            },
            total: {
                value: 179.99,
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
        streetName: 'Oak Lane',
        streetNumber: '789',
        city: 'Dallas',
        region: 'TX',
        postalCode: '75201',
        phone: '555-456-7890',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Oak Lane',
        streetNumber: '789',
        city: 'Dallas',
        region: 'TX',
        postalCode: '75201',
        phone: '555-456-7890',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_20: Orders.Model.Order = {
    id: 'ORD-020',
    customerId: 'cust-001',
    createdAt: '2025-02-28T15:10:00',
    updatedAt: '2025-03-01T17:25:00',
    total: {
        value: 120.5,
        currency: 'USD',
    },
    subtotal: {
        value: 110.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'FAILED',
    status: 'CANCELLED',
    items: [
        {
            id: 'ITEM-020',
            productId: 'PRD-004',
            quantity: 1,
            price: {
                value: 110.5,
                currency: 'USD',
            },
            total: {
                value: 110.5,
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
        streetName: 'Maple Road',
        streetNumber: '456',
        city: 'Phoenix',
        region: 'AZ',
        postalCode: '85001',
        phone: '555-567-8901',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Maple Road',
        streetNumber: '456',
        city: 'Phoenix',
        region: 'AZ',
        postalCode: '85001',
        phone: '555-567-8901',
        email: 'sarah.williams@example.com',
    },
    customerComment: 'Payment method declined, please contact customer.',
};

const MOCK_ORDER_21: Orders.Model.Order = {
    id: 'ORD-021',
    customerId: 'cust-001',
    createdAt: '2023-12-15T08:20:00',
    updatedAt: '2023-12-16T10:35:00',
    total: {
        value: 289.99,
        currency: 'USD',
    },
    subtotal: {
        value: 269.99,
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
            id: 'ITEM-021',
            productId: 'PRD-007',
            quantity: 1,
            price: {
                value: 269.99,
                currency: 'USD',
            },
            total: {
                value: 269.99,
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
        streetName: 'Cedar Drive',
        streetNumber: '123',
        city: 'Seattle',
        region: 'WA',
        postalCode: '98101',
        phone: '555-678-9012',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Cedar Drive',
        streetNumber: '123',
        city: 'Seattle',
        region: 'WA',
        postalCode: '98101',
        phone: '555-678-9012',
        email: 'john.doe@example.com',
    },
};

const MOCK_ORDER_22: Orders.Model.Order = {
    id: 'ORD-022',
    customerId: 'cust-001',
    createdAt: '2025-05-22T13:45:00',
    updatedAt: '2025-05-23T15:55:00',
    total: {
        value: 165.5,
        currency: 'USD',
    },
    subtotal: {
        value: 155.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PENDING',
    status: 'PENDING',
    items: [
        {
            id: 'ITEM-022',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 155.5,
                currency: 'USD',
            },
            total: {
                value: 155.5,
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
        streetName: 'Birch Lane',
        streetNumber: '456',
        city: 'Boston',
        region: 'MA',
        postalCode: '02108',
        phone: '555-789-0123',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Birch Lane',
        streetNumber: '456',
        city: 'Boston',
        region: 'MA',
        postalCode: '02108',
        phone: '555-789-0123',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_23: Orders.Model.Order = {
    id: 'ORD-023',
    customerId: 'cust-001',
    createdAt: '2025-06-10T09:55:00',
    updatedAt: '2025-06-11T12:10:00',
    total: {
        value: 219.99,
        currency: 'USD',
    },
    subtotal: {
        value: 199.99,
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
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-023',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 199.99,
                currency: 'USD',
            },
            total: {
                value: 199.99,
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
        streetName: 'Oak Avenue',
        streetNumber: '789',
        city: 'San Francisco',
        region: 'CA',
        postalCode: '94107',
        phone: '555-890-1234',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Oak Avenue',
        streetNumber: '789',
        city: 'San Francisco',
        region: 'CA',
        postalCode: '94107',
        phone: '555-890-1234',
        email: 'sarah.williams@example.com',
    },
};

const MOCK_ORDER_24: Orders.Model.Order = {
    id: 'ORD-024',
    customerId: 'cust-001',
    createdAt: '2025-07-05T16:40:00',
    updatedAt: '2025-07-06T18:55:00',
    total: {
        value: 130.5,
        currency: 'USD',
    },
    subtotal: {
        value: 120.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'FAILED',
    status: 'CANCELLED',
    items: [
        {
            id: 'ITEM-024',
            productId: 'PRD-004',
            quantity: 1,
            price: {
                value: 120.5,
                currency: 'USD',
            },
            total: {
                value: 120.5,
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
        streetName: 'Maple Street',
        streetNumber: '321',
        apartment: '7E',
        city: 'Chicago',
        region: 'IL',
        postalCode: '60601',
        phone: '555-901-2345',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Maple Street',
        streetNumber: '321',
        apartment: '7E',
        city: 'Chicago',
        region: 'IL',
        postalCode: '60601',
        phone: '555-901-2345',
        email: 'john.doe@example.com',
    },
    customerComment: 'Payment declined, please contact for alternative payment method.',
};

const MOCK_ORDER_25: Orders.Model.Order = {
    id: 'ORD-025',
    customerId: 'cust-001',
    createdAt: '2025-08-18T10:15:00',
    updatedAt: '2025-08-19T12:30:00',
    total: {
        value: 175.5,
        currency: 'USD',
    },
    subtotal: {
        value: 165.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'SHIPPED',
    items: [
        {
            id: 'ITEM-025',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 165.5,
                currency: 'USD',
            },
            total: {
                value: 165.5,
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
        streetName: 'Pine Avenue',
        streetNumber: '654',
        city: 'Houston',
        region: 'TX',
        postalCode: '77001',
        phone: '555-012-3456',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Pine Avenue',
        streetNumber: '654',
        city: 'Houston',
        region: 'TX',
        postalCode: '77001',
        phone: '555-012-3456',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_26: Orders.Model.Order = {
    id: 'ORD-026',
    customerId: 'cust-001',
    createdAt: '2024-01-25T13:20:00',
    updatedAt: '2024-01-26T15:45:00',
    total: {
        value: 145.99,
        currency: 'USD',
    },
    subtotal: {
        value: 135.99,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-026',
            productId: 'PRD-004',
            quantity: 1,
            price: {
                value: 135.99,
                currency: 'USD',
            },
            total: {
                value: 135.99,
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
        streetName: 'Willow Drive',
        streetNumber: '432',
        city: 'Portland',
        region: 'OR',
        postalCode: '97201',
        phone: '555-123-7890',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Willow Drive',
        streetNumber: '432',
        city: 'Portland',
        region: 'OR',
        postalCode: '97201',
        phone: '555-123-7890',
        email: 'sarah.williams@example.com',
    },
};

const MOCK_ORDER_27: Orders.Model.Order = {
    id: 'ORD-027',
    customerId: 'cust-001',
    createdAt: '2024-02-18T11:30:00',
    updatedAt: '2024-02-19T14:15:00',
    total: {
        value: 229.99,
        currency: 'USD',
    },
    subtotal: {
        value: 209.99,
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
            id: 'ITEM-027',
            productId: 'PRD-007',
            quantity: 1,
            price: {
                value: 209.99,
                currency: 'USD',
            },
            total: {
                value: 209.99,
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
        streetName: 'Maple Court',
        streetNumber: '789',
        apartment: '3B',
        city: 'Boston',
        region: 'MA',
        postalCode: '02108',
        phone: '555-234-5678',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Maple Court',
        streetNumber: '789',
        apartment: '3B',
        city: 'Boston',
        region: 'MA',
        postalCode: '02108',
        phone: '555-234-5678',
        email: 'john.doe@example.com',
    },
};

const MOCK_ORDER_28: Orders.Model.Order = {
    id: 'ORD-028',
    customerId: 'cust-001',
    createdAt: '2024-03-25T09:45:00',
    updatedAt: '2024-03-26T12:30:00',
    total: {
        value: 189.5,
        currency: 'USD',
    },
    subtotal: {
        value: 179.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PENDING',
    status: 'PENDING',
    items: [
        {
            id: 'ITEM-028',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 179.5,
                currency: 'USD',
            },
            total: {
                value: 179.5,
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
        streetName: 'Oak Terrace',
        streetNumber: '321',
        city: 'Austin',
        region: 'TX',
        postalCode: '78701',
        phone: '555-345-6789',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Oak Terrace',
        streetNumber: '321',
        city: 'Austin',
        region: 'TX',
        postalCode: '78701',
        phone: '555-345-6789',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_29: Orders.Model.Order = {
    id: 'ORD-029',
    customerId: 'cust-001',
    createdAt: '2024-04-22T14:10:00',
    updatedAt: '2024-04-23T16:25:00',
    total: {
        value: 135.75,
        currency: 'USD',
    },
    subtotal: {
        value: 125.75,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-029',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 125.75,
                currency: 'USD',
            },
            total: {
                value: 125.75,
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
        streetName: 'Pine Lane',
        streetNumber: '654',
        city: 'Seattle',
        region: 'WA',
        postalCode: '98101',
        phone: '555-456-7890',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Pine Lane',
        streetNumber: '654',
        city: 'Seattle',
        region: 'WA',
        postalCode: '98101',
        phone: '555-456-7890',
        email: 'sarah.williams@example.com',
    },
};

const MOCK_ORDER_30: Orders.Model.Order = {
    id: 'ORD-030',
    customerId: 'cust-001',
    createdAt: '2024-05-28T10:55:00',
    updatedAt: '2024-05-29T13:20:00',
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
            id: 'ITEM-030',
            productId: 'PRD-007',
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
        streetName: 'Cedar Avenue',
        streetNumber: '987',
        apartment: '5C',
        city: 'San Francisco',
        region: 'CA',
        postalCode: '94107',
        phone: '555-567-8901',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Cedar Avenue',
        streetNumber: '987',
        apartment: '5C',
        city: 'San Francisco',
        region: 'CA',
        postalCode: '94107',
        phone: '555-567-8901',
        email: 'john.doe@example.com',
    },
};

const MOCK_ORDER_31: Orders.Model.Order = {
    id: 'ORD-031',
    customerId: 'cust-001',
    createdAt: '2024-06-15T08:40:00',
    updatedAt: '2024-06-16T10:55:00',
    total: {
        value: 115.5,
        currency: 'USD',
    },
    subtotal: {
        value: 105.5,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PAID',
    status: 'COMPLETED',
    items: [
        {
            id: 'ITEM-031',
            productId: 'PRD-004',
            quantity: 1,
            price: {
                value: 105.5,
                currency: 'USD',
            },
            total: {
                value: 105.5,
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
        streetName: 'Birch Road',
        streetNumber: '123',
        city: 'Chicago',
        region: 'IL',
        postalCode: '60601',
        phone: '555-678-9012',
        email: 'robert.johnson@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Birch Road',
        streetNumber: '123',
        city: 'Chicago',
        region: 'IL',
        postalCode: '60601',
        phone: '555-678-9012',
        email: 'robert.johnson@example.com',
    },
};

const MOCK_ORDER_32: Orders.Model.Order = {
    id: 'ORD-032',
    customerId: 'cust-001',
    createdAt: '2025-04-20T15:35:00',
    updatedAt: '2025-04-21T17:50:00',
    total: {
        value: 195.99,
        currency: 'USD',
    },
    subtotal: {
        value: 175.99,
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
            id: 'ITEM-032',
            productId: 'PRD-005',
            quantity: 1,
            price: {
                value: 175.99,
                currency: 'USD',
            },
            total: {
                value: 175.99,
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
        streetName: 'Maple Boulevard',
        streetNumber: '456',
        city: 'Miami',
        region: 'FL',
        postalCode: '33101',
        phone: '555-789-0123',
        email: 'sarah.williams@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Maple Boulevard',
        streetNumber: '456',
        city: 'Miami',
        region: 'FL',
        postalCode: '33101',
        phone: '555-789-0123',
        email: 'sarah.williams@example.com',
    },
};

const MOCK_ORDER_33: Orders.Model.Order = {
    id: 'ORD-033',
    customerId: 'cust-001',
    createdAt: '2025-04-25T12:05:00',
    updatedAt: '2025-04-26T14:20:00',
    total: {
        value: 155.75,
        currency: 'USD',
    },
    subtotal: {
        value: 145.75,
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
        value: 0,
        currency: 'USD',
    },
    currency: 'USD',
    paymentStatus: 'PENDING',
    status: 'PENDING',
    items: [
        {
            id: 'ITEM-033',
            productId: 'PRD-006',
            quantity: 1,
            price: {
                value: 145.75,
                currency: 'USD',
            },
            total: {
                value: 145.75,
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
        streetName: 'Oak Circle',
        streetNumber: '789',
        apartment: '4D',
        city: 'Dallas',
        region: 'TX',
        postalCode: '75201',
        phone: '555-890-1234',
        email: 'john.doe@example.com',
    },
    billingAddress: {
        country: 'US',
        streetName: 'Oak Circle',
        streetNumber: '789',
        apartment: '4D',
        city: 'Dallas',
        region: 'TX',
        postalCode: '75201',
        phone: '555-890-1234',
        email: 'john.doe@example.com',
    },
};

const MOCKED_ORDERS = [
    MOCK_ORDER_1,
    MOCK_ORDER_2,
    MOCK_ORDER_3,
    MOCK_ORDER_4,
    MOCK_ORDER_5,
    MOCK_ORDER_6,
    MOCK_ORDER_7,
    MOCK_ORDER_8,
    MOCK_ORDER_9,
    MOCK_ORDER_10,
    MOCK_ORDER_11,
    MOCK_ORDER_12,
    MOCK_ORDER_13,
    MOCK_ORDER_14,
    MOCK_ORDER_15,
    MOCK_ORDER_16,
    MOCK_ORDER_17,
    MOCK_ORDER_18,
    MOCK_ORDER_19,
    MOCK_ORDER_20,
    MOCK_ORDER_21,
    MOCK_ORDER_22,
    MOCK_ORDER_23,
    MOCK_ORDER_24,
    MOCK_ORDER_25,
    MOCK_ORDER_26,
    MOCK_ORDER_27,
    MOCK_ORDER_28,
    MOCK_ORDER_29,
    MOCK_ORDER_30,
    MOCK_ORDER_31,
    MOCK_ORDER_32,
    MOCK_ORDER_33,
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

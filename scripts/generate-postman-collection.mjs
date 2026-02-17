import fs from 'fs';

// Collection structure
const collection = {
    info: {
        name: 'O2S API',
        description: 'Complete API collection for O2S API Harmonization app',
        schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
    },
    auth: {
        type: 'bearer',
        bearer: [
            {
                key: 'token',
                value: '{{authToken}}',
                type: 'string',
            },
        ],
    },
    variable: [
        { key: 'baseUrl', value: 'http://localhost:3001', type: 'string' },
        { key: 'apiPrefix', value: 'api', type: 'string' },
        { key: 'authToken', value: 'Bearer mock-token', type: 'string' },
        { key: 'locale', value: 'en', type: 'string' },
        { key: 'currency', value: 'EUR', type: 'string' },
        { key: 'clientTimezone', value: 'UTC', type: 'string' },
        { key: 'userId', value: 'admin-1', type: 'string' },
        { key: 'orderId', value: 'ORD-001', type: 'string' },
        { key: 'ticketId', value: 'EL-465-920-678', type: 'string' },
        { key: 'invoiceId', value: '56698/06/2025', type: 'string' },
        { key: 'cartId', value: 'CART-001', type: 'string' },
        { key: 'productId', value: 'PRD-004', type: 'string' },
        { key: 'variantId', value: 'PRD-004-V1', type: 'string' },
        { key: 'sku', value: 'RH-2400X-PRO', type: 'string' },
        { key: 'notificationId', value: 'NOT-123-456', type: 'string' },
        { key: 'articleId', value: 'article-1', type: 'string' },
        { key: 'categoryId', value: '1', type: 'string' },
        { key: 'orgId', value: 'org-001', type: 'string' },
        { key: 'addressId', value: 'addr-001', type: 'string' },
        { key: 'sessionId', value: '1', type: 'string' },
        { key: 'billingAccountId', value: 'BA-003', type: 'string' },
        { key: 'serviceId', value: 'SRV-001', type: 'string' },
        { key: 'assetId', value: 'AST-003', type: 'string' },
        { key: 'resourceId', value: 'SRV-001', type: 'string' },
        { key: 'itemId', value: '1', type: 'string' },
        { key: 'promotionCode', value: 'SAVE10', type: 'string' },
        { key: 'providerId', value: 'stripe', type: 'string' },
        { key: 'shippingOptionId', value: 'SHIP-001', type: 'string' },
        { key: 'regionId', value: 'reg-001', type: 'string' },
        { key: 'slug', value: 'home', type: 'string' },
        { key: 'cmsEntryId', value: '1', type: 'string' },
        { key: 'referrer', value: 'http://localhost:3000', type: 'string' },
        { key: 'customerId', value: 'cust-001', type: 'string' },
    ],
    item: [],
};

// Helper function to create a request
function createRequest(name, method, path, query = [], body = null, description = '') {
    // Build path array with proper variable handling - use {{variableName}} format
    const pathParts = path.split('/').filter((p) => p);
    const urlPath = ['{{apiPrefix}}'];

    pathParts.forEach((part) => {
        if (part.startsWith(':')) {
            const varName = part.substring(1);
            // Use {{variableName}} format directly in path
            urlPath.push(`{{${varName}}}`);
        } else {
            urlPath.push(part);
        }
    });

    const url = {
        raw: `{{baseUrl}}/${urlPath.join('/')}`.replace(/\/+/g, '/'),
        host: ['{{baseUrl}}'],
        path: urlPath,
        query: query.map((q) => ({ key: q.key, value: q.value || `{{${q.key}}}` })),
    };

    const request = {
        name,
        request: {
            method,
            header: [
                { key: 'x-locale', value: '{{locale}}', type: 'text' },
                { key: 'x-currency', value: '{{currency}}', type: 'text' },
                { key: 'x-client-timezone', value: '{{clientTimezone}}', type: 'text' },
            ],
            url,
            auth: null, // Inherit from parent
        },
    };

    if (description) {
        request.request.description = description;
    }

    if (body) {
        request.request.body = {
            mode: 'raw',
            raw: JSON.stringify(body, null, 2),
            options: {
                raw: {
                    language: 'json',
                },
            },
        };
        request.request.header.push({ key: 'Content-Type', value: 'application/json', type: 'text' });
    }

    return request;
}

// Helper to create a folder
function createFolder(name, items) {
    return {
        name,
        item: items,
        auth: null, // Inherit from parent
    };
}

// Framework Modules
const frameworkModules = [];

// CMS Module
const cmsRequests = [
    createRequest('Get Entry', 'GET', '/cms/get-entry', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Entries', 'GET', '/cms/get-entries', [
        { key: 'locale', value: '{{locale}}' },
        { key: 'type', value: 'page' },
    ]),
    createRequest('Get Page', 'GET', '/cms/page', [
        { key: 'slug', value: '{{slug}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Pages', 'GET', '/cms/pages', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Get Login Page', 'GET', '/cms/login-page', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Get Not Found Page', 'GET', '/cms/not-found-page', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Get Header', 'GET', '/cms/header', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Footer', 'GET', '/cms/footer', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get App Config', 'GET', '/cms/app-config', [
        { key: 'referrer', value: '{{referrer}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get FAQ Block', 'GET', '/cms/blocks/faq', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Ticket List Block', 'GET', '/cms/blocks/ticket-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Ticket Details Block', 'GET', '/cms/blocks/ticket-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Notification List Block', 'GET', '/cms/blocks/notification-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Notification Details Block', 'GET', '/cms/blocks/notification-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Article List Block', 'GET', '/cms/blocks/article-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Article Details Block', 'GET', '/cms/blocks/article-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Invoice List Block', 'GET', '/cms/blocks/invoice-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Invoice Details Block', 'GET', '/cms/blocks/invoice-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Resource List Block', 'GET', '/cms/blocks/resource-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Resource Details Block', 'GET', '/cms/blocks/resource-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get User Account Block', 'GET', '/cms/blocks/user-account', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Service List Block', 'GET', '/cms/blocks/service-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Service Details Block', 'GET', '/cms/blocks/service-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Featured Service List Block', 'GET', '/cms/blocks/featured-service-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
];
frameworkModules.push(createFolder('CMS', cmsRequests));

// Tickets Module
const ticketsRequests = [
    createRequest('Get Ticket List', 'GET', '/tickets', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Ticket', 'GET', '/tickets/:ticketId', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Create Ticket', 'POST', '/tickets', [], {
        title: 'Sample Ticket',
        description: 'Ticket description',
        type: 1,
    }),
];
frameworkModules.push(createFolder('Tickets', ticketsRequests));

// Orders Module
const ordersRequests = [
    createRequest('Get Order List', 'GET', '/orders', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Order', 'GET', '/orders/:orderId', [{ key: 'locale', value: '{{locale}}' }]),
];
frameworkModules.push(createFolder('Orders', ordersRequests));

// Invoices Module
const invoicesRequests = [
    createRequest('Get Invoice List', 'GET', '/invoices', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Invoice', 'GET', '/invoices/:invoiceId'),
    createRequest('Get Invoice PDF', 'GET', '/invoices/:invoiceId/pdf'),
];
frameworkModules.push(createFolder('Invoices', invoicesRequests));

// Carts Module
const cartsRequests = [
    createRequest('Get Cart List', 'GET', '/carts', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Current Cart', 'GET', '/carts/current'),
    createRequest('Get Cart', 'GET', '/carts/:cartId'),
    createRequest('Create Cart', 'POST', '/carts', [], { currency: '{{currency}}', regionId: '{{regionId}}' }),
    createRequest('Update Cart', 'PATCH', '/carts/:cartId', [], { name: 'Updated Cart' }),
    createRequest('Delete Cart', 'DELETE', '/carts/:cartId'),
    createRequest('Add Cart Item', 'POST', '/carts/items', [], {
        cartId: '{{cartId}}',
        sku: '{{sku}}',
        quantity: 1,
        currency: '{{currency}}',
    }),
    createRequest('Update Cart Item', 'PATCH', '/carts/:cartId/items/:itemId', [], { quantity: 2 }),
    createRequest('Remove Cart Item', 'DELETE', '/carts/:cartId/items/:itemId'),
    createRequest('Apply Promotion', 'POST', '/carts/:cartId/promotions', [], { code: '{{promotionCode}}' }),
    createRequest('Remove Promotion', 'DELETE', '/carts/:cartId/promotions/:promotionCode'),
];
frameworkModules.push(createFolder('Carts', cartsRequests));

// Checkout Module
const checkoutRequests = [
    createRequest('Get Shipping Options', 'GET', '/checkout/:cartId/shipping-options', [
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Checkout Summary', 'GET', '/checkout/:cartId/summary', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Set Addresses', 'POST', '/checkout/:cartId/addresses', [], {
        shippingAddress: {
            streetName: 'Main Street',
            streetNumber: '123',
            city: 'New York',
            country: 'US',
            postalCode: '10001',
        },
    }),
    createRequest('Set Shipping Method', 'POST', '/checkout/:cartId/shipping-method', [], {
        shippingOptionId: '{{shippingOptionId}}',
    }),
    createRequest('Set Payment', 'POST', '/checkout/:cartId/payment', [], {
        providerId: '{{providerId}}',
        returnUrl: 'http://localhost:3000/return',
    }),
    createRequest('Place Order', 'POST', '/checkout/:cartId/place-order', [], { email: 'user@example.com' }),
    createRequest('Complete Checkout', 'POST', '/checkout/:cartId/complete', [], {
        paymentProviderId: '{{providerId}}',
        returnUrl: 'http://localhost:3000/return',
        shippingAddress: {
            streetName: 'Main Street',
            streetNumber: '123',
            city: 'New York',
            country: 'US',
            postalCode: '10001',
        },
        billingAddress: {
            streetName: 'Main Street',
            streetNumber: '123',
            city: 'New York',
            country: 'US',
            postalCode: '10001',
        },
    }),
];
frameworkModules.push(createFolder('Checkout', checkoutRequests));

// Users Module
const usersRequests = [
    createRequest('Get Current User', 'GET', '/users/me'),
    createRequest('Get User', 'GET', '/users/:userId'),
    createRequest('Get Current User Customers', 'GET', '/users/me/customers'),
    createRequest('Get Current User Customer', 'GET', '/users/me/customers/:customerId'),
    createRequest('Update Current User', 'PATCH', '/users/me', [], { firstName: 'John', lastName: 'Doe' }),
    createRequest('Update User', 'PATCH', '/users/:userId', [], { firstName: 'John', lastName: 'Doe' }),
    createRequest('Delete Current User', 'DELETE', '/users/me'),
    createRequest('Delete User', 'DELETE', '/users/:userId'),
];
frameworkModules.push(createFolder('Users', usersRequests));

// Products Module
const productsRequests = [
    createRequest('Get Product List', 'GET', '/products', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Product', 'GET', '/products/:productId', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Get Related Products', 'GET', '/products/:productId/variants/:variantId/related-products', [
        { key: 'type', value: 'COMPATIBLE' },
        { key: 'locale', value: '{{locale}}' },
        { key: 'limit', value: '10' },
    ]),
];
frameworkModules.push(createFolder('Products', productsRequests));

// Notifications Module
const notificationsRequests = [
    createRequest('Get Notification List', 'GET', '/notifications', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Notification', 'GET', '/notifications/:notificationId', [
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Mark Notification As', 'POST', '/notifications', [], { id: '{{notificationId}}', status: 'read' }),
];
frameworkModules.push(createFolder('Notifications', notificationsRequests));

// Articles Module
const articlesRequests = [
    createRequest('Get Article List', 'GET', '/articles', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Article', 'GET', '/articles/:articleId', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Search Articles', 'GET', '/articles/search', [
        { key: 'query', value: 'search term' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Category List', 'GET', '/articles/categories', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Get Category', 'GET', '/articles/categories/:categoryId', [{ key: 'locale', value: '{{locale}}' }]),
];
frameworkModules.push(createFolder('Articles', articlesRequests));

// Organizations Module
const organizationsRequests = [
    createRequest('Get Organization List', 'GET', '/organizations', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
    ]),
    createRequest('Get Organization', 'GET', '/organizations/:orgId'),
    createRequest('Check Membership', 'GET', '/organizations/membership/:orgId/:userId'),
];
frameworkModules.push(createFolder('Organizations', organizationsRequests));

// Customers Module
const customersRequests = [
    createRequest('Get Address List', 'GET', '/customers/addresses'),
    createRequest('Get Address', 'GET', '/customers/addresses/:addressId'),
    createRequest('Create Address', 'POST', '/customers/addresses', [], {
        address: {
            streetName: 'Main Street',
            streetNumber: '123',
            city: 'New York',
            country: 'US',
            postalCode: '10001',
        },
        isDefault: false,
    }),
    createRequest('Update Address', 'PATCH', '/customers/addresses/:addressId', [], {
        address: {
            streetName: 'Business Avenue',
            streetNumber: '456',
            city: 'New York',
            country: 'US',
            postalCode: '10002',
        },
    }),
    createRequest('Delete Address', 'DELETE', '/customers/addresses/:addressId'),
    createRequest('Set Default Address', 'POST', '/customers/addresses/:addressId/default'),
];
frameworkModules.push(createFolder('Customers', customersRequests));

// Payments Module
const paymentsRequests = [
    createRequest('Get Providers', 'GET', '/payments/providers', [
        { key: 'regionId', value: '{{regionId}}' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Session', 'GET', '/payments/sessions/:sessionId'),
    createRequest('Create Session', 'POST', '/payments/sessions', [], {
        cartId: '{{cartId}}',
        providerId: '{{providerId}}',
        returnUrl: 'http://localhost:3000/return',
    }),
    createRequest('Update Session', 'PATCH', '/payments/sessions/:sessionId', [], {
        returnUrl: 'http://localhost:3000/return-updated',
    }),
    createRequest('Cancel Session', 'DELETE', '/payments/sessions/:sessionId'),
];
frameworkModules.push(createFolder('Payments', paymentsRequests));

// Billing Accounts Module
const billingAccountsRequests = [
    createRequest('Get Billing Account List', 'GET', '/billing-accounts', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
    ]),
    createRequest('Get Billing Account', 'GET', '/billing-accounts/:billingAccountId'),
];
frameworkModules.push(createFolder('Billing Accounts', billingAccountsRequests));

// Resources Module
const resourcesRequests = [
    createRequest('Get Service List', 'GET', '/resources/services', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Service', 'GET', '/resources/services/:serviceId', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Get Featured Services', 'GET', '/resources/services/featured'),
    createRequest('Get Asset List', 'GET', '/resources/assets', [
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
        { key: 'locale', value: '{{locale}}' },
    ]),
    createRequest('Get Asset', 'GET', '/resources/assets/:assetId', [{ key: 'locale', value: '{{locale}}' }]),
    createRequest('Get Compatible Services', 'GET', '/resources/assets/:assetId/compatible-services'),
    createRequest('Purchase Resource', 'POST', '/resources/:resourceId/purchase'),
];
frameworkModules.push(createFolder('Resources', resourcesRequests));

// Search Module
const searchRequests = [createRequest('Search', 'GET', '/search', [{ key: 'index', value: 'articles' }])];
frameworkModules.push(createFolder('Search', searchRequests));

// Page Module
const pageRequests = [
    createRequest('Get Init', 'GET', '/page/init', [{ key: 'referrer', value: '{{referrer}}' }]),
    createRequest('Get Page', 'GET', '/page', [{ key: 'slug', value: '{{slug}}' }]),
];

// Blocks
const blocks = [];

// Article Blocks
const articleBlocks = [
    createRequest('Get Article Block', 'GET', '/blocks/article', [{ key: 'slug', value: '{{articleId}}' }]),
    createRequest('Get Article List Block', 'GET', '/blocks/article-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Article Search Block', 'GET', '/blocks/article-search', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Search Articles', 'GET', '/blocks/article-search/articles', [
        { key: 'query', value: 'search term' },
        { key: 'basePath', value: '/articles' },
    ]),
];
blocks.push(createFolder('Article Blocks', articleBlocks));

// Category Blocks
const categoryBlocks = [
    createRequest('Get Category Block', 'GET', '/blocks/category', [{ key: 'id', value: '{{categoryId}}' }]),
    createRequest('Get Category Articles', 'GET', '/blocks/category/articles', [
        { key: 'id', value: '{{categoryId}}' },
        { key: 'page', value: '1' },
        { key: 'limit', value: '10' },
    ]),
    createRequest('Get Category List Block', 'GET', '/blocks/category-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
];
blocks.push(createFolder('Category Blocks', categoryBlocks));

// Ticket Blocks
const ticketBlocks = [
    createRequest('Get Ticket List Block', 'GET', '/blocks/ticket-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Ticket Details Block', 'GET', '/blocks/ticket-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get Ticket Recent Block', 'GET', '/blocks/ticket-recent', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Ticket Summary Block', 'GET', '/blocks/ticket-summary', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
];
blocks.push(createFolder('Ticket Blocks', ticketBlocks));

// Order Blocks
const orderBlocks = [
    createRequest('Get Order List Block', 'GET', '/blocks/order-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Order Details Block', 'GET', '/blocks/order-details', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Orders Summary Block', 'GET', '/blocks/orders-summary', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
];
blocks.push(createFolder('Order Blocks', orderBlocks));

// Invoice Blocks
const invoiceBlocks = [
    createRequest('Get Invoice List Block', 'GET', '/blocks/invoice-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
];
blocks.push(createFolder('Invoice Blocks', invoiceBlocks));

// Notification Blocks
const notificationBlocks = [
    createRequest('Get Notification List Block', 'GET', '/blocks/notification-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get Notification Details Block', 'GET', '/blocks/notification-details/:notificationId', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Mark Notification As', 'POST', '/blocks/notification-details', [], {
        id: '{{notificationId}}',
        status: 'read',
    }),
    createRequest('Get Notification Summary Block', 'GET', '/blocks/notification-summary', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
];
blocks.push(createFolder('Notification Blocks', notificationBlocks));

// Payment Blocks
const paymentBlocks = [
    createRequest('Get Payments Summary Block', 'GET', '/blocks/payments-summary', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get Payments History Block', 'GET', '/blocks/payments-history', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
];
blocks.push(createFolder('Payment Blocks', paymentBlocks));

// Product Blocks
const productBlocks = [
    createRequest('Get Product List Block', 'GET', '/blocks/product-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Product Details Block', 'GET', '/blocks/product-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get Recommended Products Block', 'GET', '/blocks/recommended-products', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
];
blocks.push(createFolder('Product Blocks', productBlocks));

// Service Blocks
const serviceBlocks = [
    createRequest('Get Service List Block', 'GET', '/blocks/service-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Service Details Block', 'GET', '/blocks/service-details', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get Featured Service List Block', 'GET', '/blocks/featured-service-list', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
];
blocks.push(createFolder('Service Blocks', serviceBlocks));

// UI Component Blocks
const uiBlocks = [
    createRequest('Get Hero Section Block', 'GET', '/blocks/hero-section', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Feature Section Block', 'GET', '/blocks/feature-section', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get Feature Section Grid Block', 'GET', '/blocks/feature-section-grid', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get Media Section Block', 'GET', '/blocks/media-section', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Pricing Section Block', 'GET', '/blocks/pricing-section', [
        { key: 'id', value: '{{cmsEntryId}}' },
    ]),
    createRequest('Get CTA Section Block', 'GET', '/blocks/cta-section', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Bento Grid Block', 'GET', '/blocks/bento-grid', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get FAQ Block', 'GET', '/blocks/faq', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Quick Links Block', 'GET', '/blocks/quick-links', [{ key: 'id', value: '{{cmsEntryId}}' }]),
];
blocks.push(createFolder('UI Component Blocks', uiBlocks));

// Other Blocks
const otherBlocks = [
    createRequest('Get User Account Block', 'GET', '/blocks/user-account', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get Document List Block', 'GET', '/blocks/document-list', [{ key: 'id', value: '{{cmsEntryId}}' }]),
    createRequest('Get SurveyJS Block', 'GET', '/blocks/surveyjs', [{ key: 'id', value: '{{cmsEntryId}}' }]),
];
blocks.push(createFolder('Other Blocks', otherBlocks));

// Assemble collection
collection.item = [
    createFolder('Framework Modules', frameworkModules),
    createFolder('Page', pageRequests),
    createFolder('Blocks', blocks),
];

// Write to file
fs.writeFileSync('O2S-API.postman_collection.json', JSON.stringify(collection, null, 2));
console.log('Postman collection generated successfully: O2S-API.postman_collection.json');

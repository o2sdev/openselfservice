import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
    apisidebar: [
        {
            type: 'doc',
            id: 'o-2-s-api-harmonization-http-api',
        },
        {
            type: 'category',
            label: 'cms',
            items: [
                {
                    type: 'doc',
                    id: 'cms-controller-get-entry',
                    label: 'Get CMS entry',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-entries',
                    label: 'Get CMS entries',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-page',
                    label: 'Get CMS page',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-pages',
                    label: 'Get CMS pages',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-login-page',
                    label: 'Get CMS login page',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-not-found-page',
                    label: 'Get CMS not-found page',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-header',
                    label: 'Get CMS header',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-footer',
                    label: 'Get CMS footer',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-app-config',
                    label: 'Get CMS app config',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-faq-block',
                    label: 'Get FAQ block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-ticket-list-block',
                    label: 'Get ticket-list block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-ticket-details-block',
                    label: 'Get ticket-details block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-notification-list-block',
                    label: 'Get notification-list block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-notification-details-block',
                    label: 'Get notification-details block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-article-list-block',
                    label: 'Get article-list block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-article-details-block',
                    label: 'Get article-details block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-invoice-list-block',
                    label: 'Get invoice-list block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-invoice-details-block',
                    label: 'Get invoice-details block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-resource-list-block',
                    label: 'Get resource-list block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-resource-details-block',
                    label: 'Get resource-details block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-user-account-block',
                    label: 'Get user-account block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-service-list-block',
                    label: 'Get service-list block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-service-details-block',
                    label: 'Get service-details block',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'cms-controller-get-featured-service-list-block',
                    label: 'Get featured-service-list block',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'tickets',
            items: [
                {
                    type: 'doc',
                    id: 'tickets-controller-get-ticket',
                    label: 'Get ticket by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'tickets-controller-get-ticket-list',
                    label: 'List tickets',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'tickets-controller-create-ticket',
                    label: 'Create ticket',
                    className: 'api-method post',
                },
            ],
        },
        {
            type: 'category',
            label: 'notifications',
            items: [
                {
                    type: 'doc',
                    id: 'notifications-controller-get-notification',
                    label: 'Get notification by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'notifications-controller-get-notification-list',
                    label: 'List notifications',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'notifications-controller-mark-notification-as',
                    label: 'Update notification status',
                    className: 'api-method post',
                },
            ],
        },
        {
            type: 'category',
            label: 'users',
            items: [
                {
                    type: 'doc',
                    id: 'user-controller-get-current-user',
                    label: 'Get current user',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'user-controller-update-current-user',
                    label: 'Update current user',
                    className: 'api-method patch',
                },
                {
                    type: 'doc',
                    id: 'user-controller-delete-current-user',
                    label: 'Delete current user',
                    className: 'api-method delete',
                },
                {
                    type: 'doc',
                    id: 'user-controller-get-user',
                    label: 'Get user by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'user-controller-update-user',
                    label: 'Update user by id',
                    className: 'api-method patch',
                },
                {
                    type: 'doc',
                    id: 'user-controller-delete-user',
                    label: 'Delete user by id',
                    className: 'api-method delete',
                },
                {
                    type: 'doc',
                    id: 'user-controller-get-customers-for-current-user',
                    label: 'Get customers for current user',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'user-controller-get-customer-for-current-user-by-id',
                    label: 'Get current user customer by id',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'organizations',
            items: [
                {
                    type: 'doc',
                    id: 'organization-controller-get-organization',
                    label: 'Get organization by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'organization-controller-get-organizations',
                    label: 'List organizations',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'organization-controller-check-membership',
                    label: 'Check organization membership',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'billing-accounts',
            items: [
                {
                    type: 'doc',
                    id: 'billing-account-controller-get-billing-accounts',
                    label: 'List billing accounts',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'billing-account-controller-get-billing-account',
                    label: 'Get billing account by id',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'resources',
            items: [
                {
                    type: 'doc',
                    id: 'resource-controller-purchase-resource',
                    label: 'Purchase or activate resource',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'resource-controller-get-service-list',
                    label: 'List services',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'resource-controller-get-service',
                    label: 'Get service by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'resource-controller-get-featured-service-list',
                    label: 'List featured services',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'resource-controller-get-asset-list',
                    label: 'List assets',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'resource-controller-get-asset',
                    label: 'Get asset by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'resource-controller-get-compatible-service-list',
                    label: 'List compatible services for asset',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'invoices',
            items: [
                {
                    type: 'doc',
                    id: 'invoice-controller-get-invoice-list',
                    label: 'List invoices',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'invoice-controller-get-invoice',
                    label: 'Get invoice by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'invoice-controller-get-invoice-pdf',
                    label: 'Download invoice PDF',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'articles',
            items: [
                {
                    type: 'doc',
                    id: 'article-controller-get-category-list',
                    label: 'List article categories',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'article-controller-get-category',
                    label: 'Get article category by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'article-controller-search-articles',
                    label: 'Search articles',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'article-controller-get-article',
                    label: 'Get article by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'article-controller-get-article-list',
                    label: 'List articles',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'Search',
            items: [
                {
                    type: 'doc',
                    id: 'search-controller-search',
                    label: 'SearchController_search',
                    className: 'api-method post',
                },
            ],
        },
        {
            type: 'category',
            label: 'products',
            items: [
                {
                    type: 'doc',
                    id: 'products-controller-get-product-list',
                    label: 'List products',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'products-controller-get-product',
                    label: 'Get product by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'products-controller-get-related-product-list',
                    label: 'List related products',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'orders',
            items: [
                {
                    type: 'doc',
                    id: 'orders-controller-get-order',
                    label: 'Get order by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'orders-controller-get-order-list',
                    label: 'List orders',
                    className: 'api-method get',
                },
            ],
        },
        {
            type: 'category',
            label: 'carts',
            items: [
                {
                    type: 'doc',
                    id: 'carts-controller-get-current-cart',
                    label: 'Get current cart',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-get-cart',
                    label: 'Get cart by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-update-cart',
                    label: 'Update cart',
                    className: 'api-method patch',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-delete-cart',
                    label: 'Delete cart',
                    className: 'api-method delete',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-get-cart-list',
                    label: 'List carts',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-create-cart',
                    label: 'Create cart',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-add-cart-item',
                    label: 'Add item to cart',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-update-cart-item',
                    label: 'Update cart item',
                    className: 'api-method patch',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-remove-cart-item',
                    label: 'Remove cart item',
                    className: 'api-method delete',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-apply-promotion',
                    label: 'Apply promotion code',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'carts-controller-remove-promotion',
                    label: 'Remove promotion code',
                    className: 'api-method delete',
                },
            ],
        },
        {
            type: 'category',
            label: 'customers',
            items: [
                {
                    type: 'doc',
                    id: 'customers-controller-get-addresses',
                    label: 'List customer addresses',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'customers-controller-create-address',
                    label: 'Create customer address',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'customers-controller-get-address',
                    label: 'Get customer address by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'customers-controller-update-address',
                    label: 'Update customer address',
                    className: 'api-method patch',
                },
                {
                    type: 'doc',
                    id: 'customers-controller-delete-address',
                    label: 'Delete customer address',
                    className: 'api-method delete',
                },
                {
                    type: 'doc',
                    id: 'customers-controller-set-default-address',
                    label: 'Set default customer address',
                    className: 'api-method post',
                },
            ],
        },
        {
            type: 'category',
            label: 'payments',
            items: [
                {
                    type: 'doc',
                    id: 'payments-controller-get-providers',
                    label: 'List payment providers',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'payments-controller-create-session',
                    label: 'Create payment session',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'payments-controller-get-session',
                    label: 'Get payment session by id',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'payments-controller-update-session',
                    label: 'Update payment session',
                    className: 'api-method patch',
                },
                {
                    type: 'doc',
                    id: 'payments-controller-cancel-session',
                    label: 'Cancel payment session',
                    className: 'api-method delete',
                },
            ],
        },
        {
            type: 'category',
            label: 'checkout',
            items: [
                {
                    type: 'doc',
                    id: 'checkout-controller-set-addresses',
                    label: 'Set checkout addresses',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'checkout-controller-set-shipping-method',
                    label: 'Set checkout shipping method',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'checkout-controller-set-payment',
                    label: 'Set checkout payment',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'checkout-controller-get-shipping-options',
                    label: 'Get checkout shipping options',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'checkout-controller-get-checkout-summary',
                    label: 'Get checkout summary',
                    className: 'api-method get',
                },
                {
                    type: 'doc',
                    id: 'checkout-controller-place-order',
                    label: 'Place order from cart',
                    className: 'api-method post',
                },
                {
                    type: 'doc',
                    id: 'checkout-controller-complete-checkout',
                    label: 'Complete checkout flow',
                    className: 'api-method post',
                },
            ],
        },
        {
            type: 'category',
            label: 'Organizations',
            items: [
                {
                    type: 'doc',
                    id: 'organizations-controller-get-customers',
                    label: 'OrganizationsController_getCustomers',
                    className: 'api-method get',
                },
            ],
        },
    ],
};

export default sidebar.apisidebar;

export type { ApiConfig } from './api-config';

export * as Models from './utils/models';

/** Headless CMS: pages, entries, blocks, header/footer, app config. */
export { createModule } from './utils/create-module';
export type { CustomModuleConfig, RegisterableModule } from './utils/create-module';

export * as CMS from './modules/cms';
/** Support tickets: list, single, create. */
export * as Tickets from './modules/tickets';
/** User notifications: list, single, mark as read. */
export * as Notifications from './modules/notifications';
/** Articles and categories (knowledge base, blog). */
export * as Articles from './modules/articles';
/** Invoices: list, single, PDF. */
export * as Invoices from './modules/invoices';
/** Resources, services, assets: list, purchase, compatible/featured. */
export * as Resources from './modules/resources';
/** Users and current-user: get, update, delete, customers. */
export * as Users from './modules/users';
/** Organizations: list, single, membership check. */
export * as Organizations from './modules/organizations';
/** Authentication (no controller): service for login/session. */
export * as Auth from './modules/auth';
/** Cache (no controller): service for get/set/delete. */
export * as Cache from './modules/cache';
/** Billing accounts: list, single. */
export * as BillingAccounts from './modules/billing-accounts';
/** Search: payload/result types; optional service/controller. */
export * as Search from './modules/search';
/** Products: list, single, related. */
export * as Products from './modules/products';
/** Orders: list, single. */
export * as Orders from './modules/orders';
/** Carts: CRUD, items, promotions, prepare checkout. */
export * as Carts from './modules/carts';
/** Customer addresses: list, CRUD, set default. */
export * as Customers from './modules/customers';
/** Payments: providers, sessions (create/update/cancel). */
export * as Payments from './modules/payments';
/** Checkout: addresses, shipping, payment, place order. */
export * as Checkout from './modules/checkout';

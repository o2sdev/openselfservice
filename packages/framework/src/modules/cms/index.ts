/**
 * # CMS module
 *
 * Headless CMS content: pages, entries, header/footer, app config, and block types (FAQ, ticket list,
 * notifications, articles, invoices, resources, user account, services, products, orders, etc.).
 * Implementation is provided by API Harmonization. Base path: `/cms`.
 *
 * ## ApiConfig
 *
 * Under `integrations.cms`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './cms.model';
export * as Request from './cms.request';
export { CmsService as Service } from './cms.service';
export { CmsController as Controller } from './cms.controller';
export { CmsModule as Module } from './cms.module';

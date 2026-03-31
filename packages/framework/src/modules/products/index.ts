/**
 * # Products module
 *
 * Products: list, single, related products. Base path: `/products`. Under `integrations.products`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './products.model';
export * as Request from './products.request';
export { ProductService as Service } from './products.service';
export { ProductsController as Controller } from './products.controller';
export { ProductsModule as Module } from './products.module';

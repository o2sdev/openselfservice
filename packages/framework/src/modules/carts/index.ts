/**
 * # Carts module
 *
 * Carts: CRUD, items, promotions, addresses, shipping, prepare checkout. Base path: `/carts`. Under `integrations.carts`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './carts.model';
export * as Request from './carts.request';
export { CartService as Service } from './carts.service';
export { CartsController as Controller } from './carts.controller';
export { CartsModule as Module } from './carts.module';

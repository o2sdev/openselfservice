/**
 * # Orders module
 *
 * Orders: list, single. Base path: `/orders`. Under `integrations.orders`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './orders.model';
export * as Request from './orders.request';
export { OrderService as Service } from './orders.service';
export { OrdersController as Controller } from './orders.controller';
export { OrdersModule as Module } from './orders.module';

/**
 * # Customers module
 *
 * Customer addresses: list, CRUD, set default. Base path: `/customers`. Under `integrations.customers`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './customers.model';
export * as Request from './customers.request';
export { CustomerService as Service } from './customers.service';
export { CustomersController as Controller } from './customers.controller';
export { CustomersModule as Module } from './customers.module';

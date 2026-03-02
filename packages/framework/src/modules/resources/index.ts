/**
 * # Resources module
 *
 * Resources, services, and assets: list, single, purchase/activate, compatible services, featured services.
 * Base path: `/resources`. Under `integrations.resources`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './resources.model';
export * as Request from './resources.request';
export { ResourceService as Service } from './resources.service';
export { ResourceController as Controller } from './resources.controller';
export { ResourceModule as Module } from './resources.module';

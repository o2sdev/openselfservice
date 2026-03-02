/**
 * # Organizations module
 *
 * Organizations: list, single, membership check. Base path: `organizations`. Under `integrations.organizations`: `name`, `service`, `controller`, `providers`.
 */
export * as Model from './organizations.model';
export * as OrganizationModel from './organizations.model';
export * as Request from './organizations.request';
export { OrganizationsModule as Module } from './organizations.module';
export { OrganizationController as Controller } from './organizations.controller';
export { OrganizationService as Service } from './organizations.service';

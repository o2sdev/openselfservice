/**
 * # Users module
 *
 * Users and current-user: get, list, update, delete, customer associations. Base path: `/users`.
 * Under `integrations.users`: `name`, `service`, `controller`, `imports`, `providers`.
 */
export * as Model from './users.model';
export * as Request from './users.request';
export { UserService as Service } from './users.service';
export { UserController as Controller } from './users.controller';
export { UsersModule as Module } from './users.module';

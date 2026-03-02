/**
 * # Notifications module
 *
 * User notifications: list, single, mark as read/viewed. Exports Request/Model types, abstract Service,
 * Controller (HTTP), and NestJS Module.
 *
 * ## Endpoints (Controller, prefix `/notifications`)
 *
 * | Method | Path | Description |
 * |--------|------|-------------|
 * | GET | `/notifications` | Notification list (pagination, filters). |
 * | GET | `/notifications/:id` | Single notification. |
 * | POST | `/notifications` | Mark notification as (e.g. read). |
 *
 * ## ApiConfig
 *
 * Under `integrations.notifications`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './notifications.model';
export * as Request from './notifications.request';
export { NotificationService as Service } from './notifications.service';
export { NotificationsController as Controller } from './notifications.controller';
export { NotificationsModule as Module } from './notifications.module';

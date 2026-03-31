/**
 * # Tickets module
 *
 * Support tickets: list, single ticket, create. Exports Request/Model types, abstract Service,
 * Controller (HTTP), and NestJS Module.
 *
 * ## Endpoints (Controller, prefix `/tickets`)
 *
 * | Method | Path | Description |
 * |--------|------|-------------|
 * | GET | `/tickets` | Ticket list (pagination, filters). |
 * | GET | `/tickets/:id` | Single ticket. |
 * | POST | `/tickets` | Create ticket. |
 *
 * ## ApiConfig
 *
 * Under `integrations.tickets`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './tickets.model';
export * as Request from './tickets.request';
export { TicketService as Service } from './tickets.service';
export { TicketsController as Controller } from './tickets.controller';
export { TicketsModule as Module } from './tickets.module';

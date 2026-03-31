/**
 * # Invoices module
 *
 * Invoices: list, single, PDF download. Exports Request/Model types, abstract Service,
 * Controller (HTTP), and NestJS Module.
 *
 * ## Endpoints (Controller, prefix `/invoices`)
 *
 * | Method | Path | Description |
 * |--------|------|-------------|
 * | GET | `/invoices` | Invoice list (pagination, filters). |
 * | GET | `/invoices/:id` | Single invoice. |
 * | GET | `/invoices/:id/pdf` | Invoice PDF. |
 *
 * ## ApiConfig
 *
 * Under `integrations.invoices`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './invoices.model';
export * as Request from './invoices.request';
export { InvoiceService as Service } from './invoices.service';
export { InvoiceController as Controller } from './invoices.controller';
export { InvoiceModule as Module } from './invoices.module';

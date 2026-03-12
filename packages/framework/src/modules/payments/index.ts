/**
 * # Payments module
 *
 * Payment providers and sessions: list providers, create/update/cancel session. Base path: `/payments`. Under `integrations.payments`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './payments.model';
export * as Request from './payments.request';
export { PaymentService as Service } from './payments.service';
export { PaymentsController as Controller } from './payments.controller';
export { PaymentsModule as Module } from './payments.module';

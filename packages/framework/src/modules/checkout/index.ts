/**
 * # Checkout module
 *
 * Checkout: addresses, shipping, payment, summary, place order, complete. Base path: `/checkout`. Under `integrations.checkout`: `name`, `service`, `controller`, `imports`.
 */
export * as Model from './checkout.model';
export * as Request from './checkout.request';
export { CheckoutService as Service } from './checkout.service';
export { CheckoutController as Controller } from './checkout.controller';
export { CheckoutModule as Module } from './checkout.module';

export const URL = '/blocks/order-confirmation';

export { OrderConfirmationBlockModule as Module } from './order-confirmation.module';
export { getOrderConfirmationBlockMock } from './order-confirmation.mock'; // TODO: remove this mock
export { OrderConfirmationService as Service } from './order-confirmation.service';
export { OrderConfirmationController as Controller } from './order-confirmation.controller';

export * as Model from './order-confirmation.model';
export * as Request from './order-confirmation.request';

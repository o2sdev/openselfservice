export const URL = '/blocks/checkout-summary';

export { CheckoutSummaryBlockModule as Module } from './checkout-summary.module';
export { getCheckoutSummaryBlockMock } from './checkout-summary.mock'; // TODO: remove this mock
export { CheckoutSummaryService as Service } from './checkout-summary.service';
export { CheckoutSummaryController as Controller } from './checkout-summary.controller';

export * as Model from './checkout-summary.model';
export * as Request from './checkout-summary.request';

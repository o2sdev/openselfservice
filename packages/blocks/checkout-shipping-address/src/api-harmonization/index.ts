export const URL = '/blocks/checkout-shipping-address';

export { CheckoutShippingAddressBlockModule as Module } from './checkout-shipping-address.module';
export { getCheckoutShippingAddressBlockMock } from './checkout-shipping-address.mock'; // TODO: remove this mock
export { CheckoutShippingAddressService as Service } from './checkout-shipping-address.service';
export { CheckoutShippingAddressController as Controller } from './checkout-shipping-address.controller';

export * as Model from './checkout-shipping-address.model';
export * as Request from './checkout-shipping-address.request';

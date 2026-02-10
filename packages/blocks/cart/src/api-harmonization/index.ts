export const URL = '/blocks/cart';

export { CartBlockModule as Module } from './cart.module';
export { getCartBlockMock } from './cart.mock'; // TODO: Remove mock and use API integration
export { CartService as Service } from './cart.service';
export { CartController as Controller } from './cart.controller';

export * as Model from './cart.model';
export * as Request from './cart.request';

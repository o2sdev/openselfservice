import type { Carts } from '@o2s/framework/modules';
import mitt from 'mitt';

export type O2SEventMap = {
    'cart:changed': { cart: Carts.Model.Cart };
};

export const eventBus = mitt<O2SEventMap>();

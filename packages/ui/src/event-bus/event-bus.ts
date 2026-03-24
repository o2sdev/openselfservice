import mitt from 'mitt';

export type O2SEventMap = {
    'cart:changed': { itemCount: number };
};

export const eventBus = mitt<O2SEventMap>();

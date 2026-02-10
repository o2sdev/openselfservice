import { getCartBlockMock } from './cart.mock';
import type { CartBlock } from './cart.model';

/** Input from CMS – minimal block id. Uses mock until API integration provides full flat CartBlock. */
export const mapCart = (cms: { id: string }, locale: string): CartBlock => {
    return getCartBlockMock(cms.id, locale);
};

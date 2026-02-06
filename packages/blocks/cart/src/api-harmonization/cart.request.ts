import { CMS } from '@o2s/framework/modules';

/**
 * GetCartBlockQuery
 *
 * Minimal query params for the cart block.
 * TODO: Extend with real cart-identifying fields (e.g. cartId, customerId) once
 *       backend contracts are defined.
 */
export class GetCartBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

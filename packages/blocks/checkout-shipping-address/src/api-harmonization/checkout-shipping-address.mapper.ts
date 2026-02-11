import { CMS } from '@o2s/configs.integrations';

import { getCheckoutShippingAddressBlockMock } from './checkout-shipping-address.mock';
import type { CheckoutShippingAddressBlock } from './checkout-shipping-address.model';

export const mapCheckoutShippingAddress = (
    cms: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock,
    locale: string,
): CheckoutShippingAddressBlock => {
    return getCheckoutShippingAddressBlockMock(cms.id, locale);
};

import { CMS } from '@o2s/configs.integrations';

import { CheckoutShippingAddressBlock } from './checkout-shipping-address.model';

export const mapCheckoutShippingAddress = (
    cms: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock,
    _locale: string,
): CheckoutShippingAddressBlock => {
    return {
        __typename: 'CheckoutShippingAddressBlock',
        id: cms.id,
    };
};

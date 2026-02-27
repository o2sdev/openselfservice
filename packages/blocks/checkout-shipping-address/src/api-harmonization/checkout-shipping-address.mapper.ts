import { CMS } from '@o2s/configs.integrations';

import type { CheckoutShippingAddressBlock } from './checkout-shipping-address.model';

export const mapCheckoutShippingAddress = (
    cms: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock,
): CheckoutShippingAddressBlock => {
    return {
        __typename: 'CheckoutShippingAddressBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        fields: cms.fields,
        buttons: cms.buttons,
        errors: cms.errors,
        summaryLabels: cms.summaryLabels,
        stepIndicator: cms.stepIndicator,
        cartPath: cms.cartPath,
    };
};

import { CMS } from '@o2s/configs.integrations';

import { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';

export const mapCheckoutBillingPayment = (
    cms: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock,
    _locale: string,
): CheckoutBillingPaymentBlock => {
    return {
        __typename: 'CheckoutBillingPaymentBlock',
        id: cms.id,
    };
};

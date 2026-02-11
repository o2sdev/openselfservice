import { CMS } from '@o2s/configs.integrations';

import { getCheckoutBillingPaymentBlockMock } from './checkout-billing-payment.mock';
import type { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';

export const mapCheckoutBillingPayment = (
    cms: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock,
    locale: string,
): CheckoutBillingPaymentBlock => {
    return getCheckoutBillingPaymentBlockMock(cms.id, locale);
};

import { CMS } from '@o2s/configs.integrations';

import type { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';

export const mapCheckoutBillingPayment = (
    cms: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock,
): CheckoutBillingPaymentBlock => {
    return {
        __typename: 'CheckoutBillingPaymentBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        fields: cms.fields,
        buttons: cms.buttons,
        errors: cms.errors,
        summaryLabels: cms.summaryLabels,
        stepIndicator: cms.stepIndicator,
    };
};

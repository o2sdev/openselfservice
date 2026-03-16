import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { CMS } from '@o2s/framework/modules';

export class CheckoutBillingPaymentBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutBillingPaymentBlock';
    title!: string;
    subtitle?: string;
    fields!: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock['fields'];
    buttons!: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock['buttons'];
    errors!: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock['errors'];
    summaryLabels!: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock['summaryLabels'];
    stepIndicator?: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock['stepIndicator'];
    cartPath?: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock['cartPath'];
    orderConfirmationPath!: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock['orderConfirmationPath'];
}

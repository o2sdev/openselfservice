import { CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class CheckoutShippingAddressBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutShippingAddressBlock';
    title!: string;
    subtitle?: string;
    fields!: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock['fields'];
    buttons!: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock['buttons'];
    errors!: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock['errors'];
    summaryLabels!: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock['summaryLabels'];
    stepIndicator!: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock['stepIndicator'];
    cartPath!: CMS.Model.CheckoutShippingAddressBlock.CheckoutShippingAddressBlock['cartPath'];
}

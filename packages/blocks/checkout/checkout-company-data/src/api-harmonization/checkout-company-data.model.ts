import { CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class CheckoutCompanyDataBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutCompanyDataBlock';
    title!: string;
    subtitle?: string;
    fields!: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock['fields'];
    buttons!: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock['buttons'];
    errors!: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock['errors'];
    summaryLabels!: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock['summaryLabels'];
    stepIndicator!: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock['stepIndicator'];
    billingInfoNote?: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock['billingInfoNote'];
    cartPath!: CMS.Model.CheckoutCompanyDataBlock.CheckoutCompanyDataBlock['cartPath'];
}

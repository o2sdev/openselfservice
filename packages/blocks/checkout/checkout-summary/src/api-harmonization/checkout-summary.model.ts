import { CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class CheckoutSummaryBlock extends ApiModels.Block.Block {
    __typename!: 'CheckoutSummaryBlock';
    title!: string;
    subtitle?: string;
    sections!: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock['sections'];
    buttons!: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock['buttons'];
    errors!: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock['errors'];
    loading!: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock['loading'];
    placeholders!: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock['placeholders'];
    stepIndicator!: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock['stepIndicator'];
    cartPath!: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock['cartPath'];
}

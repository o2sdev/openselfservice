import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { CMS } from '@o2s/framework/modules';

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

import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class PricingSectionBlock extends Models.Block.Block {
    __typename!: 'PricingSectionBlock';
    title?: CMS.Model.PricingSectionBlock.PricingSectionBlock['title'];
    subtitle?: CMS.Model.PricingSectionBlock.PricingSectionBlock['subtitle'];
    description?: CMS.Model.PricingSectionBlock.PricingSectionBlock['description'];
    headingType?: CMS.Model.PricingSectionBlock.PricingSectionBlock['headingType'];
    pricingList?: CMS.Model.PricingSectionBlock.PricingSectionBlock['pricingList'];
}

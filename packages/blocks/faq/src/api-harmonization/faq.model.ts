import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class FaqBlock extends Models.Block.Block {
    __typename!: 'FaqBlock';
    title!: CMS.Model.FaqBlock.FaqBlock['title'];
    subtitle!: CMS.Model.FaqBlock.FaqBlock['subtitle'];
    items!: CMS.Model.FaqBlock.FaqBlock['items'];
    banner?: CMS.Model.FaqBlock.FaqBoxWithButton;
}

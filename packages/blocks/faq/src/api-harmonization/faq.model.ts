import { CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class FaqBlock extends ApiModels.Block.Block {
    __typename!: 'FaqBlock';
    title!: CMS.Model.FaqBlock.FaqBlock['title'];
    subtitle?: CMS.Model.FaqBlock.FaqBlock['subtitle'];
    items!: CMS.Model.FaqBlock.FaqBlock['items'];
    banner?: CMS.Model.FaqBlock.FaqBoxWithButton;
    declare meta?: CMS.Model.FaqBlock.FaqBlock['meta'];
}

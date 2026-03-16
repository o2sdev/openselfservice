import { CMS } from '@o2s/configs.integrations';

export class FaqBlock extends Models.Block.Block {
    __typename!: 'FaqBlock';
    title!: CMS.Model.FaqBlock.FaqBlock['title'];
    subtitle?: CMS.Model.FaqBlock.FaqBlock['subtitle'];
    items!: CMS.Model.FaqBlock.FaqBlock['items'];
    banner?: CMS.Model.FaqBlock.FaqBoxWithButton;
    meta?: CMS.Model.FaqBlock.FaqBlock['meta'];
}

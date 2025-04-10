import { CMS } from '../../models';
import { Block } from '../../utils';

export class FaqBlock extends Block.Block {
    __typename!: 'FaqBlock';
    title!: CMS.Model.FaqBlock.FaqBlock['title'];
    subtitle!: CMS.Model.FaqBlock.FaqBlock['subtitle'];
    items!: CMS.Model.FaqBlock.FaqBlock['items'];
    banner?: CMS.Model.FaqBlock.FaqBoxWithButton;
}

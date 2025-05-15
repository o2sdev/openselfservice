import { CMS } from '../../models';
import { Block } from '../../utils';

export class QuickLinksBlock extends Block.Block {
    __typename!: 'QuickLinksBlock';
    title?: CMS.Model.QuickLinksBlock.QuickLinksBlock['title'];
    description?: CMS.Model.QuickLinksBlock.QuickLinksBlock['description'];
    items!: CMS.Model.QuickLinksBlock.QuickLinksBlock['items'];
}

import { Articles, CMS } from '@o2s/configs.integrations';

import { Block } from '../../utils';

export class CategoryListBlock extends Block.Block {
    __typename!: 'CategoryListBlock';
    title!: CMS.Model.CategoryListBlock.CategoryListBlock['title'];
    description?: CMS.Model.CategoryListBlock.CategoryListBlock['description'];
    items!: Articles.Model.Category[];
}

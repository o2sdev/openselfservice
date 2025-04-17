import { CMS } from '../../models';
import { Block } from '../../utils';

export class CategoryListBlock extends Block.Block {
    __typename!: 'CategoryListBlock';
    title!: CMS.Model.CategoryListBlock.CategoryListBlock['title'];
    description?: CMS.Model.CategoryListBlock.CategoryListBlock['description'];
    items!: CMS.Model.CategoryListBlock.CategoryListBlock['items'];
}

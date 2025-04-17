import { CMS } from '../../models';
import { Block } from '../../utils';

export class CategoryBlock extends Block.Block {
    __typename!: 'CategoryBlock';
    title!: CMS.Model.CategoryBlock.CategoryBlock['title'];
    description!: CMS.Model.CategoryBlock.CategoryBlock['description'];
    icon?: CMS.Model.CategoryBlock.CategoryBlock['icon'];
    components?: CMS.Model.CategoryBlock.CategoryBlock['components'];
    items!: CMS.Model.CategoryBlock.CategoryBlock['items'];
}

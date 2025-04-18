import { Articles, CMS } from '../../models';
import { Block } from '../../utils';

export class CategoryBlock extends Block.Block {
    __typename!: 'CategoryBlock';
    title!: Articles.Model.Category['title'];
    description!: Articles.Model.Category['description'];
    icon?: Articles.Model.Category['icon'];
    components?: CMS.Model.CategoryBlock.CategoryBlock['components'];
    items!: Articles.Model.Articles;
}

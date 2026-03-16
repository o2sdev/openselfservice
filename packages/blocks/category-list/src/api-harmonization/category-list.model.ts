import { Articles, CMS } from '@o2s/configs.integrations';

export class CategoryListBlock extends ApiModels.Block.Block {
    __typename!: 'CategoryListBlock';
    title!: CMS.Model.CategoryListBlock.CategoryListBlock['title'];
    description?: CMS.Model.CategoryListBlock.CategoryListBlock['description'];
    items!: Articles.Model.Category[];
    meta?: CMS.Model.CategoryListBlock.CategoryListBlock['meta'];
}

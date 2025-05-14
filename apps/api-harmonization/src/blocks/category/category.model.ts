import { Articles, CMS, Models } from '@o2s/framework/modules';

import { Block } from '../../utils';

export class CategoryBlock extends Block.Block {
    __typename!: 'CategoryBlock';
    title!: Articles.Model.Category['title'];
    description!: Articles.Model.Category['description'];
    icon?: Articles.Model.Category['icon'];
    components?: CMS.Model.CategoryBlock.CategoryBlock['components'];
    articles!: CategoryArticlesListBlock;
    pagination?: Models.Pagination.Pagination;
}

class CategoryArticlesListBlock {
    title!: CMS.Model.CategoryBlock.CategoryBlock['title'];
    description?: CMS.Model.CategoryBlock.CategoryBlock['description'];
    items!: Articles.Model.Articles;
}

export class CategoryArticles {
    items!: {
        total: Articles.Model.Articles['total'];
        data: Omit<Articles.Model.Article, 'sections'>[];
    };
}

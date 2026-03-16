import { Articles, CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class CategoryBlock extends ApiModels.Block.Block {
    __typename!: 'CategoryBlock';
    title!: Articles.Model.Category['title'];
    description!: Articles.Model.Category['description'];
    icon?: Articles.Model.Category['icon'];
    components?: CMS.Model.CategoryBlock.CategoryBlock['components'];
    componentsPosition!: CMS.Model.CategoryBlock.CategoryBlock['componentsPosition'];
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

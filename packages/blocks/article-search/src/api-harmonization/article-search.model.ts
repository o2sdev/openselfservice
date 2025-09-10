import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class ArticleSearchBlock extends ApiModels.Block.Block {
    __typename!: 'ArticleSearchBlock';
    title?: string;
    inputLabel!: string;
    category?: string;
    noResults!: {
        title: string;
        description?: string;
    };
}

export class ArticleList {
    articles!: Article[];
}

class Article {
    label!: string;
    url!: string;
}

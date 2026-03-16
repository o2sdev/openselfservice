export class ArticleSearchBlock extends ApiModels.Block.Block {
    __typename!: 'ArticleSearchBlock';
    title?: string;
    inputLabel!: string;
    category?: string;
    parent?: {
        slug: string;
    };
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

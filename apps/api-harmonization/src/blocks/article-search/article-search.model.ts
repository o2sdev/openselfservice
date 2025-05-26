import { Block } from '../../utils';

export class ArticleSearchBlock extends Block.Block {
    __typename!: 'ArticleSearchBlock';
    title?: string;
    inputLabel!: string;
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

import { Articles } from '@o2s/framework/modules';

import { Block } from '../../utils';

export class ArticleDetailsBlock extends Block.Block {
    __typename!: 'ArticleDetailsBlock';
    data!: Article;
}

export class Article {
    id!: Articles.Model.Article['id'];
    title!: Articles.Model.Article['title'];
    lead!: string;
    createdAt!: string;
    updatedAt!: string;
    image?: string;
    thumbnail?: string;
    sections!: ArticleSection[];
}

export type ArticleSection = ArticleSectionText | ArticleSectionImage;

class ArticleSectionCommon {
    id!: Articles.Model.ArticleSection['id'];
    createdAt!: string;
    updatedAt!: string;
}

class ArticleSectionText extends ArticleSectionCommon {
    __typename!: 'ArticleSectionText';
    title!: Articles.Model.ArticleSectionText['title'];
    content!: Articles.Model.ArticleSectionText['content'];
}

class ArticleSectionImage extends ArticleSectionCommon {
    __typename!: 'ArticleSectionImage';
    url!: string;
    alt?: string;
    caption?: string;
}

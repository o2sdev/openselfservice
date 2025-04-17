import { Media, Pagination } from '@/utils/models';

export class Article {
    id!: string;
    slug!: string;
    createdAt!: string;
    updatedAt!: string;
    title!: string;
    lead!: string;
    image?: Media.Media;
    thumbnail?: Media.Media;
    sections!: ArticleSection[];
    category!: {
        id: string;
        title: string;
    };
}

export type ArticleSection = ArticleSectionText | ArticleSectionImage;

class ArticleSectionCommon {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
}

export class ArticleSectionText extends ArticleSectionCommon {
    __typename!: 'ArticleSectionText';
    title!: string;
    content!: string;
}

export class ArticleSectionImage extends ArticleSectionCommon {
    __typename!: 'ArticleSectionImage';
    url!: string;
    alt?: string;
    caption?: string;
}

export type Articles = Pagination.Paginated<Article>;

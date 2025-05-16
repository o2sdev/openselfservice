import { Media, Pagination } from '@/utils/models';

export class Category {
    id!: string;
    slug!: string;
    createdAt!: string;
    updatedAt!: string;
    title!: string;
    description!: string;
    icon?: Media.Media;
    parent?: {
        slug: string;
        title: string;
        parent?: {
            slug: string;
            title: string;
            parent?: {
                slug: string;
                title: string;
            };
        };
    };
}

export type Categories = Pagination.Paginated<Category>;

export class Article {
    id!: string;
    slug!: string;
    createdAt!: string;
    updatedAt!: string;
    title!: string;
    lead!: string;
    tags!: string[];
    image?: Media.Media;
    thumbnail?: Media.Media;
    category?: {
        id: string;
        title: string;
    };
    author?: Author;
    sections!: ArticleSection[];
    isProtected!: boolean;
}

export type ArticleSection = ArticleSectionText | ArticleSectionImage;

class ArticleSectionCommon {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
}

export class ArticleSectionText extends ArticleSectionCommon {
    __typename!: 'ArticleSectionText';
    title?: string;
    content!: string;
}

export class ArticleSectionImage extends ArticleSectionCommon {
    __typename!: 'ArticleSectionImage';
    image!: Media.Media;
    caption?: string;
}

export type Articles = Pagination.Paginated<Omit<Article, 'sections'>>;
export class Author {
    name!: string;
    position?: string;
    email?: string;
    avatar?: Media.Media;
}

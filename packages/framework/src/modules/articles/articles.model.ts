import { Media, Pagination } from '@/utils/models';

/** Article category: id, slug, title, description, icon, parent (nested structure). */
export class Category {
    id!: string;
    slug!: string;
    createdAt!: string;
    updatedAt!: string;
    title!: string;
    description!: string;
    icon?: string;
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

/** Paginated category list. */
export type Categories = Pagination.Paginated<Category>;

/** Article: title, lead, tags, image, thumbnail, category, author, sections (Text/Image), roles, theme. */
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
    /** Role-based access control */
    roles?: string[];
    theme?: string;
}

/** Article section: text (title, content) or image (image, caption). */
export type ArticleSection = ArticleSectionText | ArticleSectionImage;

class ArticleSectionCommon {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
}

/** Text section of an article. */
export class ArticleSectionText extends ArticleSectionCommon {
    __typename!: 'ArticleSectionText';
    title?: string;
    content!: string;
}

/** Image section of an article. */
export class ArticleSectionImage extends ArticleSectionCommon {
    __typename!: 'ArticleSectionImage';
    image!: Media.Media;
    caption?: string;
}

/** Paginated article list (without full sections). */
export type Articles = Pagination.Paginated<Omit<Article, 'sections'>>;

/** Article author: name, position, email, avatar. */
export class Author {
    name!: string;
    position?: string;
    email?: string;
    avatar?: Media.Media;
}

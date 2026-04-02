import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Media, Pagination } from '@/utils/models';

/** Nested parent category structure. */
export class CategoryParent {
    @ApiProperty({ description: 'Parent category slug' })
    slug!: string;

    @ApiProperty({ description: 'Parent category title' })
    title!: string;

    @ApiPropertyOptional({ description: 'Grandparent category', type: () => CategoryParent })
    parent?: CategoryParent;
}

/** Article category: id, slug, title, description, icon, parent (nested structure). */
export class Category {
    @ApiProperty({ description: 'Unique category identifier' })
    id!: string;

    @ApiProperty({ description: 'URL-friendly category slug' })
    slug!: string;

    @ApiProperty({ description: 'Category creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiProperty({ description: 'Category display title' })
    title!: string;

    @ApiProperty({ description: 'Category description' })
    description!: string;

    @ApiPropertyOptional({ description: 'Category icon identifier' })
    icon?: string;

    @ApiPropertyOptional({ description: 'Parent category hierarchy', type: () => CategoryParent })
    parent?: CategoryParent;
}

/** Article author: name, position, email, avatar. */
export class Author {
    @ApiProperty({ description: 'Author display name' })
    name!: string;

    @ApiPropertyOptional({ description: 'Author job position' })
    position?: string;

    @ApiPropertyOptional({ description: 'Author email address' })
    email?: string;

    @ApiPropertyOptional({ description: 'Author avatar image' })
    avatar?: Media.Media;
}

/** Article category reference. */
export class ArticleCategoryRef {
    @ApiProperty({ description: 'Category identifier' })
    id!: string;

    @ApiProperty({ description: 'Category title' })
    title!: string;
}

/** Base class for article sections. */
export class ArticleSectionCommon {
    @ApiProperty({ description: 'Section identifier' })
    id!: string;

    @ApiProperty({ description: 'Section creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;
}

/** Text section of an article. */
export class ArticleSectionText extends ArticleSectionCommon {
    @ApiProperty({ description: 'Section type discriminator', enum: ['ArticleSectionText'] })
    __typename!: 'ArticleSectionText';

    @ApiPropertyOptional({ description: 'Section title' })
    title?: string;

    @ApiProperty({ description: 'Section text content (may contain HTML/markdown)' })
    content!: string;
}

/** Image section of an article. */
export class ArticleSectionImage extends ArticleSectionCommon {
    @ApiProperty({ description: 'Section type discriminator', enum: ['ArticleSectionImage'] })
    __typename!: 'ArticleSectionImage';

    @ApiProperty({ description: 'Section image' })
    image!: Media.Media;

    @ApiPropertyOptional({ description: 'Image caption' })
    caption?: string;
}

/** Article section: text (title, content) or image (image, caption). */
export type ArticleSection = ArticleSectionText | ArticleSectionImage;

/** Article: title, lead, tags, image, thumbnail, category, author, sections (Text/Image), roles, theme. */
export class Article {
    @ApiProperty({ description: 'Unique article identifier' })
    id!: string;

    @ApiProperty({ description: 'URL-friendly article slug' })
    slug!: string;

    @ApiProperty({ description: 'Article creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiProperty({ description: 'Article title' })
    title!: string;

    @ApiProperty({ description: 'Article lead/summary paragraph' })
    lead!: string;

    @ApiProperty({ description: 'Article tags', type: [String] })
    tags!: string[];

    @ApiPropertyOptional({ description: 'Main article image' })
    image?: Media.Media;

    @ApiPropertyOptional({ description: 'Article thumbnail image' })
    thumbnail?: Media.Media;

    @ApiPropertyOptional({ description: 'Article category reference', type: () => ArticleCategoryRef })
    category?: ArticleCategoryRef;

    @ApiPropertyOptional({ description: 'Article author', type: () => Author })
    author?: Author;

    @ApiProperty({ description: 'Article content sections (text or image)', type: () => [ArticleSectionText] })
    sections!: ArticleSection[];

    @ApiPropertyOptional({ description: 'Role-based access control roles', type: [String] })
    roles?: string[];

    @ApiPropertyOptional({ description: 'Article theme/style variant' })
    theme?: string;
}

/** Article list item (without sections for list views). */
export class ArticleListItem {
    @ApiProperty({ description: 'Unique article identifier' })
    id!: string;

    @ApiProperty({ description: 'URL-friendly article slug' })
    slug!: string;

    @ApiProperty({ description: 'Article creation timestamp in ISO 8601 format' })
    createdAt!: string;

    @ApiProperty({ description: 'Last update timestamp in ISO 8601 format' })
    updatedAt!: string;

    @ApiProperty({ description: 'Article title' })
    title!: string;

    @ApiProperty({ description: 'Article lead/summary paragraph' })
    lead!: string;

    @ApiProperty({ description: 'Article tags', type: [String] })
    tags!: string[];

    @ApiPropertyOptional({ description: 'Main article image' })
    image?: Media.Media;

    @ApiPropertyOptional({ description: 'Article thumbnail image' })
    thumbnail?: Media.Media;

    @ApiPropertyOptional({ description: 'Article category reference', type: () => ArticleCategoryRef })
    category?: ArticleCategoryRef;

    @ApiPropertyOptional({ description: 'Article author', type: () => Author })
    author?: Author;

    @ApiPropertyOptional({ description: 'Role-based access control roles', type: [String] })
    roles?: string[];

    @ApiPropertyOptional({ description: 'Article theme/style variant' })
    theme?: string;
}

/** Paginated category list for OpenAPI schema. */
export class PaginatedCategories extends Pagination.Paginated<Category> {
    @ApiProperty({ description: 'Array of categories', type: () => [Category] })
    declare data: Category[];

    @ApiProperty({ description: 'Total number of categories' })
    declare total: number;
}

/** Paginated article list for OpenAPI schema (without sections). */
export class PaginatedArticles extends Pagination.Paginated<ArticleListItem> {
    @ApiProperty({ description: 'Array of articles', type: () => [ArticleListItem] })
    declare data: ArticleListItem[];

    @ApiProperty({ description: 'Total number of articles' })
    declare total: number;
}

/** @deprecated Use PaginatedCategories class for OpenAPI compatibility. */
export type Categories = Pagination.Paginated<Category>;

/** @deprecated Use PaginatedArticles class for OpenAPI compatibility. */
export type Articles = Pagination.Paginated<Omit<Article, 'sections'>>;

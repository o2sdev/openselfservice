import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { PaginationQuery } from '@/utils/models/pagination';

/** Parameters for fetching a single category: id, locale. */
export class GetCategoryParams {
    @ApiProperty({ description: 'Article category identifier.' })
    id!: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Query for category list: locale, pagination (PaginationQuery), optional sort (field, order). */
export class GetCategoryListQuery extends PaginationQuery {
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
    @ApiPropertyOptional({ description: 'Optional sort configuration for category list results.' })
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}

/** Parameters for fetching a single article: slug, locale. */
export class GetArticleParams {
    @ApiProperty({ description: 'Article slug identifier.' })
    slug!: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Query for article list: locale, pagination, optional ids, category, dateFrom, dateTo, sortBy, sortOrder. */
export class GetArticleListQuery extends PaginationQuery {
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
    @ApiPropertyOptional({ description: 'Optional list of article identifiers to include.' })
    ids?: string[];
    @ApiPropertyOptional({ description: 'Optional category identifier filter.' })
    category?: string;
    @ApiPropertyOptional({ description: 'Filter articles created/updated from this date (ISO string).' })
    dateFrom?: string;
    @ApiPropertyOptional({ description: 'Filter articles created/updated up to this date (ISO string).' })
    dateTo?: string;
    @ApiPropertyOptional({ description: 'Sort field name.' })
    sortBy?: string;
    @ApiPropertyOptional({ description: 'Sort direction.' })
    sortOrder?: 'asc' | 'desc';
}

/** Search query: extends GetArticleListQuery with optional search phrase `query`. */
export class SearchArticlesBody extends GetArticleListQuery {
    @ApiPropertyOptional({ description: 'Free-text search phrase.' })
    query?: string;
}

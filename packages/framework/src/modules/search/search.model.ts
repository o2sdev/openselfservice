import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

type RangeValue = string | number | Date | boolean;

type SearchPrimitive = string | number | boolean | null;
type SearchObject = { [key: string]: SearchValue };
type SearchValue = SearchPrimitive | SearchObject | SearchValue[];

/** Additional metadata payload attached to search request/result. */
export type SearchMetadata = Record<string, SearchValue>;

/** Sort order configuration. */
export class SearchSortOption {
    @ApiProperty({ description: 'Field name to sort by' })
    field!: string;

    @ApiProperty({ description: 'Sort direction', enum: ['asc', 'desc'] })
    order!: 'asc' | 'desc';
}

/** Pagination configuration. */
export class SearchPagination {
    @ApiPropertyOptional({ description: 'Number of results to skip' })
    offset?: number;

    @ApiPropertyOptional({ description: 'Maximum number of results to return' })
    limit?: number;
}

/** Generic search request payload used by integrations (for example Algolia). */
export class SearchPayload {
    @ApiPropertyOptional({ description: 'Search query string' })
    query?: string;

    @ApiPropertyOptional({ description: 'Exact match filters', additionalProperties: true })
    exact?: Record<string, SearchValue | Date>;

    @ApiPropertyOptional({ description: 'Range filters (min/max)', additionalProperties: true })
    range?: Record<string, { min?: RangeValue; max?: RangeValue }>;

    @ApiPropertyOptional({ description: 'Fields that must exist', type: [String] })
    exists?: string[];

    @ApiPropertyOptional({ description: 'Fields that must not exist', type: [String] })
    notExists?: string[];

    @ApiPropertyOptional({ description: 'Pagination settings', type: () => SearchPagination })
    pagination?: SearchPagination;

    @ApiPropertyOptional({ description: 'Additional filters', additionalProperties: true })
    filter?: SearchObject;

    @ApiPropertyOptional({ description: 'Additional metadata', additionalProperties: true })
    metadata?: SearchMetadata;

    @ApiPropertyOptional({ description: 'Sort configuration', type: () => [SearchSortOption] })
    sort?: SearchSortOption[];

    @ApiPropertyOptional({ description: 'Locale for localized results' })
    locale?: string;
}

/** Generic search result envelope. */
export class SearchResult<T> {
    @ApiProperty({ description: 'Search result hits (type depends on index)', isArray: true })
    hits!: T[];

    @ApiProperty({ description: 'Total number of matching results' })
    total!: number;

    @ApiPropertyOptional({ description: 'Result metadata', additionalProperties: true })
    metadata?: SearchMetadata;
}

/** Non-generic search result for OpenAPI documentation. */
export class SearchResultResponse {
    @ApiProperty({ description: 'Search result hits (structure depends on search index)', isArray: true })
    hits!: unknown[];

    @ApiProperty({ description: 'Total number of matching results' })
    total!: number;

    @ApiPropertyOptional({ description: 'Result metadata', additionalProperties: true })
    metadata?: SearchMetadata;
}

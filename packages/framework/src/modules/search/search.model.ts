type RangeValue = string | number | Date | boolean;

type SearchPrimitive = string | number | boolean | null;
type SearchObject = { [key: string]: SearchValue };
type SearchValue = SearchPrimitive | SearchObject | SearchValue[];

/** Additional metadata payload attached to search request/result. */
export type SearchMetadata = Record<string, SearchValue>;

/** Generic search request payload used by integrations (for example Algolia). */
export class SearchPayload {
    query?: string;
    exact?: Record<string, SearchValue | Date>;
    range?: Record<string, { min?: RangeValue; max?: RangeValue }>;
    exists?: string[];
    notExists?: string[];
    pagination?: {
        offset?: number;
        limit?: number;
    };
    filter?: SearchObject;
    metadata?: SearchMetadata;
    sort?: Array<{
        field: string;
        order: 'asc' | 'desc';
    }>;
    locale?: string;
}

/** Generic search result envelope. */
export class SearchResult<T> {
    hits!: T[];
    total!: number;
    metadata?: SearchMetadata;
}

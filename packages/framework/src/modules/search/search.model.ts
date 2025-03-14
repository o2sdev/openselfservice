type RangeValue = string | number | Date | boolean;

type ExactMatchValue = string | number | boolean | null | object;

export class SearchPayload {
    query?: string;
    exact?: Record<string, ExactMatchValue>;
    range?: Record<string, { min?: RangeValue; max?: RangeValue }>;
    exists?: string[];
    notExists?: string[];
    pagination?: {
        offset?: number;
        limit?: number;
    };
    filter?: unknown;
    sort?: Array<{
        field: string;
        order: 'asc' | 'desc';
    }>;
    [key: string]: unknown;
    locale?: string;
}

export class SearchResult<T> {
    hits!: T[];
    total!: number;
    [key: string]: unknown;
}

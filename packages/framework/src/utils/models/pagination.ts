export class PaginationQuery {
    offset?: number;
    limit?: number;
}

export class Paginated<T> {
    data!: T[];
    total!: number;
}

export class Pagination {
    limit!: number;
    legend!: string;
    prev!: string;
    next!: string;
    selectPage!: string;
}

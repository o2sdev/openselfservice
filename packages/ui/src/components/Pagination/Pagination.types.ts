export interface PaginationProps {
    disabled?: boolean;
    legend: string;
    total: number;
    offset: number;
    limit: number;
    prev: string;
    next: string;
    selectPage: string;
    onChange: (page: number) => void;
}

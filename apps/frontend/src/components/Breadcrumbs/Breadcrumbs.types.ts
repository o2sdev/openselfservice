export interface BreadcrumbsProps {
    breadcrumbs?: BreadcrumbItem[];
}

export interface BreadcrumbItem {
    label: string;
    slug?: string;
}

import { Models } from '@o2s/utils.frontend';

export interface BreadcrumbsProps {
    breadcrumbs?: BreadcrumbItem[];
    LinkComponent: Models.Link.LinkComponent;
}

export interface BreadcrumbItem {
    label: string;
    slug?: string;
}

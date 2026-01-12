import { Models } from '@o2s/framework/modules';

export class NavigationGroup {
    __typename!: 'NavigationGroup';
    title!: string;
    items!: (NavigationItem | NavigationGroup)[];
    /** Normalized permissions required to view this navigation item (e.g., [{resource: 'page:dashboard', actions: ['view']}]) */
    permissions?: Models.Permission.Permission[];
    url?: string;
}

export class NavigationItem {
    __typename!: 'NavigationItem';
    url?: string;
    label!: string;
    description?: string;
    /** Normalized permissions required to view this navigation item (e.g., [{resource: 'page:dashboard', actions: ['view']}]) */
    permissions?: Models.Permission.Permission[];
}

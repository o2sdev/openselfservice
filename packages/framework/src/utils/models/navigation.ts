import * as Auth from '@/modules/auth';

export class NavigationGroup {
    __typename!: 'NavigationGroup';
    title!: string;
    items!: (NavigationItem | NavigationGroup)[];
    roles?: Auth.Model.Role[];
    url?: string;
}

export class NavigationItem {
    __typename!: 'NavigationItem';
    url?: string;
    label!: string;
    description?: string;
    roles?: Auth.Model.Role[];
}

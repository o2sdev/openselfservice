import { Auth } from '@o2s/framework/modules';

export class NavigationGroup {
    __typename!: 'NavigationGroup';
    title!: string;
    items!: (NavigationItem | NavigationGroup)[];
    permissions?: Auth.Constants.Roles[];
    url?: string;
}

export class NavigationItem {
    __typename!: 'NavigationItem';
    url?: string;
    label!: string;
    description?: string;
    permissions?: Auth.Constants.Roles[];
}

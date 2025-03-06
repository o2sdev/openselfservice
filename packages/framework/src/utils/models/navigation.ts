export class NavigationGroup {
    __typename!: 'NavigationGroup';
    title!: string;
    items!: (NavigationItem | NavigationGroup)[];
}

export class NavigationItem {
    __typename!: 'NavigationItem';
    url?: string;
    label!: string;
    description?: string;
}

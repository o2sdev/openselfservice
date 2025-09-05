export class Link {
    url!: string;
    label!: string;
    description?: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'destructive' | 'link' | 'ghost';
}

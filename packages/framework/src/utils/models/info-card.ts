export class InfoCard {
    title!: string;
    icon?: string;
    message?: string;
    altMessage?: string;
    link?: {
        label?: string;
        icon?: string;
        url?: string;
        page?: {
            slug?: string;
        };
    };
}

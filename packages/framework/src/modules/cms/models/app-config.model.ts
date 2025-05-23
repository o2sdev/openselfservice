export class AppConfig {
    locales!: {
        value: string;
        label: string;
    }[];
    header?: string;
    footer?: string;
    labels!: Labels;
}

export class Labels {
    errors!: {
        requestError: {
            title: string;
            content?: string;
        };
    };
    dates!: {
        today: string;
        yesterday: string;
    };
    actions!: {
        showMore: string;
        showLess: string;
        show: string;
        hide: string;
        edit: string;
        save: string;
        cancel: string;
        delete: string;
        logOut: string;
        settings: string;
        renew: string;
        details: string;
    };
}

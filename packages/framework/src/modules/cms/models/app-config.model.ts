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
            content: string;
        };
    };
}

import { Media } from '@/utils/models';

export class AppConfig {
    locales!: {
        value: string;
        label: string;
    }[];
    header?: string;
    footer?: string;
    labels!: Labels;
    themes!: Themes;
}

export type Themes = {
    [name: string]: Theme;
};

export class Theme {
    name!: string;
    logo?: Media.Media;
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

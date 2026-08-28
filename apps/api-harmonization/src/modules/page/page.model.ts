import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/framework/modules';

export class Init {
    locales!: {
        value: string;
        label: string;
    }[];
    common!: PageCommon;
    labels!: Labels;
    themes!: Themes;
}

export type Labels = CMS.Model.AppConfig.Labels;
export type Themes = CMS.Model.AppConfig.Themes;

export class Page {
    data?: PageData;
    meta!: Metadata;
}

export class NotFound {
    common!: PageCommon;
}

export class Metadata {
    seo!: Models.SEO.Page;
    locales!: string[];
    theme?: string;
    redirect?: string;
}

export class Breadcrumb {
    slug!: string;
    label!: string;
}

export class PageCommon {
    header!: CMS.Model.Header.Header;
    footer!: CMS.Model.Footer.Footer;
}

export class PageData {
    alternativeUrls!: {
        [key: string]: string;
    };
    template!: CMS.Model.Page.PageTemplate;
    hasOwnTitle!: boolean;
    breadcrumbs!: Breadcrumb[];
}

export type { Blocks } from '../../blocks.config';

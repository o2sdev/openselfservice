import { Models } from '@o2s/framework/modules';

export class Page {
    id!: string;
    slug!: string;
    locale!: string;
    template!: PageTemplate;
    updatedAt!: string;
    seo!: Models.SEO.Page;
    hasOwnTitle!: boolean;
    parent!: {
        slug: string;
    };
}

export abstract class Template {
    slots!: {
        [key: string]: SlotBlock[];
    };
}

export class SlotBlock {
    __typename!: string;
    id!: string;
}

export type PageTemplate = OneColumnTemplate | TwoColumnTemplate;

export class OneColumnTemplate implements Template {
    __typename!: 'OneColumnTemplate';
    slots!: {
        main: SlotBlock[];
    };
}

export class TwoColumnTemplate implements Template {
    __typename!: 'TwoColumnTemplate';
    slots!: {
        top: SlotBlock[];
        left: SlotBlock[];
        right: SlotBlock[];
        bottom: SlotBlock[];
    };
}

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
        [key: string]: SlotComponent[];
    };
}

export class SlotComponent {
    __typename!: string;
    id!: string;
}

export type PageTemplate = OneColumnTemplate | TwoColumnTemplate;

export class OneColumnTemplate implements Template {
    __typename!: 'OneColumnTemplate';
    slots!: {
        main: SlotComponent[];
    };
}

export class TwoColumnTemplate implements Template {
    __typename!: 'TwoColumnTemplate';
    slots!: {
        top: SlotComponent[];
        left: SlotComponent[];
        right: SlotComponent[];
        bottom: SlotComponent[];
    };
}

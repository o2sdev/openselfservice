import { Models } from '@o2s/framework/modules';

/** CMS page with template, SEO and optional parent hierarchy. */
export class Page {
    id!: string;
    slug!: string;
    locale!: string;
    template!: PageTemplate;
    createdAt!: string;
    updatedAt!: string;
    seo!: Models.SEO.Page;
    hasOwnTitle!: boolean;
    parent?: {
        slug: string;
        seo: Pick<Models.SEO.Page, 'title'>;
        parent?: {
            slug: string;
            seo: Pick<Models.SEO.Page, 'title'>;
            parent?: {
                slug: string;
                seo: Pick<Models.SEO.Page, 'title'>;
            };
        };
    };
    /** Role-based access control (e.g., ['ORG_USER', 'ORG_ADMIN']) */
    roles?: string[];
    theme?: string;
    redirect?: string;
}

/** Base template contract used by CMS page layouts. */
export abstract class Template {
    slots!: {
        [key: string]: SlotBlock[];
    };
}

/** Block entry rendered inside a template slot. */
export class SlotBlock {
    __typename!: string;
    layout?: LayoutSection;
    id!: string;
}

/** Supported page template variants. */
export type PageTemplate = OneColumnTemplate | TwoColumnTemplate;

/** One-column template variant. */
export class OneColumnTemplate implements Template {
    __typename!: 'OneColumnTemplate';
    slots!: {
        main: SlotBlock[];
    };
}

/** Two-column template variant with top, left, right and bottom slot regions. */
export class TwoColumnTemplate implements Template {
    __typename!: 'TwoColumnTemplate';
    slots!: {
        top: SlotBlock[];
        left: SlotBlock[];
        right: SlotBlock[];
        bottom: SlotBlock[];
    };
}

/** Optional per-block layout section configuration. */
export class LayoutSection {
    spacing?: 'none' | 'small' | 'medium' | 'large';
    background?: 'none' | 'light' | 'dark' | 'brand';
    variant?: 'narrow' | 'full' | 'wide';
    theme?: string;
}

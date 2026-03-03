import { Block, Link, RichText } from '@/utils/models';

/** CMS block configuration for FAQ section. */
export class FaqBlock extends Block.Block<Meta> {
    title?: string;
    subtitle?: string;
    items?: FaqItem[];
    banner?: FaqBoxWithButton;
}

/** Single FAQ item entry. */
export class FaqItem {
    title!: string;
    content!: RichText.RichText;
}

/** Optional FAQ banner with CTA button. */
export class FaqBoxWithButton {
    title?: string;
    description?: RichText.RichText;
    button?: Link.Link;
}

/** CMS metadata map for FAQ block editor fields. */
export class Meta {
    __id!: string;
    title!: string;
    subtitle!: string;
    items?: {
        __id: string;
        title: string;
        content: string;
    }[];
    banner?: {
        __id: string;
        title: string;
        description: string;
        button: string;
    };
}

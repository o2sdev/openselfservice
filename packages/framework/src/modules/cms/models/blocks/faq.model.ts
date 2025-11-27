import { Block, Link, RichText } from '@/utils/models';

export class FaqBlock extends Block.Block<Meta> {
    title?: string;
    subtitle?: string;
    items?: FaqItem[];
    banner?: FaqBoxWithButton;
}

export class FaqItem {
    title!: string;
    content!: RichText.RichText;
}

export class FaqBoxWithButton {
    title?: string;
    description?: RichText.RichText;
    button?: Link.Link;
}

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

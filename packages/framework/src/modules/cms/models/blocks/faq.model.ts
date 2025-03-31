import { Block, Link, RichText } from '@/utils/models';

export class FaqBlock extends Block.Block {
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

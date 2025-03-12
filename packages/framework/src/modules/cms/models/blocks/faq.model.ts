import { Block, Link, RichText } from '@/utils/models';

export class FaqBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    items?: FaqItem[];
    banner?: FaqBoxWithButtons;
}

export class FaqItem {
    title!: string;
    content!: RichText.RichText;
}

export class FaqBoxWithButtons {
    title?: string;
    description?: RichText.RichText;
    buttons?: Link.Link[];
}

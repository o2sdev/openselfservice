import { Block, Link, Media } from '@/utils/models';

export class QuickLinksBlock extends Block.Block {
    title?: string;
    description?: string;
    items!: QuickLink[];
}

export class QuickLink extends Link.Link {
    icon?: Media.Media;
}

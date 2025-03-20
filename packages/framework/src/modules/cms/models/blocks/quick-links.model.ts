import { Block, Link, Media } from '@/utils/models';

export class QuickLinksBlock extends Block.Block {
    title?: string;
    description?: string;
    links!: QuickLink[];
}

export class QuickLink extends Link.Link {
    icon?: Media.Media;
}

import { Block, Link } from '@/utils/models';

export class QuickLinksBlock extends Block.Block {
    title?: string;
    description?: string;
    items!: Link.Link[];
}

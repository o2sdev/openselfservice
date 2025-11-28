import { Block, Link, Media } from '@/utils/models';

export class BentoGridBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: string;
    items?: Card[];
}

export class Card {
    title?: string;
    description?: string;
    image?: Media.Media;
    link?: Link.Link;
}

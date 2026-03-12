import { Block, Link, Media } from '@/utils/models';

/** CMS block configuration for bento-style card grid section. */
export class BentoGridBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: string;
    items?: Card[];
}

/** Single card item rendered inside bento grid block. */
export class Card {
    title?: string;
    description?: string;
    image?: Media.Media;
    link?: Link.Link;
}

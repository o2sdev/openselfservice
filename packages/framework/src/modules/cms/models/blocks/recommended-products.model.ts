import { Block } from '@/utils/models';

export type Labels = {
    title?: string;
    detailsLabel?: string;
};

export class RecommendedProductsBlock extends Block.Block {
    labels!: Labels;
}

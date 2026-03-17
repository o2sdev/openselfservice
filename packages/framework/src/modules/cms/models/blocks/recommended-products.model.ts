import { Block } from '@/utils/models';

export type Labels = {
    title?: string;
    detailsLabel?: string;
    addToCartLabel?: string;
    addToCartSuccess?: string;
    addToCartError?: string;
    viewCartLabel?: string;
};

export class RecommendedProductsBlock extends Block.Block {
    basePath?: string;
    cartPath?: string;
    labels!: Labels;
}

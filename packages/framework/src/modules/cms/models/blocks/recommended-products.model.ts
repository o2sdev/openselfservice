import { Block } from '@/utils/models';

export type Labels = {
    title?: string;
    detailsLabel?: string;
    addToCartLabel?: string;
    addToCartSuccess?: string;
    addToCartError?: string;
};

export class RecommendedProductsBlock extends Block.Block {
    basePath?: string;
    labels!: Labels;
}

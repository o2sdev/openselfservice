import { Block } from '@/utils/models';

/** Labels used in recommended products block. */
export type Labels = {
    title?: string;
    detailsLabel?: string;
};

/** CMS block configuration for recommended products section. */
export class RecommendedProductsBlock extends Block.Block {
    basePath?: string;
    labels!: Labels;
}

import { Block } from '@/utils/models';

export type Labels = {
    actionButtonLabel?: string;
    downloadLabel?: string;
    specificationsTitle: string;
    descriptionTitle: string;
    priceLabel: string;
    offerLabel: string;
    variantLabel?: string;
};

export class ProductDetailsBlock extends Block.Block {
    title?: string;
    labels!: Labels;
}

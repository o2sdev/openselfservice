import { Block } from '@/utils/models';

export type Labels = {
    actionButtonLabel?: string;
    downloadLabel?: string;
    recommendedOffersTitle?: string;
    specificationsTitle: string;
    descriptionTitle: string;
    priceLabel: string;
    offerLabel: string;
};

export class ProductDetailsBlock extends Block.Block {
    title?: string;
    labels!: Labels;
}

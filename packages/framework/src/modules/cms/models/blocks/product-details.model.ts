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

export type SpecFieldConfig = {
    label: string;
    showInKeySpecs?: boolean;
    icon?: string;
};

export type VariantOptionGroupConfig = {
    /**
     * Title of the option group in Medusa (e.g. "Size", "colors").
     * Used to match Medusa option groups and control ordering.
     */
    medusaTitle: string;
    /**
     * Translated label to display in the UI (e.g. "Rozmiar", "Kolor").
     */
    label: string;
};

export class ProductDetailsBlock extends Block.Block {
    title?: string;
    labels!: Labels;
    basePath?: string;
    specFieldsMapping?: Record<string, SpecFieldConfig>;
    /**
     * Configuration of variant option groups (e.g. Size, Color) in desired order.
     */
    variantOptionGroups?: VariantOptionGroupConfig[];
}

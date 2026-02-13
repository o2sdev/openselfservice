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

export type AttributeConfig = {
    /**
     * Key of the attribute in the product attributes object (e.g. "weight", "origin_country").
     * This matches the field name from the integration (Medusa, etc.).
     */
    key: string;
    /**
     * Display label for the attribute (e.g. "Weight (kg)", "Country of Origin").
     */
    label: string;
    /**
     * Whether to show this attribute in the key specs section (quick overview).
     */
    showInKeySpecs?: boolean;
    /**
     * Icon to display next to the attribute in key specs (e.g. "Weight", "Ruler").
     */
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
    /**
     * Configuration of product attributes to display.
     * The block will filter and format product.attributes based on this configuration.
     */
    attributes?: AttributeConfig[];
    /**
     * Configuration of variant option groups (e.g. Size, Color) in desired order.
     */
    variantOptionGroups?: VariantOptionGroupConfig[];
}

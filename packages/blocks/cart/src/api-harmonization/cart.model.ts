import { Models } from '@o2s/framework/modules';

/**
 * CartBlock
 *
 * Minimal model for the cart block.
 * TODO: Replace this placeholder with a proper model once the real cart and product
 *       domain models are available in the integrations layer.
 */
export class CartBlock extends Models.Block.Block {
    __typename!: 'CartBlock';
    title!: string;
    subtitle?: string;
    /**
     * Labels and configuration used by the cart UI.
     * These fields should be aligned with a real CMS model in the future.
     */
    // TODO: Replace `any`-like structures with dedicated interfaces.
    labels!: {
        itemTotal: string;
    };
    summary!: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
    };
    empty!: {
        title: string;
        description: string;
        continueShopping?: {
            label: string;
            path: string;
        };
    };
}

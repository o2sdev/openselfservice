import { defineRouting } from 'next-intl/routing';

export interface CartProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    /**
     * Optional currency code used for cart price display.
     * Defaults to "PLN" in the client component if not provided.
     */
    currency?: string;
    /**
     * Optional presentation data for the cart block.
     * These mirror the minimal fields used in the client component.
     * TODO: Align with the real CartBlock model once it is defined.
     */
    title?: string;
    subtitle?: string;
    summary?: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
    };
    empty?: {
        title: string;
        description?: string;
    };
}

// For now the cart block does not receive full CartBlock data from the API layer.
// We keep the props minimal and focused on routing/context.
export type CartPureProps = CartProps;

export type CartRendererProps = CartProps & {
    slug: string[];
};

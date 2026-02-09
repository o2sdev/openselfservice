import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/cart-summary.client';

export interface CartSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CartSummaryPureProps = CartSummaryProps & Model.CartSummaryBlock;

export type CartSummaryRendererProps = Omit<CartSummaryProps, ''> & {
    slug: string[];
};

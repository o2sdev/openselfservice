import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/cart.client';

export interface CartProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CartPureProps = CartProps & Model.CartBlock;

export type CartRendererProps = Omit<CartProps, ''> & {
    slug: string[];
};

import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/cart.client';

export interface CartProps {
    /** True when Next.js draft mode is on (CMS preview). */
    isDraftModeEnabled?: boolean;
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type CartPureProps = CartProps & Model.CartBlock;

export type CartRendererProps = Omit<CartProps, 'locale'> & {
    slug: string[];
};

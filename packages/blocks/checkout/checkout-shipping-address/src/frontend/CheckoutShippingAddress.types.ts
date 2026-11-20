import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-shipping-address.client';

export interface CheckoutShippingAddressProps {
    /** True when Next.js draft mode is on (CMS preview). */
    isDraftModeEnabled?: boolean;
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CheckoutShippingAddressPureProps = CheckoutShippingAddressProps & Model.CheckoutShippingAddressBlock;

export type CheckoutShippingAddressRendererProps = Omit<CheckoutShippingAddressProps, ''> & {
    slug: string[];
};

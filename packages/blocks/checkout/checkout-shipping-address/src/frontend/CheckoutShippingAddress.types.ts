import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-shipping-address.client';

export interface CheckoutShippingAddressProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CheckoutShippingAddressPureProps = CheckoutShippingAddressProps & Model.CheckoutShippingAddressBlock;

export type CheckoutShippingAddressRendererProps = Omit<CheckoutShippingAddressProps, ''> & {
    slug: string[];
};

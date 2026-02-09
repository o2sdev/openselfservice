import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-company-data.client';

export interface CheckoutCompanyDataProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CheckoutCompanyDataPureProps = CheckoutCompanyDataProps & Model.CheckoutCompanyDataBlock;

export type CheckoutCompanyDataRendererProps = Omit<CheckoutCompanyDataProps, ''> & {
    slug: string[];
};

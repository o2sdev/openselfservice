import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-company-data.client';

export interface CheckoutCompanyDataProps {
    /** True when Next.js draft mode is on (CMS preview). */
    isDraftModeEnabled?: boolean;
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CheckoutCompanyDataPureProps = CheckoutCompanyDataProps & Model.CheckoutCompanyDataBlock;

export type CheckoutCompanyDataRendererProps = Omit<CheckoutCompanyDataProps, ''> & {
    slug: string[];
};

import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/kpis.client';

export interface KpisProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type KpisPureProps = KpisProps & Model.KpisBlock;

export type KpisRendererProps = Omit<KpisProps, ''> & {
    slug: string[];
};

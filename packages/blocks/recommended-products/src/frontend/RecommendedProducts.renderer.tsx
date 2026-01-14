import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { RecommendedProducts } from './RecommendedProducts.server';
import { RecommendedProductsRendererProps } from './RecommendedProducts.types';

export const RecommendedProductsRenderer: React.FC<RecommendedProductsRendererProps> = ({
    id,
    excludeProductId,
    routing,
    locale: propLocale,
}) => {
    const localeFromHook = useLocale();
    const locale = propLocale || localeFromHook;

    return (
        <Suspense
            key={id}
            fallback={
                <Container variant="full">
                    <Loading bars={10} />
                </Container>
            }
        >
            <RecommendedProducts id={id} excludeProductId={excludeProductId} locale={locale} routing={routing} />
        </Suspense>
    );
};

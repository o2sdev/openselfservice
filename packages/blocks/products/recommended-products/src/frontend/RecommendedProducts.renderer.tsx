import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/feedback/Loading';
import { Container } from '@o2s/ui/components/layout/Container';

import { RecommendedProducts } from './RecommendedProducts.server';
import { RecommendedProductsRendererProps } from './RecommendedProducts.types';

export const RecommendedProductsRenderer: React.FC<RecommendedProductsRendererProps> = ({
    id,
    excludeProductId,
    accessToken,
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
            <RecommendedProducts
                id={id}
                excludeProductId={excludeProductId}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
            />
        </Suspense>
    );
};

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { RecommendedProducts } from './RecommendedProducts.server';
import { RecommendedProductsRendererProps } from './RecommendedProducts.types';

export const RecommendedProductsRenderer: React.FC<RecommendedProductsRendererProps> = ({
    id,
    slug,
    excludeProductId,
    limit,
    routing,
    locale: propLocale,
}) => {
    const localeFromHook = useLocale();
    const locale = propLocale || localeFromHook;

    // Extract productId from slug if not provided explicitly
    const productIdToExclude = excludeProductId || slug[1];

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={8} />
                    </Container>
                </>
            }
        >
            <RecommendedProducts
                id={id}
                excludeProductId={productIdToExclude}
                limit={limit}
                locale={locale}
                routing={routing}
            />
        </Suspense>
    );
};

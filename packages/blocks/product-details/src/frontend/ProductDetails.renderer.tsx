import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { ProductDetails } from './ProductDetails.server';
import { ProductDetailsRendererProps } from './ProductDetails.types';

export const ProductDetailsRenderer: React.FC<ProductDetailsRendererProps> = ({
    id,
    routing,
    locale: propLocale,
    hasPriority,
}) => {
    const localeFromHook = useLocale();
    const locale = propLocale || localeFromHook;

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
            <ProductDetails id={id} locale={locale} routing={routing} hasPriority={hasPriority} />
        </Suspense>
    );
};

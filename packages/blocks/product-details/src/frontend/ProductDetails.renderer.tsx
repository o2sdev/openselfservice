import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { ProductDetails } from './ProductDetails.server';
import { ProductDetailsRendererProps } from './ProductDetails.types';

export const ProductDetailsRenderer: React.FC<ProductDetailsRendererProps> = ({
    id,
    slug,
    routing,
    locale: propLocale,
    hasPriority,
}) => {
    const localeFromHook = useLocale();
    const locale = propLocale || localeFromHook;

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-8 md:gap-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <Loading bars={[30, 30]} />
                        </div>
                        <div className="hidden lg:block lg:col-span-1">
                            <div className="sticky top-6 flex flex-col gap-4">
                                <Loading bars={4} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
            <ProductDetails id={id} productId={slug[1]} locale={locale} routing={routing} hasPriority={hasPriority} />
        </Suspense>
    );
};

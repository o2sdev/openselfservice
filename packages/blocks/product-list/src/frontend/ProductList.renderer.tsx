import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { ProductList } from './ProductList.server';
import { ProductListRendererProps } from './ProductList.types';

export const ProductListRenderer: React.FC<ProductListRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-6">
                    <Loading bars={[30, 23]} />
                </div>
            }
        >
            <ProductList id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

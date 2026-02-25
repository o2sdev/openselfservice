import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Cart } from './Cart.server';
import { CartRendererProps } from './Cart.types';

export const CartRenderer: React.FC<CartRendererProps> = ({ id, accessToken, routing, hasPriority = false }) => {
    const locale = useLocale();

    return (
        <Suspense key={id}>
            <Cart id={id} accessToken={accessToken} locale={locale} routing={routing} hasPriority={hasPriority} />
        </Suspense>
    );
};

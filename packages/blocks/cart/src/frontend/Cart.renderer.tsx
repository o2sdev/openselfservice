import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { Cart } from './Cart.server';
import { CartRendererProps } from './Cart.types';

export const CartRenderer: React.FC<CartRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

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
            <Cart id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

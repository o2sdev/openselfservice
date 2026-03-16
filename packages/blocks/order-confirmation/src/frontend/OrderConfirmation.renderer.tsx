import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { OrderConfirmation } from './OrderConfirmation.server';
import { OrderConfirmationRendererProps } from './OrderConfirmation.types';

export const OrderConfirmationRenderer: React.FC<OrderConfirmationRendererProps> = ({
    slug,
    id,
    accessToken,
    routing,
}) => {
    const locale = useLocale();
    const orderId = slug?.[slug.length - 1] ?? slug?.[1];

    if (!orderId) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-8">
                    <Container variant="narrow">
                        <Loading bars={1} />
                    </Container>
                    <Container variant="narrow">
                        <Loading bars={8} />
                    </Container>
                </div>
            }
        >
            <OrderConfirmation id={id} orderId={orderId} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

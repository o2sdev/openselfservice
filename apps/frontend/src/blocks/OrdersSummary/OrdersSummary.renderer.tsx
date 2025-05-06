import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { OrdersSummary } from './OrdersSummary.server';

export interface OrdersSummaryRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const OrdersSummaryRenderer: React.FC<OrdersSummaryRendererProps> = ({ id, accessToken }) => {
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
            <OrdersSummary id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

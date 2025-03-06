import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { Faq } from './Faq.server';

export interface FaqRendererProps {
    id: string;
    accessToken: string;
}

export const FaqRenderer: React.FC<FaqRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <Container variant="narrow">
                    <Loading bars={[13, 14]} />
                </Container>
            }
        >
            <Faq id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

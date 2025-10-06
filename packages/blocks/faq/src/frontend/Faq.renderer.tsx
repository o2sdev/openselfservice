import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { Faq } from './Faq.server';
import { FaqRendererProps } from './Faq.types';

export const FaqRenderer: React.FC<FaqRendererProps> = ({ id, accessToken, routing, hasPriority }) => {
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
            <Faq id={id} accessToken={accessToken} locale={locale} routing={routing} hasPriority={hasPriority} />
        </Suspense>
    );
};

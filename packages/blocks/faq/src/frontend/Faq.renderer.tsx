import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { Faq } from './Faq.server';
import { FaqProps } from './Faq.types';

export const FaqRenderer: React.FC<FaqProps> = ({ id, accessToken, sdk, LinkComponent }) => {
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
            <Faq id={id} accessToken={accessToken} locale={locale} sdk={sdk} LinkComponent={LinkComponent} />
        </Suspense>
    );
};

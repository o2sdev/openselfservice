import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { Kpis } from './Kpis.server';
import { KpisRendererProps } from './Kpis.types';

export const KpisRenderer: React.FC<KpisRendererProps> = ({ id, accessToken, routing }) => {
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
            <Kpis id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

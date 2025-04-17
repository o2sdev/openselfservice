import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { QuickLinks } from './QuickLinks.server';

export interface QuickLinksRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const QuickLinksRenderer: React.FC<QuickLinksRendererProps> = ({ id, accessToken }) => {
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
            <QuickLinks id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

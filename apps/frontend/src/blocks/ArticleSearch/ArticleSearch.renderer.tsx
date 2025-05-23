import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { ArticleSearch } from './ArticleSearch.server';

export interface ArticleSearchRendererProps {
    slug: string[];
    id: string;
    accessToken?: string;
}

export const ArticleSearchRenderer: React.FC<ArticleSearchRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <Container variant="narrow">
                    <Loading bars={1} />
                </Container>
            }
        >
            <ArticleSearch id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

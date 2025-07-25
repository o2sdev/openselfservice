import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { ArticleSearch } from './ArticleSearch.server';
import { ArticleSearchRendererProps } from './ArticleSearch.types';

export const ArticleSearchRenderer: React.FC<ArticleSearchRendererProps> = ({ id, accessToken, routing }) => {
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
            <ArticleSearch id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

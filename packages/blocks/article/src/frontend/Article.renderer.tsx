import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { Article } from './Article.server';
import { ArticleRendererProps } from './Article.types';

export const ArticleRenderer: React.FC<ArticleRendererProps> = ({ id, slug, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={20} />
                    </Container>
                </>
            }
        >
            <Article id={id} slug={`/${slug.join('/')}`} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { Article } from './Article.server';

export interface ArticleRendererProps {
    slug: string[];
    id: string;
    accessToken?: string;
}

export const ArticleRenderer: React.FC<ArticleRendererProps> = ({ id, slug, accessToken }) => {
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
            <Article slug={`/${slug.join('/')}`} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

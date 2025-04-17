import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { ArticleList } from './ArticleList.server';

export interface ArticleListRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const ArticleListRenderer: React.FC<ArticleListRendererProps> = ({ id, accessToken }) => {
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
            <ArticleList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

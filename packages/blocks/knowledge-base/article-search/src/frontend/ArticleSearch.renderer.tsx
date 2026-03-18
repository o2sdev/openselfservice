import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Feedback/Loading';
import { Container } from '@o2s/ui/components/Layout/Container';

import { ArticleSearch } from './ArticleSearch.server';
import { ArticleSearchRendererProps } from './ArticleSearch.types';

export const ArticleSearchRenderer: React.FC<ArticleSearchRendererProps> = ({
    id,
    accessToken,
    routing,
    hasPriority,
}) => {
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
            <ArticleSearch
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

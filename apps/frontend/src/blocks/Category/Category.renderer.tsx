import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { Category } from './Category.server';

export interface CategoryRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const CategoryRenderer: React.FC<CategoryRendererProps> = ({ slug, id, accessToken }) => {
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
            <Category id={id} slug={slug} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

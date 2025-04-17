import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { CategoryList } from './CategoryList.server';

export interface CategoryListRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const CategoryListRenderer: React.FC<CategoryListRendererProps> = ({ id, accessToken }) => {
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
            <CategoryList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

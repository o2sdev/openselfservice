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
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full">
                        <Loading bars={0} />
                    </div>
                    <Container variant="narrow">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <li>
                                <Loading bars={12} />
                            </li>
                            <li>
                                <Loading bars={12} />
                            </li>
                        </ul>
                    </Container>
                </div>
            }
        >
            <Category id={id} slug={slug} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

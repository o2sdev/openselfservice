import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

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
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full">
                        <Loading bars={0} />
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                        <li>
                            <Loading bars={4} />
                        </li>
                        <li>
                            <Loading bars={4} />
                        </li>
                        <li>
                            <Loading bars={4} />
                        </li>
                    </ul>
                </div>
            }
        >
            <CategoryList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

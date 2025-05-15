import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

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
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full">
                        <Loading bars={0} />
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                        <li>
                            <Loading bars={9} />
                        </li>
                        <li>
                            <Loading bars={9} />
                        </li>
                        <li>
                            <Loading bars={9} />
                        </li>
                        <li>
                            <Loading bars={9} />
                        </li>
                    </ul>
                </div>
            }
        >
            <ArticleList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

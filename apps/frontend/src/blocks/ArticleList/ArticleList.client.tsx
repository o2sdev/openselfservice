import React from 'react';

import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { ArticlesSection } from '@/components/ArticlesSection/ArticlesSection';
import { InformativeCard } from '@/components/InformativeCard/InformativeCard';

import { ArticleListPureProps } from './ArticleList.types';

export const ArticleListPure: React.FC<ArticleListPureProps> = ({ ...component }) => {
    return (
        <>
            <ArticlesSection title={component.title} description={component.description}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                    {component.items.data.map((item) => (
                        <li key={item.id} className="w-full">
                            <InformativeCard title={item.title} description={item.lead} href={item.slug} />
                        </li>
                    ))}
                </ul>
            </ArticlesSection>
        </>
    );
};

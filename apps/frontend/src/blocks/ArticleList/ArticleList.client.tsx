import React from 'react';

import { ArticlesSection } from '@/components/ArticlesSection/ArticlesSection';
import { BlogCard } from '@/components/BlogCard/BlogCard';

import { ArticleListPureProps } from './ArticleList.types';

export const ArticleListPure: React.FC<Readonly<ArticleListPureProps>> = ({ ...component }) => {
    return (
        <ArticlesSection title={component.title} description={component.description}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {component.items.data.map((item) => (
                    <li key={item.id} className="w-full">
                        <BlogCard
                            title={item.title}
                            lead={item.lead}
                            image={item.image}
                            url={item.slug}
                            date={item.createdAt}
                            author={item.author}
                            categoryTitle={item.category.title}
                        />
                    </li>
                ))}
            </ul>
        </ArticlesSection>
    );
};

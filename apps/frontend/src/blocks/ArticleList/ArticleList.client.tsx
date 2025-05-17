import React from 'react';

import { BlogCard } from '@/components/Cards/BlogCard/BlogCard';
import { ContentSection } from '@/components/ContentSection/ContentSection';

import { ArticleListPureProps } from './ArticleList.types';

export const ArticleListPure: React.FC<Readonly<ArticleListPureProps>> = ({ ...component }) => {
    return (
        <ContentSection title={component.title} description={component.description}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {component.items.data.map((item) => (
                    <li key={item.id} className="w-full">
                        <BlogCard
                            title={item.title}
                            lead={item.lead}
                            image={item.image}
                            url={item.slug}
                            date={item.createdAt}
                            author={
                                item.author
                                    ? {
                                          name: item.author.name,
                                          position: item.author.position,
                                          avatar: item.author.avatar?.url,
                                      }
                                    : undefined
                            }
                            categoryTitle={item.category?.title}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};

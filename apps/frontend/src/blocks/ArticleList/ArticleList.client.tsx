import React from 'react';

import { BlogCard } from '@o2s/ui/components/Cards/BlogCard';
import { ContentSection } from '@o2s/ui/components/ContentSection';

import { Link } from '@/i18n';

import { ArticleListPureProps } from './ArticleList.types';

export const ArticleListPure: React.FC<Readonly<ArticleListPureProps>> = ({ ...component }) => {
    return (
        <ContentSection
            title={component.title}
            description={component.description}
            categoryLink={component.categoryLink}
            LinkComponent={Link}
        >
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
                            LinkComponent={Link}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};

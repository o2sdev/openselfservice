'use client';

import { LivePreview } from '@o2s/configs.integrations/live-preview';
import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { BlogCard } from '@o2s/ui/components/Cards/BlogCard';
import { ContentSection } from '@o2s/ui/components/ContentSection';

import { ArticleListPureProps } from './ArticleList.types';

export const ArticleListPure = ({ routing, hasPriority, meta, ...component }: Readonly<ArticleListPureProps>) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const inspector = LivePreview.useInspector();

    return (
        <ContentSection
            title={component.title}
            description={component.description}
            categoryLink={component.categoryLink}
            LinkComponent={LinkComponent}
            meta={meta}
        >
            <ul
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
                {...inspector(meta, 'articles')}
            >
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
                            LinkComponent={LinkComponent}
                            priority={hasPriority}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};

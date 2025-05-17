'use client';

import { Blocks } from '@o2s/api-harmonization';
import React, { useState, useTransition } from 'react';

import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { BlogCard } from '@/components/Cards/BlogCard/BlogCard';
import { Container } from '@/components/Container/Container';
import { ContentSection } from '@/components/ContentSection/ContentSection';
import { DynamicIcon } from '@/components/DynamicIcon/DynamicIcon';
import { Pagination } from '@/components/Pagination/Pagination';

import { CategoryPureProps } from './Category.types';

export const CategoryPure: React.FC<CategoryPureProps> = ({ slug, locale, accessToken, blocks, ...component }) => {
    const initialArticles: Blocks.Category.Request.GetCategoryBlockArticlesQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 6,
    };

    const initialData = component.articles.items.data;
    const [data, setData] = useState<Blocks.Category.Model.CategoryArticles>(component.articles);
    const [articles, setArticles] = useState(initialArticles);
    const [isPending, startTransition] = useTransition();

    const handlePagination = (data: Partial<Blocks.Category.Request.GetCategoryBlockArticlesQuery>) => {
        startTransition(async () => {
            const newArticles = { ...articles, ...data };
            const newData = await sdk.blocks.getCategoryArticles(newArticles, { 'x-locale': locale }, accessToken);

            setArticles(newArticles);
            setData(newData);
        });
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <Container variant="narrow">
                <div className="flex gap-6 items-start px-4 md:px-0">
                    {component.icon && (
                        <div className="flex max-w-12 max-h-12 p-2 rounded-md items-center justify-center bg-card border border-border">
                            <DynamicIcon name={component.icon} />
                        </div>
                    )}
                    <Typography>{component.description}</Typography>
                </div>
            </Container>
            <Separator orientation="horizontal" className="shrink-[1]" />
            <div className="flex flex-col gap-12">
                {component.componentsPosition === 'top' && blocks}

                {initialData.length > 0 && (
                    <Container variant="narrow">
                        <div className="flex flex-col gap-6">
                            <LoadingOverlay isActive={isPending}>
                                <ContentSection
                                    title={component.articles.title}
                                    description={component.articles.description}
                                >
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                        {data.items.data.map((item) => (
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
                            </LoadingOverlay>
                            {component.pagination && (
                                <Pagination
                                    disabled={false}
                                    offset={articles.offset || 0}
                                    total={component.articles.items.total}
                                    limit={component.pagination.limit}
                                    legend={component.pagination.legend}
                                    prev={component.pagination.prev}
                                    next={component.pagination.next}
                                    selectPage={component.pagination.selectPage}
                                    onChange={(page) => {
                                        handlePagination({
                                            ...articles,
                                            offset: component.pagination!.limit * (page - 1),
                                        });
                                    }}
                                />
                            )}
                        </div>
                    </Container>
                )}

                {component.componentsPosition === 'bottom' && blocks}
            </div>
        </div>
    );
};

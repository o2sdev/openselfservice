'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useState, useTransition } from 'react';

import { toast } from '@o2s/ui/hooks/use-toast';

import { BlogCard } from '@o2s/ui/components/Cards/BlogCard';
import { Container } from '@o2s/ui/components/Container';
import { ContentSection } from '@o2s/ui/components/ContentSection';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Pagination } from '@o2s/ui/components/Pagination';

import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { Model, Request } from '../api-harmonization/category.client';
import { sdk } from '../sdk';

import { CategoryPureProps } from './Category.types';

export const CategoryPure: React.FC<CategoryPureProps> = ({
    slug,
    locale,
    accessToken,
    routing,
    blocks,
    hasPriority,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const initialArticles: Request.GetCategoryBlockArticlesQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 6,
    };

    const initialData = component.articles.items.data;
    const [data, setData] = useState<Model.CategoryArticles>(component.articles);
    const [articles, setArticles] = useState(initialArticles);
    const [isPending, startTransition] = useTransition();

    const handlePagination = (data: Partial<Request.GetCategoryBlockArticlesQuery>) => {
        startTransition(async () => {
            try {
                const newArticles = { ...articles, ...data };
                const newData = await sdk.blocks.getCategoryArticles(newArticles, { 'x-locale': locale }, accessToken);

                setArticles(newArticles);
                setData(newData);
            } catch (_error) {
                toast({
                    variant: 'destructive',
                    title: 'Unable to load category articles',
                    description: 'Start the api-harmonization service and refresh Storybook.',
                });
            }
        });
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <Container variant="narrow" spacing="none">
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
                                    LinkComponent={LinkComponent}
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
                                                    LinkComponent={LinkComponent}
                                                    priority={hasPriority}
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

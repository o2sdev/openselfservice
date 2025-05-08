// 'use client';
import React from 'react';

import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { ArticlesSection } from '@/components/ArticlesSection/ArticlesSection';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { Container } from '@/components/Container/Container';
import { Image } from '@/components/Image/Image';
import { Pagination } from '@/components/Pagination/Pagination';

import { CategoryPureProps } from './Category.types';

const { renderBlocks } = await import('@/blocks/renderBlocks');

export const CategoryPure: React.FC<CategoryPureProps> = ({ slug, locale, accessToken, ...component }) => {
    return (
        <div className="w-full flex flex-col gap-6">
            <Container variant="narrow">
                <div className="flex gap-6 items-start px-4 md:px-0">
                    {component.icon && (
                        <div className="flex max-w-12 max-h-12 p-2 rounded-md items-center justify-center bg-card border border-border">
                            <Image
                                src={component.icon.url}
                                alt={component.icon.alt}
                                width="24"
                                height="24"
                                className="max-w-6 max-h-6"
                            />
                        </div>
                    )}
                    <Typography>{component.description}</Typography>
                </div>
            </Container>
            <Separator orientation="horizontal" className="shrink-[1]" />
            <div className="flex flex-col gap-12">
                {component.components && <div>{renderBlocks(component.components, slug, accessToken)}</div>}

                <Container variant="narrow">
                    <ArticlesSection title={component.articles.title} description={component.articles.description}>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            {component.articles.items.data.map((item) => (
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
                    {component.pagination && (
                        <Pagination
                            disabled={false}
                            offset={0}
                            total={component.articles.items.total}
                            limit={component.pagination.limit}
                            legend={component.pagination.legend}
                            prev={component.pagination.prev}
                            next={component.pagination.next}
                            selectPage={component.pagination.selectPage}
                            onChange={(page) => console.log(page)}
                        />
                    )}
                </Container>
            </div>
        </div>
    );
};

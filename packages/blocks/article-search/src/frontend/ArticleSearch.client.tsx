'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useState, useTransition } from 'react';
import { debounce } from 'throttle-debounce';

import { toast } from '@o2s/ui/hooks/use-toast';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { Autocomplete } from '@o2s/ui/components/Autocomplete';
import { Container } from '@o2s/ui/components/Container';

import { Typography } from '@o2s/ui/elements/typography';

import type { Model } from '../api-harmonization/article-search.client';
import { sdk } from '../sdk';

import { ArticleSearchPureProps } from './ArticleSearch.types';

export const ArticleSearchPure: React.FC<ArticleSearchPureProps> = ({
    title,
    inputLabel,
    noResults,
    category,
    accessToken,
    locale,
    routing,
}) => {
    const { useRouter } = createNavigation(routing);
    const router = useRouter();
    const { labels } = useGlobalContext();

    const [suggestions, setSuggestions] = useState<Model.ArticleList['articles']>([]);
    const [isPending, startTransition] = useTransition();

    const getSuggestions = debounce(300, async (value: string) => {
        startTransition(async () => {
            try {
                const result = await sdk.blocks.searchArticles(
                    { query: value, limit: 5, offset: 0, category },
                    { 'x-locale': locale },
                    accessToken,
                );
                if (result.articles) {
                    setSuggestions(result.articles);
                } else {
                    setSuggestions([]);
                }
            } catch (_error) {
                toast({
                    variant: 'destructive',
                    title: labels.errors.requestError.title,
                    description: labels.errors.requestError.content,
                    duration: 60000,
                });
                setSuggestions([]);
            }
        });
    });

    return (
        <Container variant="narrow">
            <div className="w-full flex flex-col gap-6">
                {title && (
                    <Typography variant="h2" asChild className="text-center">
                        <h2>{title}</h2>
                    </Typography>
                )}
                <Autocomplete
                    suggestions={suggestions}
                    labelHidden={true}
                    placeholder={inputLabel}
                    label={inputLabel}
                    emptyMessage={noResults.title}
                    minLength={3}
                    onValueChange={getSuggestions}
                    onSelected={(suggestion) => {
                        router.push(suggestion.url);
                    }}
                    onRenderSuggestion={(suggestion) => suggestion.label}
                    getSuggestionValue={(suggestion) => suggestion.label}
                    isLoading={isPending}
                />
            </div>
        </Container>
    );
};

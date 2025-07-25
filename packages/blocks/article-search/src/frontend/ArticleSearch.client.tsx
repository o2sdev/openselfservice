'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useState, useTransition } from 'react';
import { debounce } from 'throttle-debounce';

import { Autocomplete } from '@o2s/ui/components/Autocomplete';
import { Container } from '@o2s/ui/components/Container';

import { Typography } from '@o2s/ui/elements/typography';

import { Model } from '../api-harmonization/article-search.client';
import { sdk } from '../sdk';

import { ArticleSearchPureProps } from './ArticleSearch.types';

export const ArticleSearchPure: React.FC<ArticleSearchPureProps> = ({
    title,
    inputLabel,
    noResults,
    accessToken,
    locale,
    routing,
}) => {
    const { useRouter } = createNavigation(routing);
    const router = useRouter();

    const [suggestions, setSuggestions] = useState<Model.ArticleList['articles']>([]);
    const [isPending, startTransition] = useTransition();

    const getSuggestions = debounce(300, async (value: string) => {
        startTransition(async () => {
            const result = await sdk.blocks.searchArticles(
                { query: value, limit: 5, offset: 0 },
                { 'x-locale': locale },
                accessToken,
            );
            if (result.articles) setSuggestions(result.articles);
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

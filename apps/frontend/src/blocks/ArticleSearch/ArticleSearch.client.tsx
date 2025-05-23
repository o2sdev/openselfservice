'use client';

import React, { useCallback, useState, useTransition } from 'react';
import { debounce } from 'throttle-debounce';

import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { useRouter } from '@/i18n';

import { Autocomplete } from '@/components/Autocomplete/Autocomplete';
import { Suggestion } from '@/components/Autocomplete/Autocomplete.types';
import { Container } from '@/components/Container/Container';

import { ArticleSearchPureProps } from './ArticleSearch.types';

export const ArticleSearchPure: React.FC<ArticleSearchPureProps> = ({ ...component }) => {
    const { title, inputLabel, noResults, accessToken, locale } = component;

    const router = useRouter();

    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [isPending, startTransition] = useTransition();

    const getSuggestions = useCallback(
        debounce(300, async (value: string) => {
            startTransition(async () => {
                const result = await sdk.blocks.searchArticles(
                    { query: value, limit: 5, offset: 0 },
                    { 'x-locale': locale },
                    accessToken,
                );
                if (result.articles) setSuggestions(result.articles as Suggestion[]);
            });
        }),
        [accessToken, locale],
    );

    return (
        <Container variant="narrow">
            <div className="w-full flex flex-col gap-6">
                {title && (
                    <Typography variant="h2" asChild className="text-center">
                        <h2>{title}</h2>
                    </Typography>
                )}
                {inputLabel && (
                    <Autocomplete
                        suggestions={suggestions}
                        placeholder={inputLabel}
                        label={inputLabel}
                        emptyMessage={noResults.title}
                        minLength={3}
                        onValueChange={getSuggestions}
                        onSelected={(e) => {
                            router.push(e.value);
                        }}
                        isLoading={isPending}
                    />
                )}
            </div>
        </Container>
    );
};

'use client';

import React from 'react';

import { Typography } from '@o2s/ui/components/typography';

import { Autocomplete } from '@/components/Autocomplete/Autocomplete';
import { Container } from '@/components/Container/Container';

import { ArticleSearchPureProps } from './ArticleSearch.types';

export const ArticleSearchPure: React.FC<ArticleSearchPureProps> = ({ ...component }) => {
    const { title, label } = component;

    return (
        <Container variant="narrow">
            <div className="w-full flex flex-col gap-6">
                {title && (
                    <Typography variant="h2" asChild className="text-center">
                        <h2>{title}</h2>
                    </Typography>
                )}
                {label && (
                    <Autocomplete
                        id="autocomplete"
                        label=""
                        placeholder={label}
                        onChange={(e) => {
                            console.log('e', e);
                        }}
                        onSelectedSuggestion={(e) => {
                            console.log('e', e);
                        }}
                        getSuggestionValue={(e) => {
                            console.log('e', e);
                            return 'test';
                        }}
                        onSuggestionsFetchRequested={(e) => {
                            console.log('e', e);
                            return Promise.resolve([]);
                        }}
                        renderSuggestion={(e) => {
                            console.log('e', e);
                            return <div>test</div>;
                        }}
                    />
                )}
            </div>
        </Container>
    );
};

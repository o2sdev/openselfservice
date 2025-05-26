import React from 'react';

export type AutocompleteProps<Suggestion> = {
    label: string;
    labelHidden?: boolean;
    value?: Suggestion;
    placeholder?: string;
    suggestions: Suggestion[];
    emptyMessage: string;
    onValueChange?: (value: string) => void;
    onSelected?: (value: Suggestion) => void;
    onRenderSuggestion: (suggestion: Suggestion) => React.ReactNode;
    getSuggestionValue: (suggestion: Suggestion) => string;
    isLoading?: boolean;
    disabled?: boolean;
    minLength?: number;
};

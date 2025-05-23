export type Suggestion = Record<'value' | 'label', string> & Record<string, string>;

export type AutocompleteProps = {
    label: string;
    value?: Suggestion;
    placeholder?: string;
    suggestions: Suggestion[];
    emptyMessage: string;
    onValueChange?: (value: string) => void;
    onSelected?: (value: Suggestion) => void;
    isLoading?: boolean;
    disabled?: boolean;
    minLength?: number;
};

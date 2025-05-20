import { AriaAttributes, JSX, ReactNode } from 'react';

type inputType = Omit<JSX.IntrinsicElements['input'], 'ref' | 'onChange' | 'value'>;
//@TODO shouldn't we extend data-entry/Input.types instead of HTML input?
export interface AutocompleteProps<T> extends inputType {
    id: string;
    label: string | ReactNode;
    caption?: string;
    placeholder?: string;
    componentSize?: 'large' | 'medium' | 'small' | 'rwd';
    onSelectedSuggestion: (suggestion: T) => void;
    getSuggestionValue: (suggestion: T) => string;
    onSuggestionsFetchRequested: (value: string) => Promise<T[]>;
    renderSuggestion: (suggestion: T) => JSX.Element;
    onChange?: (value: string) => void;
    minLength?: number;
    disabled?: boolean;
    defaultValue?: string;
    throttleInterval?: number;
    autoClear?: boolean;
    required?: boolean;
    adornment?: boolean;
    customClass?: string;
    'aria-invalid'?: AriaAttributes['aria-invalid'];
}

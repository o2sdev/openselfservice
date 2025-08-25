'use client';

import { Command as CommandPrimitive } from 'cmdk';
import React, { type KeyboardEvent, useCallback, useRef, useState } from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { CommandGroup, CommandInput, CommandItem, CommandList } from '@o2s/ui/elements/command';
import { Label } from '@o2s/ui/elements/label';
import { Skeleton } from '@o2s/ui/elements/skeleton';

import { AutocompleteProps } from './Autocomplete.types';

export const Autocomplete = <Suggestion,>({
    suggestions,
    placeholder,
    emptyMessage,
    value,
    onValueChange,
    onSelected,
    onRenderSuggestion,
    getSuggestionValue,
    disabled,
    label,
    labelHidden = false,
    minLength = 3,
    isLoading = false,
}: AutocompleteProps<Suggestion>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState<Suggestion | undefined>(value);
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const input = inputRef.current;
            if (!input) {
                return;
            }

            // This is not a default behaviour of the <input /> field
            if (event.key === 'Enter' && input.value !== '') {
                const suggestionToSelect = suggestions.find(
                    (suggestion) => getSuggestionValue(suggestion) === input.value,
                );
                if (suggestionToSelect) {
                    setSelected(suggestionToSelect);
                    onSelected?.(suggestionToSelect);
                }
            }

            if (event.key === 'Escape') {
                input.blur();
            }
        },
        [getSuggestionValue, onSelected, suggestions],
    );

    const handleBlur = () => {
        setOpen(false);
        selected && setInputValue(getSuggestionValue(selected));
    };

    const handleSelectOption = (selectedSuggestion: Suggestion) => {
        setInputValue(getSuggestionValue(selectedSuggestion));

        setSelected(selectedSuggestion);
        onSelected?.(selectedSuggestion);

        // This is a hack to prevent the input from being focused after the user selects an option
        // We can call this hack: "The next tick"
        setTimeout(() => {
            inputRef?.current?.blur();
        }, 0);
    };

    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="autocomplete" className={cn(labelHidden && 'sr-only')}>
                {label}
            </Label>
            <CommandPrimitive
                onKeyDown={handleKeyDown}
                shouldFilter={false}
                className="border rounded-md focus-within:outline-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            >
                <div>
                    <CommandInput
                        ref={inputRef}
                        value={inputValue}
                        onValueChange={(e) => {
                            setInputValue(e);
                            if (e.length >= minLength) {
                                setOpen(true);
                                onValueChange?.(e);
                            }
                        }}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        disabled={disabled}
                        className="text-base text-muted-foreground"
                        id="autocomplete"
                    />
                </div>
                <div className="relative">
                    <div
                        className={cn(
                            'animate-in mt-2 fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-md bg-background outline-none',
                            isOpen ? 'block' : 'hidden',
                        )}
                    >
                        <CommandList className="rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                            {isLoading ? (
                                <CommandPrimitive.Loading>
                                    <div className="p-1">
                                        <Skeleton className="h-8 w-full" />
                                    </div>
                                </CommandPrimitive.Loading>
                            ) : null}
                            {suggestions.length > 0 && !isLoading ? (
                                <CommandGroup>
                                    {suggestions.map((suggestion) => {
                                        return (
                                            <CommandItem
                                                key={getSuggestionValue(suggestion)}
                                                value={getSuggestionValue(suggestion)}
                                                onMouseDown={(event) => {
                                                    event.preventDefault();
                                                    event.stopPropagation();
                                                }}
                                                onSelect={() => handleSelectOption(suggestion)}
                                                className={cn('flex w-full items-center gap-2 cursor-pointer')}
                                            >
                                                {onRenderSuggestion(suggestion)}
                                            </CommandItem>
                                        );
                                    })}
                                </CommandGroup>
                            ) : null}
                            {!isLoading ? (
                                <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                                    {emptyMessage}
                                </CommandPrimitive.Empty>
                            ) : null}
                        </CommandList>
                    </div>
                </div>
            </CommandPrimitive>
        </div>
    );
};

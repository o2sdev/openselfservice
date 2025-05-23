'use client';

import { Command as CommandPrimitive } from 'cmdk';
import { Check } from 'lucide-react';
import { type KeyboardEvent, useCallback, useRef, useState } from 'react';

import { CommandGroup, CommandInput, CommandItem, CommandList } from '@o2s/ui/components/command';
import { Label } from '@o2s/ui/components/label';
import { Skeleton } from '@o2s/ui/components/skeleton';
import { cn } from '@o2s/ui/lib/utils';

import { AutocompleteProps, Suggestion } from './Autocomplete.types';

export const Autocomplete = ({
    suggestions,
    placeholder,
    emptyMessage,
    value,
    onValueChange,
    onSelected,
    disabled,
    label,
    minLength = 3,
    isLoading = false,
}: AutocompleteProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState<Suggestion>(value as Suggestion);
    const [inputValue, setInputValue] = useState<string>(value?.label || '');

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const input = inputRef.current;
            if (!input) {
                return;
            }

            // This is not a default behaviour of the <input /> field
            if (event.key === 'Enter' && input.value !== '') {
                const suggestionToSelect = suggestions.find((suggestion) => suggestion.label === input.value);
                if (suggestionToSelect) {
                    setSelected(suggestionToSelect);
                    onSelected?.(suggestionToSelect);
                }
            }

            if (event.key === 'Escape') {
                input.blur();
            }
        },
        [suggestions, onSelected],
    );

    const handleBlur = useCallback(() => {
        setOpen(false);
        setInputValue(selected?.label);
    }, [selected]);

    const handleSelectOption = useCallback(
        (selectedSuggestion: Suggestion) => {
            setInputValue(selectedSuggestion.label);

            setSelected(selectedSuggestion);
            onSelected?.(selectedSuggestion);

            // This is a hack to prevent the input from being focused after the user selects an option
            // We can call this hack: "The next tick"
            setTimeout(() => {
                inputRef?.current?.blur();
            }, 0);
        },
        [onSelected],
    );

    return (
        <>
            {label && (
                <Label htmlFor="autocomplete" className="sr-only">
                    {label}
                </Label>
            )}
            <CommandPrimitive
                onKeyDown={handleKeyDown}
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
                                        const isSelected = selected?.value === suggestion.value;
                                        return (
                                            <CommandItem
                                                key={suggestion.value}
                                                value={suggestion.label}
                                                onMouseDown={(event) => {
                                                    event.preventDefault();
                                                    event.stopPropagation();
                                                }}
                                                onSelect={() => handleSelectOption(suggestion)}
                                                className={cn(
                                                    'flex w-full items-center gap-2 cursor-pointer',
                                                    !isSelected ? 'pl-8' : null,
                                                )}
                                            >
                                                {isSelected ? <Check className="w-4" /> : null}
                                                {suggestion.label}
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
        </>
    );
};

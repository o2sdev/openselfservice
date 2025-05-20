import { Search } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { debounce } from 'throttle-debounce';

import { Input } from '@o2s/ui/components/input';

// import styles from './Autocomplete.module.scss';
import { AutocompleteProps } from './Autocomplete.types';

// const NAME = 'Autocomplete';

export const Autocomplete = <T,>({
    id,
    // label,
    minLength = 3,
    throttleInterval = 300,
    disabled,
    defaultValue,
    // caption,
    placeholder,
    autoClear = false,
    onSelectedSuggestion,
    getSuggestionValue,
    onSuggestionsFetchRequested,
    renderSuggestion,
    onChange,
    onBlur,
    onFocus,
    // customClass,
    // componentSize = 'large',
    required,
    adornment = false,
    'aria-invalid': ariaInvalid,
}: AutocompleteProps<T>) => {
    const [value, setValue] = useState(defaultValue);
    const [suggestions, setSuggestions] = useState<T[]>([]);
    const [isSelectedValue, setIsSelectedValue] = useState(false);
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const fetchSuggestions = useCallback(
        debounce(throttleInterval, async (value: string) => {
            const suggestions = await onSuggestionsFetchRequested(value);
            if (suggestions) setSuggestions(suggestions);
        }),
        [onSuggestionsFetchRequested, throttleInterval],
    );

    return (
        <div className="w-full">
            {/* <div className={cn(styles.autocomplete, styles[componentSize], customClass)}> */}
            <Autosuggest
                suggestions={suggestions}
                shouldRenderSuggestions={(value) => value.length >= minLength}
                onSuggestionsClearRequested={() => setSuggestions([])}
                onSuggestionsFetchRequested={async ({ value }) => {
                    setValue(value);
                    await fetchSuggestions(value);
                }}
                onSuggestionSelected={(_e, { suggestion }) => {
                    onSelectedSuggestion(suggestion);
                    setIsSelectedValue(true);
                }}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={{
                    value: value || '',
                    onChange: (_e, { newValue }) => {
                        setValue(newValue);
                        setIsSelectedValue(false);
                        onChange && onChange(newValue);
                    },
                    onBlur: (event) => {
                        if (!isSelectedValue && autoClear) setValue('');
                        onBlur && onBlur(event as React.FocusEvent<HTMLInputElement>);
                    },
                    onFocus: (event) => {
                        onFocus && onFocus(event as React.FocusEvent<HTMLInputElement>);
                    },
                }}
                renderInputComponent={(inputProps) => (
                    // <Input
                    //     data-test={dataTest}
                    //     componentSize={componentSize}
                    //     required={required}
                    //     id={id}
                    //     label={label}
                    //     disabled={disabled}
                    //     aria-invalid={ariaInvalid}
                    //     autoComplete="off"
                    //     rightAdornment={
                    //         adornment ? (
                    //             <InputAdornment type={'icon'}>
                    //                 <Icon size={componentSize}>
                    //                     <Search className="w-4 h-4" />
                    //                 </Icon>
                    //             </InputAdornment>
                    //         ) : undefined
                    //     }
                    //     placeholder={placeholder}
                    //     caption={caption}
                    //     {...inputProps}
                    // />
                    <Input
                        placeholder={placeholder}
                        adornment={adornment && <Search className="w-4 h-4" />}
                        adornmentProps={{ behavior: 'prepend' }}
                        className="w-full pl-8"
                        onChange={(e) => {
                            console.log('e', e);
                        }}
                        disabled={disabled}
                        required={required}
                        id={id}
                        aria-invalid={ariaInvalid}
                        {...inputProps}
                    />
                )}
                // theme={styles}
            />
        </div>
    );
};

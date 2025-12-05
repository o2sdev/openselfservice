import InputFormat from 'input-format/react';
import {
    AsYouType,
    CountryCode,
    getCountryCallingCode,
    isValidPhoneNumber,
    parsePhoneNumber,
    parsePhoneNumberCharacter,
} from 'libphonenumber-js/core';
import React, { useCallback, useMemo } from 'react';

import { InputWithDetails } from './input';
import { phoneInputMetadata } from './phone-input-metadata';
import { PhoneInputProps } from './phone-input.types';

export const formatPhoneNumber = (value: string, country?: CountryCode): string => {
    if (!value) {
        return '';
    }

    if (!country) {
        return value;
    }

    const asYouType = new AsYouType(country, phoneInputMetadata);
    asYouType.input(value);

    const phoneNumber = asYouType.getNumber();
    const isPossible = asYouType.isPossible();

    return isPossible ? phoneNumber?.formatInternational({ v2: true }) || value : value;
};

export const checkIsValidPhoneNumber = (value: string): boolean => {
    if (!value) {
        return false;
    }
    return isValidPhoneNumber(value, phoneInputMetadata);
};

export const isValidNumberForRegion = (value: string, country: CountryCode): boolean => {
    try {
        const phoneNumber = parsePhoneNumber(value, phoneInputMetadata);
        return phoneNumber.country === country;
    } catch (_error) {
        return false;
    }
};

export const PhoneInput: React.FC<PhoneInputProps> = ({
    value,
    defaultCountry,
    onChange,
    hasError,
    errorMessage,
    ...props
}) => {
    const callingCode = getCountryCallingCode(defaultCountry, phoneInputMetadata);

    const format = useCallback(
        (inputValue?: string) => {
            const formatter = new AsYouType(defaultCountry, phoneInputMetadata);

            let text = formatter.input(inputValue || '');
            let template = formatter.getTemplate();

            if (inputValue && inputValue.length > 1 && inputValue[0] !== '+') {
                text = `+${callingCode} ${text}`;
                template = `+${callingCode} ${template}`;
            }

            return {
                text,
                template,
            };
        },
        [defaultCountry, callingCode],
    );

    const formattedPhone = useMemo(() => format(value).text, [format, value]);
    const isValid = useMemo(() => checkIsValidPhoneNumber(formattedPhone), [formattedPhone]);

    const handleChange = useCallback(
        (newValue?: string) => {
            const val = newValue || '';
            const valid = checkIsValidPhoneNumber(val);
            onChange(val, valid);
        },
        [onChange],
    );

    const handlePaste = useCallback(
        (event: React.ClipboardEvent<HTMLInputElement>) => {
            event.preventDefault();

            const regex = /\s/g;
            const pastedText = event.clipboardData.getData('text');
            const formattedText = format(pastedText).text.replace(regex, '');

            handleChange(formattedText);
        },
        [format, handleChange],
    );

    return (
        <InputFormat
            format={format}
            parse={parsePhoneNumberCharacter}
            // @ts-expect-error - InputFormat types expect basic input props, but InputWithDetails requires additional props (label, hasError, etc.)
            inputComponent={InputWithDetails}
            {...props}
            value={formattedPhone}
            onPaste={handlePaste}
            onChange={(event) => handleChange(typeof event === 'string' ? event : event?.target.value)}
            type="tel"
            inputMode="tel"
            hasError={hasError || (formattedPhone.length > 0 && !isValid)}
            errorMessage={errorMessage || (formattedPhone.length > 0 && !isValid ? 'Invalid phone number' : undefined)}
        />
    );
};

PhoneInput.displayName = 'PhoneInput';

import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import InputFormat from 'input-format/react';
import { AsYouType, CountryCode, getCountryCallingCode, parsePhoneNumberCharacter } from 'libphonenumber-js/core';
import type { MetadataJson } from 'libphonenumber-js/types';

import { Input } from '@o2s/ui/elements/input';

import * as customMetadata from '../lib/phone/metadata.json';

const metadata = customMetadata as MetadataJson;

export type PhoneInputChangePayload = {
    e164: string | null;
    national: string | null;
    isValid: boolean;
    country?: string;
};

export interface PhoneInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'inputMode'> {
    defaultCountry?: CountryCode; // e.g. 'PL' | 'DE' | 'GB'
    display?: 'international' | 'national';
    value?: string;
    onChange?: (payload: PhoneInputChangePayload) => void;
}

const NAME = 'PhoneInput';

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
    ({ defaultCountry = 'PL', display = 'international', value, onChange, ...props }, ref) => {
        const [text, setText] = useState<string>(value ?? '');

        const callingCode = getCountryCallingCode(defaultCountry, metadata as any);

        const normalize = useCallback((raw?: string) => {
            if (!raw) return '';
            const trimmed = String(raw).trim();
            // Convert international dialing prefix "00" to '+' like the demo does
            return trimmed.replace(/^0{2}\s*/, '+');
        }, []);

        const format = useCallback(
            (raw?: string) => {
                const normalized = normalize(raw);
                const asYouType = new AsYouType(defaultCountry, metadata as any);
                let nextText = asYouType.input(normalized || '');
                let template = asYouType.getTemplate();

                if (normalized && normalized.length > 1 && normalized[0] !== '+') {
                    nextText = `+${callingCode} ${nextText}`;
                    template = `+${callingCode} xxx`;
                }

                return { text: nextText, template };
            },
            [defaultCountry, callingCode, normalize],
        );

        const computedValidity = useMemo(() => {
            const asYouType = new AsYouType(undefined, metadata as any);
            asYouType.input(normalize(text));
            const number = asYouType.getNumber();
            return !!number?.isValid();
        }, [text, normalize]);

        useEffect(() => {
            if (value === undefined) return; // uncontrolled external value not provided
            const formatted = format(value).text;
            setText(formatted);
            // emit change based on incoming value as well
            const asYouType = new AsYouType(undefined, metadata as any);
            asYouType.input(formatted);
            const number = asYouType.getNumber();
            onChange?.({
                e164: number?.isPossible() ? number?.number ?? null : null,
                national: number?.isPossible()
                    ? display === 'international'
                        ? number?.formatInternational({ v2: true }) ?? null
                        : number?.formatNational({ v2: true }) ?? null
                    : null,
                isValid: !!number?.isValid(),
                country: number?.country,
            });
        }, [value, display, onChange, format]);

        return (
            <InputFormat
                format={format}
                parse={parsePhoneNumberCharacter}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore input-format expects a different component type
                inputComponent={Input}
                ref={ref}
                {...props}
                aria-invalid={props['aria-invalid'] ?? (computedValidity ? undefined : true)}
                value={text}
                onPaste={(event) => {
                    event.preventDefault();
                    const raw = event.clipboardData.getData('text');
                    const formatted = format(normalize(raw)).text;
                    setText(formatted);

                    const asYouType = new AsYouType(undefined, metadata as any);
                    asYouType.input(formatted);
                    const number = asYouType.getNumber();
                    onChange?.({
                        e164: number?.isPossible() ? number?.number ?? null : null,
                        national: number?.isPossible()
                            ? display === 'international'
                                ? number?.formatInternational({ v2: true }) ?? null
                                : number?.formatNational({ v2: true }) ?? null
                            : null,
                        isValid: !!number?.isValid(),
                        country: number?.country,
                    });
                }}
                onChange={(next) => {
                    const nextText = String(next ?? '');
                    setText(nextText);

                    const asYouType = new AsYouType(undefined, metadata as any);
                    asYouType.input(normalize(nextText));
                    const number = asYouType.getNumber();
                    onChange?.({
                        e164: number?.isPossible() ? number?.number ?? null : null,
                        national: number?.isPossible()
                            ? display === 'international'
                                ? number?.formatInternational({ v2: true }) ?? null
                                : number?.formatNational({ v2: true }) ?? null
                            : null,
                        isValid: !!number?.isValid(),
                        country: number?.country,
                    });
                }}
                type="tel"
                inputMode="tel"
                name={props.name ?? NAME}
            />
        );
    },
);

PhoneInput.displayName = NAME;

export default PhoneInput;



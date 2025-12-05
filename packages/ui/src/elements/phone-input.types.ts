import { CountryCode } from 'libphonenumber-js/core';

import { InputWithDetailsProps } from './input';

export interface PhoneInputProps extends Omit<InputWithDetailsProps, 'onChange' | 'type' | 'inputMode' | 'value'> {
    defaultCountry: CountryCode;
    onChange: (value: string, isValid: boolean) => void;
    value?: string;
}

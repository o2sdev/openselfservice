import { CountryCode } from 'libphonenumber-js/core';

import { InputWithDetailsProps } from './input';

export interface PhoneInputProps extends Omit<
    InputWithDetailsProps,
    'onChange' | 'type' | 'inputMode' | 'value' | 'label'
> {
    defaultCountry: CountryCode;
    onChange: (value: string, isValid: boolean) => void;
    value?: string;
    label?: string | React.ReactNode;
}

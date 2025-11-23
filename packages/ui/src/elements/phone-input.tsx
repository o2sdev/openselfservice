import * as React from 'react';
import { parsePhoneNumber, AsYouType, CountryCode } from 'libphonenumber-js';
import { Input, InputWithLabel, InputWithDetails, InputProps, InputWithDetailsProps } from './input';
import { cn } from '@o2s/ui/lib/utils';

// Minimal metadata for supported countries (EN, DE, PL)
const SUPPORTED_COUNTRIES: CountryCode[] = ['GB', 'DE', 'PL'];

export type PhoneInputProps = Omit<InputProps, 'onChange' | 'value'> & {
  defaultCountry?: CountryCode;
  value?: string;
  onChange?: (value: string, isValid: boolean) => void;
  onValidationChange?: (isValid: boolean) => void;
};

export type PhoneInputOwnProps = PhoneInputProps & { ref?: React.Ref<HTMLInputElement> };

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputOwnProps>(
  ({ defaultCountry = 'PL', value = '', onChange, onValidationChange, ...props }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(value);
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
      setDisplayValue(value);
    }, [value]);

    const formatPhoneNumber = React.useCallback(
      (input: string) => {
        if (!input) return '';

        try {
          // Try to parse the phone number
          const asYouType = new AsYouType(defaultCountry);
          const formatted = asYouType.input(input);
          
          // Check if it's valid
          const phoneNumber = asYouType.getNumber();
          const valid = phoneNumber ? phoneNumber.isValid() : false;
          
          setIsValid(valid);
          onValidationChange?.(valid);
          
          return formatted;
        } catch (error) {
          setIsValid(false);
          onValidationChange?.(false);
          return input;
        }
      },
      [defaultCountry, onValidationChange]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      
      // Only allow valid characters (numbers, +, spaces, parentheses, hyphens)
      const sanitized = inputValue.replace(/[^0-9+\s()-]/g, '');
      
      const formatted = formatPhoneNumber(sanitized);
      setDisplayValue(formatted);
      onChange?.(formatted, isValid);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text');
      const sanitized = pastedText.replace(/[^0-9+\s()-]/g, '');
      const formatted = formatPhoneNumber(sanitized);
      setDisplayValue(formatted);
      onChange?.(formatted, isValid);
    };

    return (
      <Input
        {...props}
        ref={ref}
        type="tel"
        value={displayValue}
        onChange={handleChange}
        onPaste={handlePaste}
        placeholder="+48 500 500 500"
      />
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export type PhoneInputWithLabelProps = Omit<InputWithDetailsProps, 'onChange' | 'value'> & {
  defaultCountry?: CountryCode;
  value?: string;
  onChange?: (value: string, isValid: boolean) => void;
  onValidationChange?: (isValid: boolean) => void;
};

const PhoneInputWithLabel = React.forwardRef<HTMLInputElement, PhoneInputWithLabelProps>(
  ({ defaultCountry = 'PL', value = '', onChange, onValidationChange, ...props }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(value);
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
      setDisplayValue(value);
    }, [value]);

    const formatPhoneNumber = React.useCallback(
      (input: string) => {
        if (!input) return '';

        try {
          const asYouType = new AsYouType(defaultCountry);
          const formatted = asYouType.input(input);
          const phoneNumber = asYouType.getNumber();
          const valid = phoneNumber ? phoneNumber.isValid() : false;
          
          setIsValid(valid);
          onValidationChange?.(valid);
          
          return formatted;
        } catch (error) {
          setIsValid(false);
          onValidationChange?.(false);
          return input;
        }
      },
      [defaultCountry, onValidationChange]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const sanitized = inputValue.replace(/[^0-9+\s()-]/g, '');
      const formatted = formatPhoneNumber(sanitized);
      setDisplayValue(formatted);
      onChange?.(formatted, isValid);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text');
      const sanitized = pastedText.replace(/[^0-9+\s()-]/g, '');
      const formatted = formatPhoneNumber(sanitized);
      setDisplayValue(formatted);
      onChange?.(formatted, isValid);
    };

    return (
      <InputWithLabel
        {...props}
        ref={ref}
        type="tel"
        value={displayValue}
        onChange={handleChange}
        onPaste={handlePaste}
        placeholder="+48 500 500 500"
      />
    );
  }
);

PhoneInputWithLabel.displayName = 'PhoneInputWithLabel';

export type PhoneInputWithDetailsProps = Omit<InputWithDetailsProps, 'onChange' | 'value'> & {
  defaultCountry?: CountryCode;
  value?: string;
  onChange?: (value: string, isValid: boolean) => void;
  onValidationChange?: (isValid: boolean) => void;
};

const PhoneInputWithDetails = React.forwardRef<HTMLInputElement, PhoneInputWithDetailsProps>(
  ({ defaultCountry = 'PL', value = '', onChange, onValidationChange, caption, errorMessage, ...props }, ref) => {
    const [displayValue, setDisplayValue] = React.useState(value);
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
      setDisplayValue(value);
    }, [value]);

    const formatPhoneNumber = React.useCallback(
      (input: string) => {
        if (!input) return '';

        try {
          const asYouType = new AsYouType(defaultCountry);
          const formatted = asYouType.input(input);
          const phoneNumber = asYouType.getNumber();
          const valid = phoneNumber ? phoneNumber.isValid() : false;
          
          setIsValid(valid);
          onValidationChange?.(valid);
          
          return formatted;
        } catch (error) {
          setIsValid(false);
          onValidationChange?.(false);
          return input;
        }
      },
      [defaultCountry, onValidationChange]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const sanitized = inputValue.replace(/[^0-9+\s()-]/g, '');
      const formatted = formatPhoneNumber(sanitized);
      setDisplayValue(formatted);
      onChange?.(formatted, isValid);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text');
      const sanitized = pastedText.replace(/[^0-9+\s()-]/g, '');
      const formatted = formatPhoneNumber(sanitized);
      setDisplayValue(formatted);
      onChange?.(formatted, isValid);
    };

    return (
      <InputWithDetails
        {...props}
        ref={ref}
        type="tel"
        value={displayValue}
        onChange={handleChange}
        onPaste={handlePaste}
        placeholder="+48 500 500 500"
        caption={caption}
        errorMessage={errorMessage}
      />
    );
  }
);

PhoneInputWithDetails.displayName = 'PhoneInputWithDetails';

export { PhoneInput, PhoneInputWithLabel, PhoneInputWithDetails };

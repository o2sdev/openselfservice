import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

import { FormField } from './FormField';
import { PasswordFormFieldProps } from './FormField.types';

export const PasswordFormField: React.FC<Readonly<PasswordFormFieldProps>> = ({
    field,
    touched,
    errors,
    name,
    label,
    placeholder = '',
    disabled = false,
    showLabel,
    hideLabel,
    description,
    labelAdornment,
    validations,
    requiredLabel,
    optionalLabel,
    isRequired,
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <FormField
            field={field}
            touched={touched}
            errors={errors}
            name={name}
            label={label}
            placeholder={placeholder}
            type={passwordVisible ? 'text' : 'password'}
            disabled={disabled}
            adornment={
                <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <Eye width={16} height={16} /> : <EyeOff width={16} height={16} />}
                    <span className="sr-only">{passwordVisible ? hideLabel : showLabel}</span>
                </button>
            }
            adornmentProps={{ behavior: 'append' }}
            description={description}
            labelAdornment={labelAdornment}
            validations={validations}
            requiredLabel={requiredLabel}
            optionalLabel={optionalLabel}
            isRequired={isRequired}
        />
    );
};

import { AuthError } from 'next-auth';

import { Models } from '@o2s/framework/modules';

export interface FormValues {
    password: string;
    confirmPassword: string;
}

export interface CreateNewPasswordInputLabels {
    label: string;
    placeholder?: string;
    description?: string;
    errorMessages?: Models.FormField.ErrorMessage[];
    hide: string;
    show: string;
    regexValidations?: Models.FormField.RegexValidation[];
}

export interface CreateNewPasswordFormProps {
    labels: {
        title: string;
        subtitle?: string;
        setNewPassword: string;
        password: CreateNewPasswordInputLabels;
        confirmPassword: CreateNewPasswordInputLabels;
        creatingPasswordError: string;
    };
    onCreateNewPassword: (credentials: FormValues) => Promise<AuthError | void>;
}

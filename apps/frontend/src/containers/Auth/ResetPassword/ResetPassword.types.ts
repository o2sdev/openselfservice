import { AuthError } from 'next-auth';

import { Models } from '@o2s/framework/modules';

export interface FormValues {
    username: string;
    password: string;
    confirmPassword: string;
}

export interface ResetPasswordStep {
    title: string;
    subtitle?: string;
    submitButton: string;
}
export interface ResetPasswordInputLabels {
    label: string;
    placeholder?: string;
    description?: string;
    errorMessages?: Models.FormField.ErrorMessage[];
}
export interface ResetPasswordPasswordInputLabels extends ResetPasswordInputLabels {
    hide: string;
    show: string;
    regexValidations?: Models.FormField.RegexValidation[];
}

export interface ResetPasswordFormProps {
    labels: {
        step1: ResetPasswordStep;
        step2: ResetPasswordStep;
        password: ResetPasswordPasswordInputLabels;
        confirmPassword: ResetPasswordPasswordInputLabels;
        username: ResetPasswordInputLabels;
        invalidCredentials: string;
    };
    onResetPassword: (credentials: FormValues) => Promise<AuthError | void>;
    onSetNewPassword: (credentials: FormValues) => Promise<AuthError | void>;
}

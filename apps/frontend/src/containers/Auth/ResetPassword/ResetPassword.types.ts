import { AuthError } from 'next-auth';

import { Models } from '@o2s/framework/modules';

export interface FormValues {
    username: string;
}

export interface ResetPasswordFormProps {
    labels: {
        title: string;
        subtitle?: string;
        resetPassword: string;
        username: {
            label: string;
            placeholder?: string;
            description?: string;
            errorMessages?: Models.FormField.ErrorMessage[];
        };
        invalidCredentials: string;
    };
    onResetPassword: (credentials: FormValues) => Promise<AuthError | void>;
}

import { AuthError } from 'next-auth';

import { Models } from '@o2s/framework/modules';

import { Providers } from '@/auth/auth.providers';

export interface FormValues {
    username: string;
    password: string;
}

export interface SignInFormProps {
    providers: Providers;
    labels: {
        title: string;
        subtitle?: string;
        username: {
            label: string;
            placeholder?: string;
            errorMessages?: Models.FormField.ErrorMessage[];
        };
        password: {
            label: string;
            placeholder?: string;
            hide: string;
            show: string;
            errorMessages?: Models.FormField.ErrorMessage[];
        };
        signIn: string;
        providers?: {
            title: string;
            label: string;
        };
        invalidCredentials: string;
    };
    onSignIn: (providerId: string, credentials?: FormValues) => Promise<AuthError | void>;
}

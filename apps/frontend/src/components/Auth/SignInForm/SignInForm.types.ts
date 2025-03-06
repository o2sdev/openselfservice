import { Providers } from 'src/auth.providers';

import { Models } from '@o2s/framework/modules';

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
    };
    onSignIn: (providerId: string, credentials?: FormValues) => Promise<void>;
}

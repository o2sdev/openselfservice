import { Modules } from '@o2s/api-harmonization';
import { Providers } from 'src/auth.providers';

import { Models } from '@o2s/framework/modules';

export interface FormValues {
    username: string;
    password: string;
}

export interface CreateAccountFormProps {
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
        forgotPassword?: {
            label: string;
            link: string;
        };
        resetPasswordMessage?: {
            title?: string;
            description?: string;
        };
        newPasswordMessage?: {
            title?: string;
            description?: string;
        };
    };
    onCheckMembership: (
        providerId: string,
        credentials?: FormValues,
    ) => Promise<Modules.Organizations.Model.OrganizationMembership>;
    onRegisterUser: (providerId: string, credentials?: FormValues) => Promise<Modules.Users.Model.RegisterUser>;
    resetPassword?: string;
}

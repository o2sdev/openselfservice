import { Modules } from '@o2s/api-harmonization';

import { Models } from '@o2s/framework/modules';

export interface FormValuesStep1 {
    username: string;
    taxId: string;
}

export interface FormValues extends FormValuesStep1 {
    companyName: string;
    clientId: string;
    firstName: string;
    lastName: string;
    phone: string;
    position: string;
}

interface InputLabels {
    label: string;
    placeholder?: string;
    errorMessages?: Models.FormField.ErrorMessage[];
    description?: string;
}

interface SelectLabels {
    label: string;
    placeholder?: string;
    options: { label: string; value: string }[];
    errorMessages?: Models.FormField.ErrorMessage[];
    description?: string;
}

interface StepLabels {
    title: string;
    subtitle?: string;
    submitButton: string;
}

export interface CreateAccountFormProps {
    labels: {
        username: InputLabels;
        taxId: InputLabels;
        optionalLabel: string;
        requiredLabel: string;
        step1: StepLabels & {
            signIn: {
                title: string;
                button: {
                    label: string;
                    link: string;
                };
            };
            invalidCredentials: string;
        };
        step2: StepLabels & {
            badge: string;
            firstName: InputLabels;
            lastName: InputLabels;
            companyName: InputLabels;
            clientId: InputLabels;
            phone: InputLabels;
            position: SelectLabels;
            changeCompanyTaxIdLabel: string;
            companySectionTitle: string;
            userSectionTitle: string;
            activationContactInfo: string;
            termsAndConditions: string;
            creatingAccountProblem: string;
        };
    };
    onCheckMembership: (credentials?: FormValuesStep1) => Promise<Modules.Organizations.Model.OrganizationMembership>;
    onRegisterUser: (credentials?: FormValues) => Promise<Modules.Users.Model.RegisterUser>;
}

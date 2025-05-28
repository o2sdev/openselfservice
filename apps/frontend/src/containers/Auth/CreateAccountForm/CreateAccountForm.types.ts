import { Modules } from '@o2s/api-harmonization';

import { Models } from '@o2s/framework/modules';

export interface FormValues {
    email: string;
    companyName: string;
    companyTaxId: string;
    clientId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
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
        email: InputLabels;
        companyTaxId: InputLabels;
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
        };
        step2: StepLabels & {
            badge: {
                newCompany: string;
                existingCompany: string;
            };
            firstName: InputLabels;
            lastName: InputLabels;
            companyName: InputLabels;
            clientId: InputLabels;
            phoneNumber: InputLabels;
            position: SelectLabels;
            existingCompanyMessage: {
                title: string;
                description?: string;
            };
            changeCompanyTaxIdLabel: string;
            companySectionTitle: string;
            userSectionTitle: string;
            activationContactInfo: string;
            termsAndConditions: string;
        };
    };
    onCheckMembership: (
        providerId: string,
        credentials?: FormValues,
    ) => Promise<Modules.Organizations.Model.OrganizationMembership>;
    onRegisterUser: (providerId: string, credentials?: FormValues) => Promise<Modules.Users.Model.RegisterUser>;
    resetPassword?: string;

    existingCompany: boolean;
}

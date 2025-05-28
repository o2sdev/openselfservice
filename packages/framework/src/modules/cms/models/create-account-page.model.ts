import { Models } from '@o2s/framework/modules';

import { Media } from '@/utils/models';

export class IconsList {
    title?: string;
    icons!: {
        name: string;
        title: string;
        description: string;
    }[];
}

export class CreateAccountPage {
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    image?: Media.Media;
    sideContent?: IconsList;
    seo!: Models.SEO.Page;
    labels!: {
        email: Models.FormField.FormField;
        companyTaxId: Models.FormField.FormField;
        optionalLabel: string;
        requiredLabel: string;
        step1: {
            title: string;
            subtitle?: string;
            submitButton: string;
            signIn: {
                title: string;
                button: {
                    label: string;
                    link: string;
                };
            };
        };
        step2: {
            title: string;
            subtitle?: string;
            submitButton: string;
            badge: {
                newCompany: string;
                existingCompany: string;
            };
            firstName: Models.FormField.FormField;
            lastName: Models.FormField.FormField;
            companyName: Models.FormField.FormField;
            clientId: Models.FormField.FormField;
            phoneNumber: Models.FormField.FormField;
            position: Models.FormField.SelectFormField;
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
}

import { Models } from '@o2s/framework/modules';

export class ListWithIcons {
    title?: string;
    icons!: {
        name: string;
        title?: string;
        description?: string;
    }[];
}

export class CreateAccountPage {
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    sideContent!: ListWithIcons;
    seo!: Models.SEO.Page;
    username!: Models.FormField.FormField;
    taxId!: Models.FormField.FormField;
    firstName!: Models.FormField.FormField;
    lastName!: Models.FormField.FormField;
    companyName!: Models.FormField.FormField;
    clientId!: Models.FormField.FormField;
    phone!: Models.FormField.FormField;
    position!: Models.FormField.SelectFormField;
    invalidCredentials!: string;
    badge!: string;
    changeCompanyTaxIdLabel!: string;
    companySectionTitle!: string;
    userSectionTitle!: string;
    termsAndConditions!: string;
    creatingAccountProblem!: string;
    step1Title!: string;
    step1Subtitle!: string;
    step1SubmitButton!: string;
    step2Title!: string;
    step2Subtitle!: string;
    step2SubmitButton!: string;
    signInTitle!: string;
    signInButton!: {
        label: string;
        link: string;
    };
    labels!: {
        optionalLabel: string;
        requiredLabel: string;
    };
    activationContactInfo!: string;
}

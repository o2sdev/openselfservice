import { CMS } from '@o2s/framework/modules';

import { mapMedia } from './cms.media.mapper';
import { GetCreateAccountPageQuery } from '@/generated/strapi';

export const mapCreateAccountPage = (
    data: GetCreateAccountPageQuery,
    baseURL?: string,
): CMS.Model.CreateAccountPage.CreateAccountPage => {
    const createAccountPage = data.createAccountPage!;
    const labels = data.configurableTexts!;

    return {
        createdAt: createAccountPage.createdAt,
        updatedAt: createAccountPage.updatedAt,
        publishedAt: createAccountPage.publishedAt,
        sideContent: {
            title: createAccountPage.sideContent.title,
            icons: createAccountPage.sideContent.icons.map((icon) => ({
                name: icon.name,
                title: icon.title,
                description: icon.description,
            })),
        },
        invalidCredentials: createAccountPage.invalidCredentials,
        labels: {
            requiredLabel: labels.validation.isRequired,
            optionalLabel: labels.validation.isOptional,
        },
        username: {
            id: createAccountPage.username.id,
            name: createAccountPage.username.name,
            label: createAccountPage.username.label,
            placeholder: createAccountPage.username.placeholder,
            errorMessages: createAccountPage.username.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        taxId: {
            id: createAccountPage.taxId.id,
            name: createAccountPage.taxId.name,
            label: createAccountPage.taxId.label,
            placeholder: createAccountPage.taxId.placeholder,
            errorMessages: createAccountPage.taxId.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        firstName: {
            id: createAccountPage.firstName.id,
            name: createAccountPage.firstName.name,
            label: createAccountPage.firstName.label,
            placeholder: createAccountPage.firstName.placeholder,
            errorMessages: createAccountPage.firstName.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        lastName: {
            id: createAccountPage.lastName.id,
            name: createAccountPage.lastName.name,
            label: createAccountPage.lastName.label,
            placeholder: createAccountPage.lastName.placeholder,
            errorMessages: createAccountPage.lastName.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        companyName: {
            id: createAccountPage.companyName.id,
            name: createAccountPage.companyName.name,
            label: createAccountPage.companyName.label,
            placeholder: createAccountPage.companyName.placeholder,
            errorMessages: createAccountPage.companyName.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        clientId: {
            id: createAccountPage.clientId.id,
            name: createAccountPage.clientId.name,
            label: createAccountPage.clientId.label,
            placeholder: createAccountPage.clientId.placeholder,
            errorMessages: createAccountPage.clientId.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        phone: {
            id: createAccountPage.phone.id,
            name: createAccountPage.phone.name,
            label: createAccountPage.phone.label,
            placeholder: createAccountPage.phone.placeholder,
            errorMessages: createAccountPage.phone.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        position: {
            id: createAccountPage.position.id,
            name: createAccountPage.position.name,
            label: createAccountPage.position.label,
            placeholder: createAccountPage.position.placeholder,
            errorMessages: createAccountPage.position.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
            options: createAccountPage.position.options.map((option) => ({
                label: option.key,
                value: option.value,
            })),
        },
        changeCompanyTaxIdLabel: createAccountPage.changeCompanyTaxIdLabel,
        companySectionTitle: createAccountPage.companySectionTitle,
        userSectionTitle: createAccountPage.userSectionTitle,
        termsAndConditions: createAccountPage.termsAndConditions,
        creatingAccountProblem: createAccountPage.creatingAccountProblem,
        step1Title: createAccountPage.step1Title,
        step1Subtitle: createAccountPage.step1Subtitle,
        step1SubmitButton: createAccountPage.step1SubmitButton,
        step2Title: createAccountPage.step2Title,
        step2Subtitle: createAccountPage.step2Subtitle,
        step2SubmitButton: createAccountPage.step2SubmitButton,
        signInTitle: createAccountPage.signInTitle,
        signInButton: {
            label: createAccountPage.signInButton.label,
            link: createAccountPage.signInButton.url || '',
        },
        seo: {
            title: createAccountPage.SEO.title,
            description: createAccountPage.SEO.description,
            keywords: createAccountPage.SEO.keywords?.map((keyword) => keyword.keyword) || [],
            image: mapMedia(createAccountPage.SEO.image, baseURL),
            noIndex: createAccountPage.SEO.noIndex,
            noFollow: createAccountPage.SEO.noFollow,
        },
        badge: createAccountPage.badge,
        activationContactInfo: createAccountPage.activationContactInfo,
    };
};

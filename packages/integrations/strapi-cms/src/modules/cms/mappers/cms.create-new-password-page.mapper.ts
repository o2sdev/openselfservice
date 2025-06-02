import { CMS } from '@o2s/framework/modules';

import { mapMedia } from './cms.media.mapper';
import { GetCreateNewPasswordPageQuery } from '@/generated/strapi';

export const mapCreateNewPasswordPage = (
    data: GetCreateNewPasswordPageQuery,
    baseURL?: string,
): CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage => {
    const createNewPasswordPage = data.createNewPasswordPage!;
    const labels = data.configurableTexts!;

    return {
        createdAt: createNewPasswordPage.createdAt,
        updatedAt: createNewPasswordPage.updatedAt,
        publishedAt: createNewPasswordPage.publishedAt,
        subtitle: createNewPasswordPage.subtitle,
        title: createNewPasswordPage.title,
        password: {
            id: createNewPasswordPage.password.id,
            name: createNewPasswordPage.password.name,
            label: createNewPasswordPage.password.label,
            placeholder: createNewPasswordPage.password.placeholder,
            errorMessages: createNewPasswordPage.password.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
            regexValidations: createNewPasswordPage.password.regexValidations?.map((regexValidation) => ({
                type: regexValidation.type,
                label: regexValidation.label,
                regex: regexValidation.regex,
            })),
        },
        confirmPassword: {
            id: createNewPasswordPage.confirmPassword.id,
            name: createNewPasswordPage.confirmPassword.name,
            label: createNewPasswordPage.confirmPassword.label,
            placeholder: createNewPasswordPage.confirmPassword.placeholder,
            errorMessages: createNewPasswordPage.confirmPassword.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        labels: {
            show: labels.actions.show,
            hide: labels.actions.hide,
            requiredLabel: labels.validation.isRequired,
            optionalLabel: labels.validation.isOptional,
        },
        image: mapMedia(createNewPasswordPage.image, baseURL),
        seo: {
            title: createNewPasswordPage.SEO.title,
            description: createNewPasswordPage.SEO.description,
            keywords: createNewPasswordPage.SEO.keywords?.map((keyword) => keyword.keyword) || [],
            image: mapMedia(createNewPasswordPage.SEO.image, baseURL),
            noIndex: createNewPasswordPage.SEO.noIndex,
            noFollow: createNewPasswordPage.SEO.noFollow,
        },
        setNewPassword: createNewPasswordPage.setNewPassword,
        creatingPasswordError: createNewPasswordPage.creatingPasswordError,
    };
};

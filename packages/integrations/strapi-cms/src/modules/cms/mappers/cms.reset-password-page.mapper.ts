import { CMS } from '@o2s/framework/modules';

import { mapMedia } from './cms.media.mapper';
import { GetResetPasswordPageQuery } from '@/generated/strapi';

export const mapResetPasswordPage = (
    data: GetResetPasswordPageQuery,
    baseURL?: string,
): CMS.Model.ResetPasswordPage.ResetPasswordPage => {
    const resetPasswordPage = data.resetPasswordPage!;
    const labels = data.configurableTexts!;

    return {
        createdAt: resetPasswordPage.createdAt,
        updatedAt: resetPasswordPage.updatedAt,
        publishedAt: resetPasswordPage.publishedAt,
        resetPassword: resetPasswordPage.resetPassword,
        subtitle: resetPasswordPage.subtitle,
        title: resetPasswordPage.title,
        username: {
            id: resetPasswordPage.username.id,
            name: resetPasswordPage.username.name,
            label: resetPasswordPage.username.label,
            placeholder: resetPasswordPage.username.placeholder,
            errorMessages: resetPasswordPage.username.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },

        labels: {
            requiredLabel: labels.validation.isRequired,
            optionalLabel: labels.validation.isOptional,
        },
        image: mapMedia(resetPasswordPage.image, baseURL),
        seo: {
            title: resetPasswordPage.SEO.title,
            description: resetPasswordPage.SEO.description,
            keywords: resetPasswordPage.SEO.keywords?.map((keyword) => keyword.keyword) || [],
            image: mapMedia(resetPasswordPage.SEO.image, baseURL),
            noIndex: resetPasswordPage.SEO.noIndex,
            noFollow: resetPasswordPage.SEO.noFollow,
        },
        invalidCredentials: resetPasswordPage.invalidCredentials,
    };
};

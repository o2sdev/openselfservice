import { CMS } from '@o2s/framework/modules';

import { GetLoginPageQuery } from '@/generated/strapi';

export const mapLoginPage = (data: GetLoginPageQuery, baseURL?: string): CMS.Model.LoginPage.LoginPage => {
    const loginPage = data.loginPage!;
    const labels = data.configurableTexts!;

    const providers =
        loginPage.providersLabel && loginPage.providersTitle
            ? {
                  label: loginPage.providersLabel,
                  title: loginPage.providersTitle,
              }
            : undefined;

    return {
        createdAt: loginPage.createdAt,
        updatedAt: loginPage.updatedAt,
        publishedAt: loginPage.publishedAt,
        signIn: loginPage.signIn,
        subtitle: loginPage.subtitle,
        title: loginPage.title,
        providers,
        username: {
            id: loginPage.username.id,
            name: loginPage.username.name,
            label: loginPage.username.label,
            placeholder: loginPage.username.placeholder,
            errorMessages: loginPage.username.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        password: {
            id: loginPage.password.id,
            name: loginPage.password.name,
            label: loginPage.password.label,
            placeholder: loginPage.password.placeholder,
            errorMessages: loginPage.password.errorMessages?.map((errorMessage) => ({
                id: errorMessage.id,
                description: errorMessage.description,
                name: errorMessage.name,
                type: errorMessage.type,
            })),
        },
        labels: labels.actions,
        image: {
            url: `${baseURL}${loginPage.image?.url}`,
            alt: loginPage.image?.alternativeText,
            width: loginPage.image?.width,
            height: loginPage.image?.height,
        },
        seo: {
            title: loginPage.SEO.title,
            description: loginPage.SEO.description,
            keywords: loginPage.SEO.keywords?.map((keyword) => keyword.keyword) || [],
            image: loginPage.SEO.image,
            noIndex: loginPage.SEO.noIndex,
            noFollow: loginPage.SEO.noFollow,
        },
        invalidCredentials: loginPage.invalidCredentials,
    };
};

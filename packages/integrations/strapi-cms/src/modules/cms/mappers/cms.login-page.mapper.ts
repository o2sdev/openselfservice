import { CMS } from '@o2s/framework/modules';

import { GetLoginPageQuery } from '@/generated/strapi';

import { mapFormField } from './cms.form-field.mapper';

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
        username: mapFormField(loginPage.username),
        password: mapFormField(loginPage.password),
        labels: labels.actions,
        image: loginPage.image
            ? {
                  url: `${baseURL}${loginPage.image.url}`,
                  alt: loginPage.image.alternativeText || '',
                  width: loginPage.image.width,
                  height: loginPage.image.height,
              }
            : undefined,
        seo: {
            title: loginPage.SEO.title,
            description: loginPage.SEO.description,
            keywords: loginPage.SEO.keywords?.map((keyword) => keyword.keyword) || [],
            image: loginPage.SEO.image
                ? {
                      url: `${baseURL}${loginPage.SEO.image.url}`,
                      alt: loginPage.SEO.image.alternativeText || '',
                      width: loginPage.SEO.image.width,
                      height: loginPage.SEO.image.height,
                  }
                : undefined,
            noIndex: loginPage.SEO.noIndex,
            noFollow: loginPage.SEO.noFollow,
        },
        invalidCredentials: loginPage.invalidCredentials,
    };
};

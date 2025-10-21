import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetAppConfigQuery } from '@/generated/strapi';

import { mapMedia } from './cms.media.mapper';

export const mapAppConfig = (data: GetAppConfigQuery, baseUrl: string): CMS.Model.AppConfig.AppConfig => {
    const labels = data.configurableTexts!;
    const component = data.appConfig!;
    const locales = data.i18NLocales;

    if (!component) {
        throw new NotFoundException();
    }

    return {
        locales: locales.map((locale) => ({
            value: locale.code!,
            label: locale.code!.toUpperCase(),
        })),
        header: component.header?.documentId,
        footer: component.footer?.documentId,
        labels: labels,
        themes: component.themes.reduce((prev, theme) => {
            return {
                ...prev,
                [theme.name]: {
                    name: theme.name,
                    logo: mapMedia(theme.logo, baseUrl),
                },
            };
        }, {}),
    };
};

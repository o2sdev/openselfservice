import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetAppConfigQuery } from '@/generated/contentful';

import { mapMedia } from './cms.media.mapper';

export const mapAppConfig = (
    data: GetAppConfigQuery,
    locales: Array<{ value: string; label: string }> = [],
    baseUrl?: string,
): CMS.Model.AppConfig.AppConfig => {
    const appConfig = data.appConfigCollection?.items?.[0];
    const configurableTexts = data.configurableTexts?.items?.[0];

    if (!appConfig || !configurableTexts) {
        throw new NotFoundException('AppConfig not found in Contentful.');
    }

    return {
        locales,
        header: appConfig.signedInHeader?.sys.id,
        footer: appConfig.signedInFooter?.sys.id,
        labels: {
            errors: {
                requestError: {
                    title: configurableTexts.errors?.requestError?.title || '',
                    content: configurableTexts.errors?.requestError?.content,
                },
            },
            dates: {
                today: configurableTexts.dates?.today || '',
                yesterday: configurableTexts.dates?.yesterday || '',
            },
            actions: {
                showMore: configurableTexts.actions?.showMore || '',
                showLess: configurableTexts.actions?.showLess || '',
                show: configurableTexts.actions?.show || '',
                hide: configurableTexts.actions?.hide || '',
                edit: configurableTexts.actions?.edit || '',
                save: configurableTexts.actions?.save || '',
                cancel: configurableTexts.actions?.cancel || '',
                delete: configurableTexts.actions?.delete || '',
                logOut: configurableTexts.actions?.logOut || '',
                settings: configurableTexts.actions?.settings || '',
                renew: configurableTexts.actions?.renew || '',
                details: configurableTexts.actions?.details || '',
            },
        },
        themes:
            appConfig.themesCollection?.items.reduce((prev, theme) => {
                if (!theme.name) return prev;
                return {
                    ...prev,
                    [theme.name]: {
                        name: theme.name,
                        logo: mapMedia(theme.logo, baseUrl),
                    },
                };
            }, {} as CMS.Model.AppConfig.Themes) || {},
    };
};

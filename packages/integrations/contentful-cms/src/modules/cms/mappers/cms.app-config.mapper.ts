import { CMS } from '@o2s/framework/modules';

const APP_CONFIG_EN: CMS.Model.AppConfig.AppConfig = {
    locales: [
        {
            value: 'en',
            label: 'EN',
        },
        {
            value: 'de',
            label: 'DE',
        },
        {
            value: 'pl',
            label: 'PL',
        },
    ],
    header: 'fqj6nnyk4irqq5b7rnc4ogsj',
    footer: 'footer-1',
};

const APP_CONFIG_DE: CMS.Model.AppConfig.AppConfig = {
    locales: [
        {
            value: 'en',
            label: 'EN',
        },
        {
            value: 'de',
            label: 'DE',
        },
        {
            value: 'pl',
            label: 'PL',
        },
    ],
    header: 'fqj6nnyk4irqq5b7rnc4ogsj',
    footer: 'footer-1',
};

const APP_CONFIG_PL: CMS.Model.AppConfig.AppConfig = {
    locales: [
        {
            value: 'en',
            label: 'EN',
        },
        {
            value: 'de',
            label: 'DE',
        },
        {
            value: 'pl',
            label: 'PL',
        },
    ],
    header: 'fqj6nnyk4irqq5b7rnc4ogsj',
    footer: 'footer-1',
};

export const mapAppConfig = (_referrer: string, locale: string): CMS.Model.AppConfig.AppConfig => {
    switch (locale) {
        case 'en':
            return APP_CONFIG_EN;
        case 'de':
            return APP_CONFIG_DE;
        case 'pl':
            return APP_CONFIG_PL;
    }

    return APP_CONFIG_EN;
};

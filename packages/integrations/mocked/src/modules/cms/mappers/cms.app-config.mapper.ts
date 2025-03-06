import { CMS } from '@o2s/framework/modules';

const APP_CONFIG_EN: CMS.Model.AppConfig.AppConfig = {
    signedOut: {
        header: 'lwvbmnaayn6w7xy5soicv1k2',
        footer: 'footer-1',
    },
    signedIn: {
        header: 'fqj6nnyk4irqq5b7rnc4ogsj',
        footer: 'footer-2',
    },
};

const APP_CONFIG_DE: CMS.Model.AppConfig.AppConfig = {
    signedOut: {
        header: 'lwvbmnaayn6w7xy5soicv1k2',
        footer: 'footer-1',
    },
    signedIn: {
        header: 'fqj6nnyk4irqq5b7rnc4ogsj',
        footer: 'footer-2',
    },
};

const APP_CONFIG_PL: CMS.Model.AppConfig.AppConfig = {
    signedOut: {
        header: 'lwvbmnaayn6w7xy5soicv1k2',
        footer: 'footer-1',
    },
    signedIn: {
        header: 'fqj6nnyk4irqq5b7rnc4ogsj',
        footer: 'footer-2',
    },
};

export const mapAppConfig = (locale: string): CMS.Model.AppConfig.AppConfig => {
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

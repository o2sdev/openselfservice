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
    labels: {
        errors: {
            requestError: {
                title: 'Uh oh! Something went wrong.',
                content: 'There was a problem with your request.',
            },
        },
        dates: {
            today: 'Today',
            yesterday: 'Yesterday',
        },
        actions: {
            showMore: 'Show more',
            showLess: 'Show less',
            show: 'Show',
            hide: 'Hide',
            edit: 'Edit',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            logOut: 'Log out',
            settings: 'Settings',
            renew: 'Renew',
            details: 'Details',
        },
    },
    themes: {
        default: {
            name: 'default',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
        personal: {
            name: 'personal',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
        business: {
            name: 'business',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_business.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
    },
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
    labels: {
        errors: {
            requestError: {
                title: 'Ups! Etwas ist schief gelaufen.',
                content: 'Es gab ein Problem mit Ihrer Anfrage.',
            },
        },
        dates: {
            today: 'Dzisiaj',
            yesterday: 'Wczoraj',
        },
        actions: {
            showMore: 'Mehr anzeigen',
            showLess: 'Weniger anzeigen',
            show: 'Anzeigen',
            hide: 'Verstecken',
            edit: 'Bearbeiten',
            save: 'Speichern',
            cancel: 'Abbrechen',
            delete: 'Löschen',
            logOut: 'Abmelden',
            settings: 'Einstellungen',
            renew: 'Erneuern',
            details: 'Details',
        },
    },
    themes: {
        default: {
            name: 'default',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
        personal: {
            name: 'personal',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
        business: {
            name: 'business',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_business.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
    },
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
    labels: {
        errors: {
            requestError: {
                title: 'Ups! Coś poszło nie tak.',
                content: 'Wystąpił problem z Twoim żądaniem.',
            },
        },
        dates: {
            today: 'Heute',
            yesterday: 'Gestern',
        },
        actions: {
            showMore: 'Pokaż więcej',
            showLess: 'Pokaż mniej',
            show: 'Rozwiń',
            hide: 'Zwiń',
            edit: 'Edytuj',
            save: 'Zapisz',
            cancel: 'Cofnij',
            delete: 'Usuń',
            logOut: 'Wyloguj',
            settings: 'Ustawienia',
            renew: 'Odnów',
            details: 'Szczegóły',
        },
    },
    themes: {
        default: {
            name: 'default',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
        personal: {
            name: 'personal',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
        business: {
            name: 'business',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_business.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
        },
    },
};

export const mapAppConfig = (locale: string, _referrer?: string): CMS.Model.AppConfig.AppConfig => {
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

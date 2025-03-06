import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
    root: '#cc-root',
    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom left',
            equalWeightButtons: true,
            flipButtons: false,
        },
        preferencesModal: {
            layout: 'box',
            position: 'left',
            equalWeightButtons: true,
            flipButtons: false,
        },
    },

    categories: {
        necessary: {
            readOnly: true,
            enabled: true,
        },
        analytics: {},
    },

    language: {
        default: 'en',

        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies.',
                    description:
                        'Our website uses analytical cookies to understand how you interact with it. The features will be enabled only if you accept explicitly. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage preferences',
                    //closeIconLabel: 'Close',
                    footer: `<a href="https://hycom.digital/privacy-policy">Privacy Policy</a>`,
                },
                preferencesModal: {
                    title: 'Cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Save preferences',
                    closeIconLabel: 'Close',
                    sections: [
                        {
                            title: 'Cookie Usage',
                            description:
                                'We use cookies to provide basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.',
                        },
                        {
                            title: 'Strictly necessary cookies',
                            description:
                                'Necessary cookies are required to enable the basic features of this site, such as adjusting your cookie consent preferences. These cookies do not store any personally identifiable data.',
                            linkedCategory: 'necessary',
                        },
                        {
                            title: 'Performance and Analytics cookies',
                            description: 'Cookies used to gather user behaviour and website performance related data.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                headers: {
                                    name: 'Name',
                                    domain: 'Service',
                                    description: 'Description',
                                    expiration: 'Expiration',
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: 'Google Analytics',
                                        description: 'Cookie set by <b>Google Analytics</b>.',
                                        expiration: 'Expires after 2 years',
                                    },
                                    {
                                        name: '_ga_&lt;container-id&gt;',
                                        domain: 'Google Analytics',
                                        description: 'Cookie set by <b>Google Analytics</b>',
                                        expiration: 'Expires after 2 years',
                                    },
                                ],
                            },
                        },
                        // {
                        //     title: 'More information',
                        //     description:
                        //         'For any queries in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
                        // },
                    ],
                },
            },
        },
    },
};

export default pluginConfig;

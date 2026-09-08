import { CMS } from '@o2s/framework/modules';

export const contactUsPage = CMS.Pages.definePage({
    id: '9',
    locales: {
        en: { slug: '/contact-us', seo: { title: 'Contact us', description: 'Contact us' } },
        pl: {
            slug: '/skontaktuj-sie-z-nami',
            seo: { title: 'Skontaktuj się z nami', description: 'Skontaktuj się z nami' },
        },
        de: { slug: '/kontaktiere-uns', seo: { title: 'Kontaktiere uns', description: 'Kontaktiere uns' } },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'SurveyJsBlock', id: 'survey-1' }] } },
});

export const complaintFormPage = CMS.Pages.definePage({
    id: '10',
    locales: {
        en: { slug: '/submit-complaint', seo: { title: 'Submit a complaint', description: 'Submit a complaint' } },
        pl: { slug: '/wyslij-reklamacje', seo: { title: 'Wyslij reklamacje', description: 'Wyslij reklamacje' } },
        de: {
            slug: '/einreichen-reklamacji',
            seo: { title: 'Beschwerdeformular einreichen', description: 'Beschwerdeformular einreichen' },
        },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'SurveyJsBlock', id: 'survey-2' }] } },
});

export const requestDeviceMaintenancePage = CMS.Pages.definePage({
    id: '12',
    locales: {
        en: {
            slug: '/request-device-maintenance',
            seo: { title: 'Request device maintenance', description: 'Request device maintenance' },
        },
        pl: {
            slug: '/zglos-naprawe-urzadzenia',
            seo: { title: 'Zgłoś naprawę urządzenia', description: 'Zgłoś naprawę urządzenia' },
        },
        de: {
            slug: '/geratewartungsanfrage',
            seo: { title: 'Gerätewartungsanfrage', description: 'Gerätewartungsanfrage' },
        },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'SurveyJsBlock', id: 'survey-3' }] } },
});

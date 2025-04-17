import { CMS } from '@o2s/framework/modules';

import {
    PAGE_WARRANTY_AND_REPAIR_DE,
    PAGE_WARRANTY_AND_REPAIR_EN,
    PAGE_WARRANTY_AND_REPAIR_PL,
} from './mocks/pages/category.page';
import { PAGE_DASHBOARD_DE, PAGE_DASHBOARD_EN, PAGE_DASHBOARD_PL } from './mocks/pages/dashboard.page';
import { PAGE_INVOICE_LIST_DE, PAGE_INVOICE_LIST_EN, PAGE_INVOICE_LIST_PL } from './mocks/pages/invoice-list.page';
import {
    PAGE_HELP_AND_SUPPORT_DE,
    PAGE_HELP_AND_SUPPORT_EN,
    PAGE_HELP_AND_SUPPORT_PL,
} from './mocks/pages/knowledge-base.page';
import {
    PAGE_NOTIFICATION_DETAILS_DE,
    PAGE_NOTIFICATION_DETAILS_EN,
    PAGE_NOTIFICATION_DETAILS_PL,
} from './mocks/pages/notification-details.page';
import {
    PAGE_NOTIFICATION_LIST_DE,
    PAGE_NOTIFICATION_LIST_EN,
    PAGE_NOTIFICATION_LIST_PL,
} from './mocks/pages/notification-list.page';
import {
    PAGE_SERVICE_DETAILS_DE,
    PAGE_SERVICE_DETAILS_EN,
    PAGE_SERVICE_DETAILS_PL,
} from './mocks/pages/service-details.page';
import { PAGE_SERVICE_LIST_DE, PAGE_SERVICE_LIST_EN, PAGE_SERVICE_LIST_PL } from './mocks/pages/service-list.page';
import {
    PAGE_TICKET_DETAILS_DE,
    PAGE_TICKET_DETAILS_EN,
    PAGE_TICKET_DETAILS_PL,
} from './mocks/pages/ticket-details.page';
import { PAGE_TICKET_LIST_DE, PAGE_TICKET_LIST_EN, PAGE_TICKET_LIST_PL } from './mocks/pages/ticket-list.page';
import { PAGE_USER_ACCOUNT_DE, PAGE_USER_ACCOUNT_EN, PAGE_USER_ACCOUNT_PL } from './mocks/pages/user-account.page';

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => {
    switch (slug) {
        case '/':
            return locale === 'pl' ? PAGE_DASHBOARD_PL : locale === 'de' ? PAGE_DASHBOARD_DE : PAGE_DASHBOARD_EN;

        case '/zgloszenia':
            return PAGE_TICKET_LIST_PL;

        case '/faelle':
            return PAGE_TICKET_LIST_DE;

        case '/cases':
            return PAGE_TICKET_LIST_EN;

        case slug.match(/\/cases\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS_EN,
                slug: `/cases/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/faelle\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS_DE,
                slug: `/faelle/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/zgloszenia\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS_PL,
                slug: `/zgloszenia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/notifications':
            return PAGE_NOTIFICATION_LIST_EN;
        case '/benachrichtigungen':
            return PAGE_NOTIFICATION_LIST_DE;
        case '/powiadomienia':
            return PAGE_NOTIFICATION_LIST_PL;

        case slug.match(/\/notifications\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS_EN,
                slug: `/notifications/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case slug.match(/\/benachrichtigungen\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS_DE,
                slug: `/benachrichtigungen/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/powiadomienia\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS_PL,
                slug: `/powiadomienia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/invoices':
            return PAGE_INVOICE_LIST_EN;
        case '/rechnungen':
            return PAGE_INVOICE_LIST_DE;
        case '/rachunki':
            return PAGE_INVOICE_LIST_PL;

        case '/user-account':
            return PAGE_USER_ACCOUNT_EN;
        case '/benutzerkonto':
            return PAGE_USER_ACCOUNT_DE;
        case '/konto-uzytkownika':
            return PAGE_USER_ACCOUNT_PL;

        case '/services':
            return PAGE_SERVICE_LIST_EN;
        case '/dienstleistungen':
            return PAGE_SERVICE_LIST_DE;
        case '/uslugi':
            return PAGE_SERVICE_LIST_PL;

        case slug.match(/\/services\/.+/)?.[0]:
            return {
                ...PAGE_SERVICE_DETAILS_EN,
                slug: `/services/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/dienstleistungen\/.+/)?.[0]:
            return {
                ...PAGE_SERVICE_DETAILS_DE,
                slug: `/dienstleistungen/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/uslugi\/.+/)?.[0]:
            return {
                ...PAGE_SERVICE_DETAILS_PL,
                slug: `/uslugi/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/help-and-support':
            return PAGE_HELP_AND_SUPPORT_EN;
        case '/hilfe-und-support':
            return PAGE_HELP_AND_SUPPORT_DE;
        case '/pomoc-i-wsparcie':
            return PAGE_HELP_AND_SUPPORT_PL;

        case '/help-and-support/warranty-and-repair':
            return PAGE_WARRANTY_AND_REPAIR_EN;
        case '/hilfe-und-support/garantie-und-reparaturt':
            return PAGE_WARRANTY_AND_REPAIR_DE;
        case '/pomoc-i-wsparcie/gwarancja-i-naprawa':
            return PAGE_WARRANTY_AND_REPAIR_PL;

        case '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online':
            return PAGE_SERVICE_LIST_EN;
        case '/hilfe-und-support/garantie-und-reparaturt/verwalten-ihrer-powerpro-werkzeuge-online':
            return PAGE_SERVICE_LIST_DE;
        case '/pomoc-i-wsparcie/gwarancja-i-naprawa/zarzadzanie-narzedziami-powerpro-online':
            return PAGE_SERVICE_LIST_PL;

        default:
            return undefined;
    }
};

export const getAllPages = (locale: string): CMS.Model.Page.Page[] => {
    switch (locale) {
        case 'pl':
            return [
                PAGE_DASHBOARD_PL,
                PAGE_TICKET_LIST_PL,
                PAGE_TICKET_DETAILS_PL,
                PAGE_NOTIFICATION_LIST_PL,
                PAGE_NOTIFICATION_DETAILS_PL,
                PAGE_INVOICE_LIST_PL,
                PAGE_USER_ACCOUNT_PL,
                PAGE_SERVICE_LIST_PL,
                PAGE_SERVICE_DETAILS_PL,
            ];
        case 'de':
            return [
                PAGE_DASHBOARD_DE,
                PAGE_TICKET_LIST_DE,
                PAGE_TICKET_DETAILS_DE,
                PAGE_NOTIFICATION_LIST_DE,
                PAGE_NOTIFICATION_DETAILS_DE,
                PAGE_INVOICE_LIST_DE,
                PAGE_USER_ACCOUNT_DE,
                PAGE_SERVICE_LIST_DE,
                PAGE_SERVICE_DETAILS_DE,
            ];
        case 'en':
            return [
                PAGE_DASHBOARD_EN,
                PAGE_TICKET_LIST_EN,
                PAGE_TICKET_DETAILS_EN,
                PAGE_NOTIFICATION_LIST_EN,
                PAGE_NOTIFICATION_DETAILS_EN,
                PAGE_INVOICE_LIST_EN,
                PAGE_USER_ACCOUNT_EN,
                PAGE_SERVICE_LIST_EN,
                PAGE_SERVICE_DETAILS_EN,
            ];
        default:
            return [];
    }
};

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] => {
    return [
        PAGE_DASHBOARD_PL,
        PAGE_TICKET_LIST_PL,
        PAGE_TICKET_DETAILS_PL,
        PAGE_NOTIFICATION_LIST_PL,
        PAGE_NOTIFICATION_DETAILS_PL,
        PAGE_INVOICE_LIST_PL,
        PAGE_USER_ACCOUNT_PL,
        PAGE_SERVICE_LIST_PL,
        PAGE_DASHBOARD_DE,
        PAGE_TICKET_LIST_DE,
        PAGE_TICKET_DETAILS_DE,
        PAGE_NOTIFICATION_LIST_DE,
        PAGE_NOTIFICATION_DETAILS_DE,
        PAGE_INVOICE_LIST_DE,
        PAGE_USER_ACCOUNT_DE,
        PAGE_SERVICE_LIST_DE,
        PAGE_DASHBOARD_EN,
        PAGE_TICKET_LIST_EN,
        PAGE_TICKET_DETAILS_EN,
        PAGE_NOTIFICATION_LIST_EN,
        PAGE_NOTIFICATION_DETAILS_EN,
        PAGE_INVOICE_LIST_EN,
        PAGE_USER_ACCOUNT_EN,
        PAGE_SERVICE_LIST_EN,
        PAGE_SERVICE_DETAILS_EN,
        PAGE_SERVICE_DETAILS_DE,
        PAGE_SERVICE_DETAILS_PL,
    ]
        .filter((page) => page.id === id)
        .map((page) => mapPage(page.slug, locale)!)
        .map((page) => {
            return {
                ...page,
                slug: page.slug.replace('(.+)', slug.match(/(.+)\/(.+)/)?.[2] || ''),
            };
        });
};

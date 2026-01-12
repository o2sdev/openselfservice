import { NotFoundException } from '@nestjs/common';

import { CMS, Models } from '@o2s/framework/modules';

import {
    ComponentBaseFragment,
    OneColumnTemplateFragment,
    PageFragment,
    SeoFragment,
    TwoColumnTemplateFragment,
} from '@/generated/contentful';

import {
    PAGE_ACCESSORIES_DE,
    PAGE_ACCESSORIES_EN,
    PAGE_ACCESSORIES_PL,
    PAGE_MAINTENANCE_DE,
    PAGE_MAINTENANCE_EN,
    PAGE_MAINTENANCE_PL,
    PAGE_SAFETY_DE,
    PAGE_SAFETY_EN,
    PAGE_SAFETY_PL,
    PAGE_TROUBLESHOOTING_DE,
    PAGE_TROUBLESHOOTING_EN,
    PAGE_TROUBLESHOOTING_PL,
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
import { PAGE_ORDER_DETAILS_DE, PAGE_ORDER_DETAILS_EN, PAGE_ORDER_DETAILS_PL } from './mocks/pages/order-details.page';
import { PAGE_ORDER_LIST_DE, PAGE_ORDER_LIST_EN, PAGE_ORDER_LIST_PL } from './mocks/pages/order-list.page';
import {
    PAGE_SERVICE_DETAILS_DE,
    PAGE_SERVICE_DETAILS_EN,
    PAGE_SERVICE_DETAILS_PL,
} from './mocks/pages/service-details.page';
import { PAGE_SERVICE_LIST_DE, PAGE_SERVICE_LIST_EN, PAGE_SERVICE_LIST_PL } from './mocks/pages/service-list.page';
import {
    PAGE_COMPLAINT_FORM_DE,
    PAGE_COMPLAINT_FORM_EN,
    PAGE_COMPLAINT_FORM_PL,
    PAGE_CONTACT_US_DE,
    PAGE_CONTACT_US_EN,
    PAGE_CONTACT_US_PL,
    PAGE_REQUEST_DEVICE_MAINTENANCE_DE,
    PAGE_REQUEST_DEVICE_MAINTENANCE_EN,
    PAGE_REQUEST_DEVICE_MAINTENANCE_PL,
} from './mocks/pages/surveyjs-forms.page';
import {
    PAGE_TICKET_DETAILS_DE,
    PAGE_TICKET_DETAILS_EN,
    PAGE_TICKET_DETAILS_PL,
} from './mocks/pages/ticket-details.page';
import { PAGE_TICKET_LIST_DE, PAGE_TICKET_LIST_EN, PAGE_TICKET_LIST_PL } from './mocks/pages/ticket-list.page';
import { PAGE_USER_ACCOUNT_DE, PAGE_USER_ACCOUNT_EN, PAGE_USER_ACCOUNT_PL } from './mocks/pages/user-account.page';

export const mapMockPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => {
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
        case '/orders':
            return PAGE_ORDER_LIST_EN;
        case '/bestellungen':
            return PAGE_ORDER_LIST_DE;
        case '/zamowienia':
            return PAGE_ORDER_LIST_PL;

        case slug.match(/\/orders\/.+/)?.[0]:
            return {
                ...PAGE_ORDER_DETAILS_EN,
                slug: `/orders/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/bestellungen\/.+/)?.[0]:
            return {
                ...PAGE_ORDER_DETAILS_DE,
                slug: `/bestellungen/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/zamowienia\/.+/)?.[0]:
            return {
                ...PAGE_ORDER_DETAILS_PL,
                slug: `/zamowienia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/contact-us':
            return PAGE_CONTACT_US_EN;
        case '/kontaktiere-uns':
            return PAGE_CONTACT_US_DE;
        case '/skontaktuj-sie-z-nami':
            return PAGE_CONTACT_US_PL;

        case '/submit-complaint':
            return PAGE_COMPLAINT_FORM_EN;
        case '/einreichen-reklamacji':
            return PAGE_COMPLAINT_FORM_DE;
        case '/wyslij-reklamacje':
            return PAGE_COMPLAINT_FORM_PL;

        case '/request-device-maintenance':
            return PAGE_REQUEST_DEVICE_MAINTENANCE_EN;
        case '/geratewartungsanfrage':
            return PAGE_REQUEST_DEVICE_MAINTENANCE_DE;
        case '/zglos-naprawe-urzadzenia':
            return PAGE_REQUEST_DEVICE_MAINTENANCE_PL;

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

        case '/help-and-support/maintenance':
            return PAGE_MAINTENANCE_EN;
        case '/hilfe-und-support/wartung':
            return PAGE_MAINTENANCE_DE;
        case '/pomoc-i-wsparcie/konserwacja':
            return PAGE_MAINTENANCE_PL;

        case '/help-and-support/safety':
            return PAGE_SAFETY_EN;
        case '/hilfe-und-support/sicherheit':
            return PAGE_SAFETY_DE;
        case '/pomoc-i-wsparcie/bezpieczenstwo':
            return PAGE_SAFETY_PL;

        case '/help-and-support/accessories':
            return PAGE_ACCESSORIES_EN;
        case '/hilfe-und-support/zubehoer':
            return PAGE_ACCESSORIES_DE;
        case '/pomoc-i-wsparcie/akcesoria':
            return PAGE_ACCESSORIES_PL;

        case '/help-and-support/troubleshooting':
            return PAGE_TROUBLESHOOTING_EN;
        case '/hilfe-und-support/fehlerbehebung':
            return PAGE_TROUBLESHOOTING_DE;
        case '/pomoc-i-wsparcie/rozwiązywanie-problemów':
            return PAGE_TROUBLESHOOTING_PL;

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
                PAGE_CONTACT_US_PL,
                PAGE_COMPLAINT_FORM_PL,
                PAGE_REQUEST_DEVICE_MAINTENANCE_PL,
                PAGE_ORDER_LIST_PL,
                PAGE_ORDER_DETAILS_PL,
                PAGE_WARRANTY_AND_REPAIR_PL,
                PAGE_MAINTENANCE_PL,
                PAGE_SAFETY_PL,
                PAGE_ACCESSORIES_PL,
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
                PAGE_CONTACT_US_DE,
                PAGE_COMPLAINT_FORM_DE,
                PAGE_REQUEST_DEVICE_MAINTENANCE_DE,
                PAGE_ORDER_LIST_DE,
                PAGE_ORDER_DETAILS_DE,
                PAGE_WARRANTY_AND_REPAIR_DE,
                PAGE_MAINTENANCE_DE,
                PAGE_SAFETY_DE,
                PAGE_ACCESSORIES_DE,
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
                PAGE_CONTACT_US_EN,
                PAGE_COMPLAINT_FORM_EN,
                PAGE_REQUEST_DEVICE_MAINTENANCE_EN,
                PAGE_ORDER_LIST_EN,
                PAGE_ORDER_DETAILS_EN,
                PAGE_WARRANTY_AND_REPAIR_EN,
                PAGE_MAINTENANCE_EN,
                PAGE_SAFETY_EN,
                PAGE_ACCESSORIES_EN,
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
        PAGE_CONTACT_US_EN,
        PAGE_CONTACT_US_DE,
        PAGE_CONTACT_US_PL,
        PAGE_COMPLAINT_FORM_EN,
        PAGE_COMPLAINT_FORM_DE,
        PAGE_COMPLAINT_FORM_PL,
        PAGE_REQUEST_DEVICE_MAINTENANCE_EN,
        PAGE_REQUEST_DEVICE_MAINTENANCE_DE,
        PAGE_REQUEST_DEVICE_MAINTENANCE_PL,
        PAGE_ORDER_LIST_EN,
        PAGE_ORDER_LIST_DE,
        PAGE_ORDER_LIST_PL,
        PAGE_ORDER_DETAILS_EN,
        PAGE_ORDER_DETAILS_DE,
        PAGE_ORDER_DETAILS_PL,
        PAGE_WARRANTY_AND_REPAIR_EN,
        PAGE_WARRANTY_AND_REPAIR_DE,
        PAGE_WARRANTY_AND_REPAIR_PL,
        PAGE_MAINTENANCE_EN,
        PAGE_MAINTENANCE_DE,
        PAGE_MAINTENANCE_PL,
        PAGE_SAFETY_EN,
        PAGE_SAFETY_DE,
        PAGE_SAFETY_PL,
        PAGE_ACCESSORIES_EN,
        PAGE_ACCESSORIES_DE,
        PAGE_ACCESSORIES_PL,
    ]
        .filter((page) => page.id === id)
        .map((page) => mapMockPage(page.slug, locale)!)
        .map((page) => {
            return {
                ...page,
                slug: page.slug.replace('(.+)', slug.match(/(.+)\/(.+)/)?.[2] || ''),
            };
        });
};

export const mapPage = (entryPage: PageFragment): CMS.Model.Page.Page => {
    const template = mapTemplate(entryPage.template);

    if (!template) throw new NotFoundException();

    const seo = mapSeo(entryPage.seo);

    return {
        id: entryPage.sys.id,
        slug: entryPage.slug || '',
        // TODO: map permissions
        // permissions: mapRoles(entryPage.permissions),
        locale: entryPage.sys.locale || process.env.DEFAULT_LOCALE!,
        template: template,
        updatedAt: entryPage.sys.publishedAt,
        createdAt: entryPage.sys.publishedAt,
        seo: seo,
        hasOwnTitle: !!entryPage.hasOwnTitle,
        parent: entryPage.parent
            ? {
                  slug: entryPage.parent.slug ?? '',
                  seo: mapSeo(entryPage.parent.seo),
                  parent: entryPage.parent.parent
                      ? {
                            slug: entryPage.parent.parent.slug ?? '',
                            seo: mapSeo(entryPage.parent.parent.seo),
                            parent: entryPage.parent.parent.parent
                                ? {
                                      slug: entryPage.parent.parent.parent.slug ?? '',
                                      seo: mapSeo(entryPage.parent.parent.parent.seo),
                                  }
                                : undefined,
                        }
                      : undefined,
              }
            : undefined,
    };
};

const mapSeo = (seo?: SeoFragment): Models.SEO.Page => {
    if (!seo) throw new NotFoundException();

    return {
        title: seo.title ?? '',
        noIndex: seo.noIndex ?? false,
        noFollow: seo.noFollow ?? false,
        description: seo.description ?? '',
        keywords: seo.keywords || [],
        image: seo.image
            ? {
                  url: seo.image.url || '',
                  alt: seo.image.description || '',
                  width: seo.image.width || undefined,
                  height: seo.image.height || undefined,
              }
            : undefined,
    };
};

const mapTemplate = (template?: OneColumnTemplateFragment | TwoColumnTemplateFragment): CMS.Model.Page.PageTemplate => {
    if (!template) throw new NotFoundException();

    switch (template.__typename) {
        case 'PageOneColumnTemplate':
            return {
                __typename: 'OneColumnTemplate',
                slots: {
                    main: mapSlot(template.mainSlotCollection?.items),
                },
            };
        case 'PageTwoColumnTemplate':
            return {
                __typename: 'TwoColumnTemplate',
                slots: {
                    top: mapSlot(template.topSlotCollection?.items),
                    left: mapSlot(template.leftSlotCollection?.items),
                    right: mapSlot(template.rightSlotCollection?.items),
                    bottom: mapSlot(template.bottomSlotCollection?.items),
                },
            };
    }
};

const mapSlot = (slot?: ComponentBaseFragment[]): CMS.Model.Page.SlotBlock[] => {
    if (!slot) {
        return [];
    }

    return slot.reduce((acc, component) => {
        const __typename = mapComponent(component);

        if (!__typename) return acc;

        return [
            ...acc,
            {
                __typename,
                id: component.sys.id,
                layout: mapLayout(component),
            },
        ];
    }, [] as CMS.Model.Page.SlotBlock[]);
};

const mapLayout = ({ spacing, background, variant, theme }: ComponentBaseFragment): CMS.Model.Page.LayoutSection => {
    return {
        spacing: spacing as CMS.Model.Page.LayoutSection['spacing'],
        background: background as CMS.Model.Page.LayoutSection['background'],
        variant: variant as CMS.Model.Page.LayoutSection['variant'],
        theme: theme as CMS.Model.Page.LayoutSection['theme'],
    };
};

// TODO: check where component names should be defined, currently they are placed in the api-harmonization so we cannot access them here
const mapComponent = (component: ComponentBaseFragment) => {
    switch (component.content?.__typename) {
        case 'BlockFaq':
            return 'FaqBlock';
        case 'BlockTicketList':
            return 'TicketListBlock';
        case 'BlockQuickLinks':
            return 'QuickLinksBlock';
        case 'BlockCategoryList':
            return 'CategoryListBlock';
        case 'BlockArticleList':
            return 'ArticleListBlock';
    }
};

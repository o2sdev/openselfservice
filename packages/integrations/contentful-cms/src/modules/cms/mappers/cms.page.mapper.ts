import { NotFoundException } from '@nestjs/common';
import { Entry } from 'contentful';

import { CMS, Models } from '@o2s/framework/modules';

import { IBlockFaq, IBlockTicketList, IPageFields, IPageOneColumnTemplate, IPageSeo } from '@/generated/contentful';

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
    PAGE_WARRANTY_AND_REPAIR_DE,
    PAGE_WARRANTY_AND_REPAIR_EN,
    PAGE_WARRANTY_AND_REPAIR_PL,
} from './mocks/pages/category.page';
import { PAGE_DASHBOARD_DE, PAGE_DASHBOARD_EN, PAGE_DASHBOARD_PL } from './mocks/pages/dashboard.page';
import { PAGE_INVOICE_LIST_DE, PAGE_INVOICE_LIST_EN, PAGE_INVOICE_LIST_PL } from './mocks/pages/invoice-list.page';
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

export type IBlocks = IBlockTicketList | IBlockFaq;

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

export const mapPage = (entryPage: Entry<IPageFields>): CMS.Model.Page.Page => {
    const template = mapTemplate(entryPage.fields.template);

    if (!template) throw new NotFoundException();

    const seo = mapSeo(entryPage.fields.seo);

    return {
        id: entryPage.sys.id,
        slug: entryPage.fields.slug,
        locale: entryPage.sys.locale,
        template: template,
        updatedAt: entryPage.sys.updatedAt,
        createdAt: entryPage.sys.createdAt,
        seo: seo,
        hasOwnTitle: entryPage.fields.hasOwnTitle,
        parent: {
            slug: entryPage.fields.parent?.fields.slug ?? '',
            seo: mapSeo(entryPage.fields.parent?.fields.seo),
            parent: entryPage.fields.parent?.fields.parent
                ? {
                      slug: entryPage.fields.parent?.fields.parent?.fields.slug ?? '',
                      seo: mapSeo(entryPage.fields.parent?.fields.parent?.fields.seo),
                      parent: entryPage.fields.parent?.fields.parent?.fields.parent
                          ? {
                                slug: entryPage.fields.parent?.fields.parent?.fields.parent?.fields.slug ?? '',
                                seo: mapSeo(entryPage.fields.parent?.fields.parent?.fields.parent?.fields.seo),
                            }
                          : undefined,
                  }
                : undefined,
        },
    };
};

const mapSeo = (seo?: IPageSeo | undefined): Models.SEO.Page => {
    if (!seo) throw new NotFoundException();

    return {
        title: seo.fields.title ?? '',
        noIndex: seo.fields.noIndex ?? false,
        noFollow: seo.fields.noFollow ?? false,
        description: seo.fields.description ?? '',
        keywords: seo.fields.keywords || [],
        // TODO: implement image
        // image: seo?.fields.image,
    };
};

const mapTemplate = (template?: IPageOneColumnTemplate): CMS.Model.Page.PageTemplate => {
    if (!template) throw new NotFoundException();

    switch (template.sys.contentType.sys.id) {
        case 'pageOneColumnTemplate':
            return {
                __typename: 'OneColumnTemplate',
                slots: {
                    main: mapSlot(template.fields.mainSlot),
                },
            };
        // TODO: add two column template
        // case 'pageTwoColumnTemplate':
        //     return {
        //         __typename: 'TwoColumnTemplate',
        //         slots: {
        //             top: mapSlot(template.fields.topSlot),
        //             left: mapSlot(template.fields.leftSlot),
        //             right: mapSlot(template.fields.rightSlot),
        //             bottom: mapSlot(template.fields.bottomSlot),
        //         },
        //     };
    }
};

const mapSlot = (slot: IBlocks[]): CMS.Model.Page.SlotBlock[] => {
    return slot.reduce((acc, component) => {
        const __typename = mapComponent(component);

        if (!__typename) return acc;

        return [
            ...acc,
            {
                __typename,
                id: component.sys.id,
            },
        ];
    }, [] as CMS.Model.Page.SlotBlock[]);
};

// TODO: check where component names should be defined, currently they are placed in the api-harmonization so we cannot access them here
const mapComponent = (component: IBlocks) => {
    switch (component.sys.contentType.sys.id) {
        case 'blockFaq':
            return 'FaqBlock';
        case 'blockTicketList':
            return 'TicketListBlock';
    }
};

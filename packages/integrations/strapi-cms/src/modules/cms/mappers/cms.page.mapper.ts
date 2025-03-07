import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { ComponentFragment, PageFragment, TemplateFragment } from '@/generated/strapi';

export const mapPage = (data: PageFragment): CMS.Model.Page.Page => {
    const template = mapTemplate(data.template[0]);

    if (!template) throw new NotFoundException();

    return {
        id: data.documentId,
        slug: data.slug,
        locale: data.locale!,
        template: template,
        updatedAt: data.updatedAt,
        seo: {
            title: data.SEO!.title,
            noIndex: data.SEO!.noIndex,
            noFollow: data.SEO!.noFollow,
            description: data.SEO!.description,
            keywords: data.SEO!.keywords?.map((keyword) => keyword.keyword) || [],
            image: data.SEO!.image,
        },
        hasOwnTitle: data.hasOwnTitle,
        parent: {
            slug: data.parent?.slug ?? '',
        },
    };
};

export const mapAlternativePages = (data: PageFragment): CMS.Model.Page.Page => {
    const template = mapTemplate(data.template[0]);

    if (!template) throw new NotFoundException();

    return {
        id: data.documentId,
        slug: data.slug,
        locale: data.locale!,
        template: template,
        updatedAt: data.updatedAt,
        seo: {
            title: data.SEO!.title,
            noIndex: data.SEO!.noIndex,
            noFollow: data.SEO!.noFollow,
            description: data.SEO!.description,
            keywords: data.SEO!.keywords?.map((keyword) => keyword.keyword) || [],
            image: data.SEO!.image,
        },
        hasOwnTitle: data.hasOwnTitle,
        parent: {
            slug: data.parent?.slug ?? '',
        },
    };
};

const mapTemplate = (template?: TemplateFragment): CMS.Model.Page.PageTemplate => {
    if (!template) throw new NotFoundException();

    switch (template.__typename) {
        case 'ComponentTemplatesOneColumn':
            return {
                __typename: 'OneColumnTemplate',
                slots: {
                    main: mapSlot(template.mainSlot),
                },
            };
        case 'ComponentTemplatesTwoColumn':
            return {
                __typename: 'TwoColumnTemplate',
                slots: {
                    top: mapSlot(template.topSlot),
                    left: mapSlot(template.leftSlot),
                    right: mapSlot(template.rightSlot),
                    bottom: mapSlot(template.bottomSlot),
                },
            };
    }

    throw new NotFoundException();
};

const mapSlot = (slot: ComponentFragment[]): CMS.Model.Page.SlotComponent[] => {
    return slot.reduce((acc, component) => {
        const __typename = mapComponent(component);

        if (!__typename) return acc;

        return [
            ...acc,
            {
                __typename,
                id: component.documentId,
            },
        ];
    }, [] as CMS.Model.Page.SlotComponent[]);
};

// TODO: check where component names should be defined, currently they are placed in the api-harmonization so we cannot access them here
const mapComponent = (component: ComponentFragment) => {
    switch (component.content[0]?.__typename) {
        case 'ComponentComponentsFaq':
            return 'FaqComponent';
        case 'ComponentComponentsTicketList':
            return 'TicketListComponent';
        case 'ComponentComponentsTicketDetails':
            return 'TicketDetailsComponent';
        case 'ComponentComponentsNotificationList':
            return 'NotificationListComponent';
        case 'ComponentComponentsNotificationDetails':
            return 'NotificationDetailsComponent';
        case 'ComponentComponentsInvoiceList':
            return 'InvoiceListComponent';
        case 'ComponentComponentsPaymentsSummary':
            return 'PaymentsSummaryComponent';
        case 'ComponentComponentsPaymentsHistory':
            return 'PaymentsHistoryComponent';
        case 'ComponentComponentsUserAccount':
            return 'UserAccountComponent';
    }
};

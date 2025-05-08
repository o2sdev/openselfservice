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
            image: data.SEO!.image
                ? {
                      ...data.SEO!.image,
                      alt: data.SEO!.image?.alternativeText || '',
                  }
                : undefined,
        },
        hasOwnTitle: data.hasOwnTitle,
        parent: {
            slug: data.parent?.slug ?? '',
            seo: {
                title: data.parent?.SEO!.title ?? '',
            },
            parent: {
                slug: data.parent?.parent?.slug ?? '',
                seo: {
                    title: data.parent?.parent?.SEO!.title ?? '',
                },
                parent: {
                    slug: data.parent?.parent?.parent?.slug ?? '',
                    seo: {
                        title: data.parent?.parent?.parent?.SEO!.title ?? '',
                    },
                },
            },
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
            image: data.SEO!.image
                ? {
                      ...data.SEO!.image,
                      alt: data.SEO!.image?.alternativeText || '',
                  }
                : undefined,
        },
        hasOwnTitle: data.hasOwnTitle,
        parent: {
            slug: data.parent?.slug ?? '',
            seo: {
                title: data.parent?.SEO!.title ?? '',
            },
            parent: {
                slug: data.parent?.parent?.slug ?? '',
                seo: {
                    title: data.parent?.parent?.SEO!.title ?? '',
                },
                parent: {
                    slug: data.parent?.parent?.parent?.slug ?? '',
                    seo: {
                        title: data.parent?.parent?.parent?.SEO!.title ?? '',
                    },
                },
            },
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

const mapSlot = (slot: ComponentFragment[]): CMS.Model.Page.SlotBlock[] => {
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
    }, [] as CMS.Model.Page.SlotBlock[]);
};

// TODO: check where component names should be defined, currently they are placed in the api-harmonization so we cannot access them here
const mapComponent = (component: ComponentFragment) => {
    switch (component.content[0]?.__typename) {
        case 'ComponentComponentsFaq':
            return 'FaqBlock';
        case 'ComponentComponentsTicketList':
            return 'TicketListBlock';
        case 'ComponentComponentsTicketDetails':
            return 'TicketDetailsBlock';
        case 'ComponentComponentsNotificationList':
            return 'NotificationListBlock';
        case 'ComponentComponentsNotificationDetails':
            return 'NotificationDetailsBlock';
        case 'ComponentComponentsInvoiceList':
            return 'InvoiceListBlock';
        case 'ComponentComponentsPaymentsSummary':
            return 'PaymentsSummaryBlock';
        case 'ComponentComponentsPaymentsHistory':
            return 'PaymentsHistoryBlock';
        case 'ComponentComponentsUserAccount':
            return 'UserAccountBlock';
        case 'ComponentComponentsServiceList':
            return 'ServiceListBlock';
        case 'ComponentComponentsServiceDetails':
            return 'ServiceDetailsBlock';
        case 'ComponentComponentsTicketRecent':
            return 'TicketRecentBlock';
        case 'ComponentComponentsSurveyJsComponent':
            return 'SurveyJsBlock';
        case 'ComponentComponentsOrderList':
            return 'OrderListBlock';
        case 'ComponentComponentsQuickLinks':
            return 'QuickLinksBlock';
    }
};

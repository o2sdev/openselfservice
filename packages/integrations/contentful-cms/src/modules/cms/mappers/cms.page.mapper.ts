import { NotFoundException } from '@nestjs/common';

import { CMS, Models } from '@o2s/framework/modules';

import {
    ComponentBaseFragment,
    OneColumnTemplateFragment,
    PageFragment,
    SeoFragment,
    TwoColumnTemplateFragment,
} from '@/generated/contentful';

import { mapRoles } from './cms.roles.mapper';

export const mapPage = (entryPage: PageFragment): CMS.Model.Page.Page => {
    const template = mapTemplate(entryPage.template);

    if (!template) throw new NotFoundException();

    const seo = mapSeo(entryPage.seo);

    return {
        id: entryPage.sys.id,
        slug: entryPage.slug || '',
        roles: mapRoles(entryPage.permissions).map((r) => r),
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

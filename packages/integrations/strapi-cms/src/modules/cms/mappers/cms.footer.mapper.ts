import { NotFoundException } from '@nestjs/common';

import { CMS, Models } from '@o2s/framework/modules';

import { GetFooterQuery, NavigationGroupFragment, NavigationItemFragment } from '@/generated/strapi';

export const mapFooter = (data: GetFooterQuery, baseURL?: string): CMS.Model.Footer.Footer => {
    const component = data.footer!;

    if (!component) {
        throw new NotFoundException();
    }

    return {
        id: component.documentId,
        title: component.title,
        logo: {
            url: `${baseURL}${component.logo.url}`,
            alt: component.logo.alternativeText || '',
            width: component.logo.width,
            height: component.logo.height,
        },
        items: component.items
            .filter((item) => Object.keys(item).length !== 0)
            .map((item) => mapNaviagation(item as NavigationGroupFragment | NavigationItemFragment)),
        copyright: component.copyright,
    };
};

const mapNaviagation = (
    item: NavigationGroupFragment | NavigationItemFragment,
): Models.Navigation.NavigationGroup | Models.Navigation.NavigationItem => {
    switch (item.__typename) {
        case 'ComponentContentNavigationGroup':
            return {
                __typename: 'NavigationGroup',
                title: item.title,
                items: item.items?.map((item) => mapFooterItem(item)),
            };
        case 'ComponentContentNavigationItem':
            return mapFooterItem(item);
        default:
            throw new NotFoundException();
    }
};

const mapFooterItem = (item: NavigationItemFragment): Models.Navigation.NavigationItem => {
    return {
        __typename: 'NavigationItem',
        label: item.label,
        url: item.url || item.page?.slug || '/',
        description: item.description,
    };
};
